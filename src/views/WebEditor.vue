<script setup>
import { ref, onMounted, computed, onBeforeUnmount, watch, shallowRef, nextTick, reactive } from 'vue'
import { usePyodide } from '../composables/usePyodide'
import MonacoEditor from '../components/MonacoEditor.vue'
import MonacoDiffEditor from '../components/MonacoDiffEditor.vue'
import { isDark } from '../composables/useTheme'
import { categories as rawCategories } from '../data/curriculum'
import { workspaces } from '../data/projectWorkspace'
import { useProgress } from '../composables/useProgress'

// Core State
const code = ref(`print("Hello, World!")\n\n# Python list comprehension is like .map() in JS\nnumbers = [1, 2, 3, 4]\ndoubled = [n * 2 for n in numbers]\nprint(f"Doubled: {doubled}")`)
const { runPython, stdout, stderr, isReady, isLoading } = usePyodide()
const isExecuting = ref(false)

// Progress Composables
const { 
  markComplete, 
  toggleComplete,
  isStepComplete, 
  isChapterStarted, 
  isChapterFullyComplete,
  getUncompletedCount,
  progress 
} = useProgress()

// Navigation State
const categories = reactive(rawCategories)
const activeCategoryId = ref('basics')
const activeCategory = computed(() => categories.find(c => c.id === activeCategoryId.value))
const activeChapterIndex = ref(0)
const activeChapter = computed(() => activeCategory.value.chapters[activeChapterIndex.value])
const activeStep = ref('learn') // 'learn', 'practice', 'quiz'
const steps = [
  { id: 'learn', label: '1. 知识剖析', icon: '📚' },
  { id: 'practice', label: '2. 代码实操', icon: '💻' },
  { id: 'quiz', label: '3. 检验考核', icon: '📝' }
]

// Computed
const isCurrentStepComplete = computed(() => {
  if (!activeChapter.value) return false
  return isStepComplete(activeChapter.value.id, activeStep.value)
})
const selectedFilePath = ref(null)
const activeWorkspace = computed(() => {
  const ch = activeChapter.value
  if (!ch || !ch.workspaceId) return null
  const ws = workspaces[ch.workspaceId]
  return ws || null
})
// Accumulate chapters up to the current index
const accumulatedChapters = computed(() => {
  const cat = activeCategory.value
  const idx = activeChapterIndex.value
  if (!cat || !cat.chapters || idx < 0) return []
  return cat.chapters.slice(0, idx + 1)
})
// Build aggregated workspace files with per-chapter delta overlay
const aggregatedWorkspaceFiles = computed(() => {
  const ws = activeWorkspace.value
  if (!ws) return {}
  const base = { ...(ws.files || {}) }
  const chapters = accumulatedChapters.value
  for (const ch of chapters) {
    const delta = ch.workspaceDelta
    if (delta && typeof delta === 'object') {
      for (const [path, content] of Object.entries(delta)) {
        if (content === null) {
          delete base[path]
        } else {
          base[path] = content
        }
      }
    }
  }
  return base
})
// Visible files: derived purely from accumulation (base + deltas - deletions)
const chapterVisibleFiles = computed(() => {
  const aggFiles = aggregatedWorkspaceFiles.value
  if (!aggFiles) return []
  return Object.keys(aggFiles)
})
function buildTree(paths) {
  const root = new Map()
  for (const p of paths) {
    const segs = p.split('/')
    let curr = root
    let acc = ''
    for (let i = 0; i < segs.length; i++) {
      const s = segs[i]
      const last = i === segs.length - 1
      if (last) {
        curr.set(s, { type: 'file', name: s, path: p })
      } else {
        acc = acc ? acc + '/' + s : s
        let node = curr.get(s)
        if (!node) {
          node = { type: 'dir', name: s, path: acc + '/', children: new Map() }
          curr.set(s, node)
        }
        curr = node.children
      }
    }
  }
  function toArray(map) {
    const dirs = []
    const files = []
    for (const [, node] of map.entries()) {
      if (node.type === 'dir') {
        const arr = toArray(node.children)
        node.children = arr
        dirs.push(node)
      } else {
        files.push(node)
      }
    }
    dirs.sort((a, b) => a.name.localeCompare(b.name))
    files.sort((a, b) => a.name.localeCompare(b.name))
    return [...dirs, ...files]
  }
  return toArray(root)
}
const fileTree = computed(() => {
  const files = chapterVisibleFiles.value
  if (!files || files.length === 0) return []
  return buildTree(files)
})
const expandedDirs = ref({})
function isDirExpanded(path) {
  const v = expandedDirs.value[path]
  if (v === undefined) return true
  return v
}
function toggleDir(path) {
  expandedDirs.value[path] = !isDirExpanded(path)
}
function openFile(path) {
  const agg = aggregatedWorkspaceFiles.value
  if (!agg) return
  selectedFilePath.value = path
  const content = agg[path]
  if (typeof content === 'string') {
    code.value = content.trim()
  }
}

// Navigation Handlers
function handleStepToggle() {
  if (!activeChapter.value) return
  toggleComplete(activeChapter.value.id, activeStep.value)
}

function handleNextStep() {
  if (activeChapter.value) {
    if (activeStep.value === 'learn') markComplete(activeChapter.value.id, 'learn')
  }
  
  if (activeStep.value === 'learn') activeStep.value = 'practice'
  else if (activeStep.value === 'practice') activeStep.value = 'quiz'
}

async function handleRun() {
  if (isExecuting.value) return
  isExecuting.value = true
  try {
    await runPython(code.value)
  } catch (e) {
    // Error handled in composable
  } finally {
    isExecuting.value = false
  }
}

function handleRunCodeAutoMark() {
    handleRun()
    if (activeChapter.value && activeStep.value === 'practice') {
        markComplete(activeChapter.value.id, 'practice')
    }
}

// --- Quiz Logic ---
const quizAnswers = ref({})
const quizOutputs = ref({}) // Store stdout/stderr per question
const quizSubmitted = ref(false)
const quizScore = ref(0)
const diffVisible = ref({}) // Track which diffs are open
const revealedHints = ref({}) // Track which hints are revealed
const quizContainer = ref(null) // Ref for scrollable area

function resetQuiz() {
  quizAnswers.value = {}
  quizSubmitted.value = false
  quizScore.value = 0
  diffVisible.value = {}
  revealedHints.value = {}
}

function submitQuiz() {
  if (!activeChapter.value.quiz) return
  
  let score = 0
  const total = activeChapter.value.quiz.length
  
  activeChapter.value.quiz.forEach((q, idx) => {
    if (q.type === 'code') {
         if (quizAnswers.value[idx] === 'passed') score++
    } else {
        if (quizAnswers.value[idx] === q.correctAnswer) score++
    }
  })
  
  quizScore.value = Math.round((score / total) * 100)
  quizSubmitted.value = true
  
  if (quizScore.value === 100 && activeChapter.value) {
    markComplete(activeChapter.value.id, 'quiz')
  }

  // Auto-scroll to top to see score
  nextTick(() => {
    if (quizContainer.value) {
      quizContainer.value.scrollTo({ top: 0, behavior: 'smooth' })
    }
  })
}

async function runQuizCode(question, index, userCode) {
    if (!userCode || !userCode.trim()) return

    // Clear previous output for this question
    quizOutputs.value[index] = null

    // Always run the code to check for syntax errors and show output
    try {
        await runPython(userCode)
        
        // Capture output snapshot
        quizOutputs.value[index] = {
            stdout: [...stdout.value],
            stderr: [...stderr.value]
        }
        
        let passed = false
        
        if (question.validationType === 'keyword') {
            // Keyword Validation Strategy
            const keywords = question.requiredKeywords || []
            passed = keywords.every(kw => userCode.includes(kw))
        } else {
            // Default: Output Validation Strategy
            const outputString = stdout.value.join('\n')
            // Check if output includes expected string
            if (question.expectedOutput) {
                 passed = outputString.includes(question.expectedOutput)
            }
        }

        if (passed) {
             quizAnswers.value[index] = 'passed'
             // Auto-reveal hint if passed
             revealedHints.value[index] = true
        } else {
             quizAnswers.value[index] = 'failed'
             // If failed but no stderr, maybe show a hint in output?
             // Optional: quizOutputs.value[index].stderr.push("Validation failed.") 
        }
    } catch (err) {
        console.error("Quiz execution error:", err)
        quizAnswers.value[index] = 'failed'
        
        // Ensure error is visible in local output
        if (!quizOutputs.value[index]) {
             quizOutputs.value[index] = { stdout: [], stderr: [] }
        }
    }
    
    // Auto-open diff view if standard code is available, to improve UX
    if (question.standardCode) {
        diffVisible.value[index] = true
    }
}

// Watchers
watch(activeCategoryId, () => {
  activeChapterIndex.value = 0
  activeStep.value = 'learn'
  resetQuiz()
})

watch(activeChapter, (newChapter) => {
  if (newChapter && newChapter.workspaceId && activeWorkspace.value) {
    const files = chapterVisibleFiles.value
    const initial = newChapter.initialOpenFile && files.includes(newChapter.initialOpenFile) ? newChapter.initialOpenFile : files[0]
    if (initial) {
      openFile(initial)
    }
  } else if (newChapter && newChapter.code) {
    code.value = newChapter.code.trim()
    selectedFilePath.value = null
  }
  resetQuiz()
  activeStep.value = 'learn'
  stdout.value = []
  stderr.value = []
}, { immediate: true })

// --- Layout Resizing Logic ---

// Sidebar
const sidebarWidth = ref(260)
const isSidebarResizing = ref(false)

function startSidebarResize(e) {
  isSidebarResizing.value = true
  document.addEventListener('mousemove', handleSidebarResize)
  document.addEventListener('mouseup', stopSidebarResize)
  document.body.style.userSelect = 'none'
  document.body.style.cursor = 'col-resize'
}

function handleSidebarResize(e) {
  if (!isSidebarResizing.value) return
  let newWidth = e.clientX
  const MIN_WIDTH = 200
  const MAX_WIDTH = 500
  if (newWidth < MIN_WIDTH) newWidth = MIN_WIDTH
  if (newWidth > MAX_WIDTH) newWidth = MAX_WIDTH
  sidebarWidth.value = newWidth
}

function stopSidebarResize() {
  isSidebarResizing.value = false
  document.removeEventListener('mousemove', handleSidebarResize)
  document.removeEventListener('mouseup', stopSidebarResize)
  document.body.style.userSelect = ''
  document.body.style.cursor = ''
}

// Console
const consoleWidth = ref(400)
const isConsoleResizing = ref(false)

function startConsoleResize(e) {
  isConsoleResizing.value = true
  document.addEventListener('mousemove', handleConsoleResize)
  document.addEventListener('mouseup', stopConsoleResize)
  document.body.style.userSelect = 'none'
  document.body.style.cursor = 'col-resize'
}

function handleConsoleResize(e) {
  if (!isConsoleResizing.value) return
  const windowWidth = document.body.clientWidth
  let newWidth = windowWidth - e.clientX
  const MIN_C_WIDTH = 200
  // Max width should leave at least 300px for editor + sidebar
  // But strictly, dynamic limit: available space - sidebar(260) - min_editor(100)
  const MAX_C_WIDTH = Math.min(800, windowWidth - sidebarWidth.value - 100)
  
  if (newWidth < MIN_C_WIDTH) newWidth = MIN_C_WIDTH
  if (newWidth > MAX_C_WIDTH) newWidth = MAX_C_WIDTH
  consoleWidth.value = newWidth
}

function stopConsoleResize() {
  isConsoleResizing.value = false
  document.removeEventListener('mousemove', handleConsoleResize)
  document.removeEventListener('mouseup', stopConsoleResize)
  document.body.style.userSelect = ''
  document.body.style.cursor = ''
}
</script>

<template>
  <div class="h-screen bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-200 flex flex-col font-sans transition-colors duration-300 overflow-hidden">
    <!-- Header -->
    <header class="h-16 border-b border-slate-200 dark:border-slate-800 flex items-center px-4 md:px-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md justify-between z-20 relative">
      <div class="flex items-center gap-6">
        <router-link to="/" class="flex items-center gap-2 group">
          <div class="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            P
          </div>
          <span class="text-lg font-bold text-slate-700 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">PythonLean</span>
        </router-link>
        
        <!-- Top Navigation (Level 1) -->
        <nav class="hidden md:flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
          <button v-for="cat in categories" :key="cat.id"
            @click="activeCategoryId = cat.id"
            class="px-3 py-1.5 rounded-md text-sm font-medium transition-all relative"
            :class="activeCategoryId === cat.id ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-700/50'">
            {{ cat.title }}
            <span v-if="getUncompletedCount(cat.id) > 0" class="ml-1.5 inline-flex items-center justify-center px-1.5 h-4 text-[10px] font-bold leading-none text-white bg-emerald-500 rounded-full">
              {{ getUncompletedCount(cat.id) }}
            </span>
          </button>
        </nav>
      </div>
      
      <div class="flex items-center gap-4">
        <!-- Brain Entry -->
        <button 
          @click="$router.push({ path: '/brain', query: { chapter: activeChapter?.id } })" 
          title="Python 知识宫殿"
          class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 hover:text-indigo-300 transition-all border border-indigo-500/20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
          <span class="hidden md:inline font-bold text-sm">知识宫殿</span>
        </button>

        <!-- 3-Step Flow Navigation -->
        <div class="flex items-center mr-4 bg-slate-100 dark:bg-slate-800/50 p-1 rounded-full border border-slate-200 dark:border-slate-700 relative isolate">
           <button v-for="(step, idx) in steps" :key="step.id"
             @click="activeStep = step.id"
             class="relative px-4 py-1.5 rounded-full text-xs font-bold transition-all z-10 flex items-center gap-2"
             :class="[
               activeStep === step.id 
                 ? 'text-white' 
                 : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
             ]">
             <!-- Active Background Pill -->
             <div v-if="activeStep === step.id" class="absolute inset-0 bg-indigo-600 rounded-full shadow-md z-[-1]"></div>
             
             <!-- Checkmark if step completed -->
             <span v-if="activeChapter && isStepComplete(activeChapter.id, step.id)" class="text-[10px] mr-0.5" :class="activeStep === step.id ? 'text-white/80' : 'text-emerald-500'">✓</span>
             <span v-else class="opacity-80">{{ step.icon }}</span>
             
             <span :class="{'hidden sm:inline': activeStep !== step.id}">{{ step.label }}</span>
             
             <!-- Flow Arrow indicator -->
             <span v-if="idx < steps.length - 1 && activeStep !== step.id" class="ml-2 text-slate-300 dark:text-slate-700">→</span>
           </button>
        </div>

        <div v-if="isLoading" class="flex items-center gap-2 text-sm text-amber-500 dark:text-amber-400 hidden sm:flex">
          <svg class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span class="hidden lg:inline">Pyodide Loading...</span>
        </div>
        <div v-else-if="isReady" class="text-xs text-emerald-500 dark:text-emerald-400 flex items-center gap-1 hidden sm:flex bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded-full border border-emerald-100 dark:border-emerald-800">
           <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Ready
        </div>
        

      </div>
    </header>

    <!-- Main Layout -->
    <div class="flex-1 flex overflow-hidden">
      <!-- Sidebar / Lessons (Level 2) -->
      <aside 
        class="bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col hidden md:flex shrink-0 relative group/sidebar"
        :style="{ width: sidebarWidth + 'px' }"
      >
         <div class="p-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50 shrink-0">
          <h2 class="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">{{ activeCategory?.title }}</h2>
           <span class="text-[10px] bg-slate-200 dark:bg-slate-700 px-1.5 py-0.5 rounded text-slate-600 dark:text-slate-300 font-mono">{{ activeCategory.chapters.length }} 节</span>
         </div>
         <div class="flex-1 overflow-y-auto p-3 space-y-1">
           <div v-for="(module, index) in activeCategory.chapters" :key="index" 
                @click="activeChapterIndex = index"
                class="w-full text-left px-3 py-3 rounded-lg text-sm transition-all border border-transparent cursor-pointer group"
                :class="activeChapterIndex === index 
                  ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-500/30' 
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200'">
             <div class="flex items-start gap-3">
                <!-- Status Indicator -->
                <div class="flex items-center justify-center w-5 h-5 shrink-0 mt-0.5">
                  <!-- Completed -->
                  <div v-if="isChapterFullyComplete(module.id)" class="text-emerald-500">
                    <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
                  </div>
                  <!-- In Progress -->
                  <div v-else-if="isChapterStarted(module.id)" class="text-indigo-400">
                    <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" /></svg>
                  </div>
                  <!-- Not Started (Index) -->
                  <span v-else class="flex items-center justify-center w-5 h-5 rounded text-[10px] transition-colors"
                     :class="activeChapterIndex === index ? 'bg-indigo-600 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-500 group-hover:bg-slate-300 dark:group-hover:bg-slate-600'">
                     {{ index + 1 }}
                  </span>
                </div>
                
                <span class="leading-snug font-medium truncate">{{ module.title }}</span>
             </div>
           </div>
         </div>
         
         <!-- Resize Handle -->
         <div 
            class="absolute top-0 right-0 w-1 h-full cursor-col-resize hover:bg-indigo-500/50 active:bg-indigo-600 transition-colors z-20 group-hover/sidebar:bg-slate-200/50 dark:group-hover/sidebar:bg-slate-700/50"
            :class="{ 'bg-indigo-600': isSidebarResizing }"
            @mousedown.prevent="startSidebarResize"
         ></div>
      </aside>

      <!-- Content Area (Dynamic based on activeStep) -->
      <main class="flex-1 flex flex-col lg:flex-row min-w-0 bg-white dark:bg-slate-950 relative overflow-hidden">
        
        <transition name="fade-slide" mode="out-in">
        <!-- MODE 1: LEARN -->
        <div v-if="activeStep === 'learn'" key="learn" class="flex-1 overflow-y-auto p-8 max-w-4xl mx-auto w-full">
           <div class="prose prose-slate dark:prose-invert max-w-none">
             <h1 class="text-3xl font-bold mb-6 text-slate-900 dark:text-white">{{ activeChapter?.title }}</h1>
             <div v-if="activeChapter.learnContent" v-html="activeChapter.learnContent"></div>
             <div v-else class="text-slate-500 dark:text-slate-500 italic p-10 text-center border border-dashed border-slate-300 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-900">
               本章节暂无详解内容，请直接开始实操。
             </div>
           </div>
           
           <div class="mt-12 flex items-center justify-between pb-10 border-t border-slate-100 dark:border-slate-800 pt-8">
             <button @click="handleStepToggle" 
               class="px-5 py-2.5 rounded-lg font-bold transition-all flex items-center gap-2"
               :class="isCurrentStepComplete ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'">
               <span v-if="isCurrentStepComplete">✓ 已学习 (点击取消)</span>
               <span v-else>○ 标记为已学</span>
             </button>

             <button @click="handleNextStep" class="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-bold shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 hover:-translate-y-0.5 transition-all flex items-center gap-2">
               下一步：代码实操 ➜
             </button>
           </div>
        </div>

        <!-- MODE 2: PRACTICE (EDITOR) -->
        <div v-else-if="activeStep === 'practice'" key="practice" class="flex-1 flex flex-row min-w-0 w-full">
          <div class="flex-1 border-r border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#1e1e1e] relative group flex flex-col min-h-0 min-w-0">
             <div class="flex items-center justify-between px-4 py-2 bg-white dark:bg-[#2d2d2d] border-b border-slate-200 dark:border-black/20 text-xs shadow-sm z-10 shrink-0">
                <span class="text-slate-500 dark:text-gray-400 font-mono">{{ selectedFilePath || 'main.py' }}</span>
                
                <div class="flex items-center gap-3">
                   <button @click="handleStepToggle" 
                     class="flex items-center gap-1.5 px-2 py-1 rounded transition-colors text-xs"
                     :class="isCurrentStepComplete ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20' : 'text-slate-500 hover:text-slate-700 dark:text-gray-500 dark:hover:text-gray-300'">
                     <span class="text-[10px]">{{ isCurrentStepComplete ? '✓' : '○' }}</span>
                     <span>{{ isCurrentStepComplete ? '已完成实操' : '标记完成' }}</span>
                   </button>
                
                   <span class="text-slate-300 dark:text-gray-700">|</span>
                   
                   <span class="flex items-center gap-3">
                      <button @click="activeStep = 'learn'" class="hover:text-indigo-600 dark:hover:text-white text-slate-400 dark:text-gray-500 transition-colors">← 返回学习</button>
                      <span class="text-slate-300 dark:text-gray-700">|</span>
                      <button @click="activeStep = 'quiz'" class="hover:text-emerald-500 dark:hover:text-emerald-400 text-slate-400 dark:text-gray-500 transition-colors">前往考核 →</button>
                   </span>
                </div>
             </div>
             
             <div class="flex-1 w-full h-full overflow-hidden flex flex-row" style="min-height: 400px;">
               <div v-if="activeWorkspace && chapterVisibleFiles.length > 0" class="w-56 shrink-0 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-y-auto">
                  <template v-for="node in fileTree" :key="node.path">
                    <div v-if="node.type === 'dir'" @click="toggleDir(node.path)"
                      :class="[
                        'px-3 py-2 text-xs font-mono cursor-pointer select-none flex items-center gap-2',
                        isDirExpanded(node.path) 
                          ? 'text-slate-900 dark:text-slate-100' 
                          : 'text-slate-600 dark:text-slate-300'
                      ]">
                      <span class="w-4 text-center">{{ isDirExpanded(node.path) ? '▾' : '▸' }}</span>
                      <span>📁 {{ node.name }}</span>
                    </div>
                    <div v-else @click="openFile(node.path)"
                      :class="[
                        'px-3 py-2 text-xs font-mono cursor-pointer select-none pl-7',
                        selectedFilePath === node.path 
                          ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300' 
                          : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                      ]">
                      📄 {{ node.name }}
                    </div>
                    <div v-if="node.type === 'dir' && isDirExpanded(node.path)" class="pl-2">
                      <template v-for="child in node.children" :key="child.path">
                        <div v-if="child.type === 'dir'" @click="toggleDir(child.path)"
                          :class="[
                            'px-3 py-2 text-xs font-mono cursor-pointer select-none flex items-center gap-2 pl-4',
                            isDirExpanded(child.path) 
                              ? 'text-slate-900 dark:text-slate-100' 
                              : 'text-slate-600 dark:text-slate-300'
                          ]">
                          <span class="w-4 text-center">{{ isDirExpanded(child.path) ? '▾' : '▸' }}</span>
                          <span>📁 {{ child.name }}</span>
                        </div>
                        <div v-else @click="openFile(child.path)"
                          :class="[
                            'px-3 py-2 text-xs font-mono cursor-pointer select-none pl-9',
                            selectedFilePath === child.path 
                              ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300' 
                              : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                          ]">
                          📄 {{ child.name }}
                        </div>
                        <div v-if="child.type === 'dir' && isDirExpanded(child.path)" class="pl-4">
                          <div v-for="g in child.children" :key="g.path" @click="g.type === 'file' && openFile(g.path)"
                            :class="[
                              'px-3 py-2 text-xs font-mono cursor-pointer select-none pl-12',
                              selectedFilePath === g.path 
                                ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300' 
                                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                            ]">
                            <span v-if="g.type === 'file'">📄 {{ g.name }}</span>
                          </div>
                        </div>
                      </template>
                    </div>
                  </template>
               </div>
               <div class="flex-1 w-full h-full overflow-hidden">
                  <MonacoEditor 
                    v-model="code"
                    :theme="isDark ? 'vs-dark' : 'vs'"
                    language="python"
                  />
               </div>
             </div>
          </div>
          
          <div 
             :style="{ width: consoleWidth + 'px' }"
             class="lg:w-auto bg-white dark:bg-slate-900 flex flex-col border-l border-slate-200 dark:border-slate-800 h-[40vh] lg:h-auto font-mono relative shrink-0"
          >
             <!-- Console Resize Handle (Left) -->
             <div 
                class="absolute top-0 left-0 w-1 h-full cursor-col-resize hover:bg-indigo-500/50 active:bg-indigo-600 transition-colors z-20 opacity-0 hover:opacity-100"
                :class="{ 'bg-indigo-600 opacity-100': isConsoleResizing }"
                @mousedown.prevent="startConsoleResize"
             ></div>

             <div class="px-4 py-2 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider flex justify-between items-center shrink-0">
               <span>运行结果</span> <!-- Console Output -->
               
               <div class="flex items-center gap-3">
                  <button 
                    @click="handleRunCodeAutoMark"
                    :disabled="isLoading || isExecuting"
                    class="flex items-center gap-1 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <svg v-if="isExecuting" class="animate-spin h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span v-else>▶</span>
                    <span>运行</span>
                  </button>
                  
                  <span class="text-slate-300 dark:text-slate-600">|</span>

                  <button @click="(stdout = [], stderr = [])" class="hover:text-red-500 dark:hover:text-red-400 transition-colors">清空</button> <!-- Clear -->
               </div>
             </div>
             <div class="flex-1 p-4 text-sm overflow-y-auto space-y-1 bg-white dark:bg-[#0d0d0d]">
               <div v-for="(line, i) in stdout" :key="'out-'+i" class="text-slate-700 dark:text-emerald-400 break-words border-b border-slate-50 dark:border-slate-800/50 pb-0.5 last:border-0">{{ line }}</div>
               <div v-for="(line, i) in stderr" :key="'err-'+i" class="text-red-500 dark:text-red-400 break-words bg-red-50 dark:bg-red-900/10 p-1 rounded">{{ line }}</div>
               <div v-if="stdout.length === 0 && stderr.length === 0" class="text-slate-400 dark:text-gray-700 italic opacity-50 select-none mt-10 text-center">
                  Output will appear here...
               </div>
             </div>
          </div>
        </div>

        <!-- MODE 3: QUIZ -->
        <div v-else-if="activeStep === 'quiz'" key="quiz" class="flex-1 flex flex-col min-h-0 bg-slate-50/50 dark:bg-[#0a0a0a] relative">
           
           <!-- LAYER 1: Fixed Background & Visual Guides (Non-Scrolling) -->
           <div class="absolute inset-0 z-0 flex justify-between pointer-events-none overflow-hidden">
               <!-- Background Pattern -->
               <div class="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
                    style="background-image: repeating-linear-gradient(45deg, #6366f1 0, #6366f1 1px, transparent 0, transparent 50%); background-size: 10px 10px;">
               </div>

               <!-- Left Guide Area -->
               <div class="flex-1 hidden xl:flex items-center justify-center max-w-[calc(50%-28rem)]">
                    <span class="font-black text-slate-200 dark:text-slate-800 -rotate-90 whitespace-nowrap tracking-widest opacity-60 select-none"
                          style="font-size: clamp(2rem, 4vw, 6rem);">
                        SCROLL AREA
                    </span>
               </div>
               
               <!-- Spacer for Content Area (56rem/896px) -->
               <div class="w-full max-w-4xl shrink-0"></div>

               <!-- Right Guide Area -->
               <div class="flex-1 hidden xl:flex items-center justify-center max-w-[calc(50%-28rem)]">
                    <span class="font-black text-slate-200 dark:text-slate-800 rotate-90 whitespace-nowrap tracking-[0.4em] opacity-60 select-none"
                          style="font-size: clamp(2rem, 4vw, 6rem);">
                        上下滑动区域
                    </span>
               </div>
           </div>

           <!-- LAYER 2: Scrollable Content -->
           <div ref="quizContainer" class="flex-1 overflow-y-auto w-full relative z-10 scroll-smooth">
               <div class="max-w-4xl mx-auto p-8 min-h-full bg-white dark:bg-[#1e1e1e] border-x border-slate-100 dark:border-slate-800 shadow-sm">
                   <div class="flex items-center justify-between mb-8">
                     <h2 class="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                       <span class="text-3xl">📝</span> 章节考核: {{ activeChapter?.title }}
                     </h2>
                     
                     <button @click="handleStepToggle" 
                       class="px-4 py-2 rounded-lg font-bold transition-all flex items-center gap-2 text-sm"
                       :class="isCurrentStepComplete ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'">
                       <span>{{ isCurrentStepComplete ? '✓ 已完成' : '○ 标记完成' }}</span>
                     </button>
                   </div>


                   <div v-if="activeChapter.quiz && activeChapter.quiz.length > 0">
                     
                     <!-- Score Card -->
                     <div v-if="quizSubmitted" class="mb-8 p-6 rounded-2xl border flex items-center justify-between shadow-lg"
                       :class="quizScore >= 60 ? 'bg-emerald-50 dark:bg-emerald-900/10 border-emerald-200 dark:border-emerald-500/30' : 'bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-500/30'">
                       <div>
                          <div class="text-xs uppercase tracking-wider font-bold mb-1" :class="quizScore >= 60 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'">
                            考核得分
                          </div>
                          <div class="text-4xl font-bold text-slate-900 dark:text-white">{{ quizScore }}<span class="text-lg text-slate-400 dark:text-slate-500">/100</span></div>
                       </div>
                       <div class="text-right">
                          <div class="text-lg font-bold" :class="quizScore >= 60 ? 'text-emerald-600 dark:text-emerald-300' : 'text-red-600 dark:text-red-300'">
                            {{ quizScore >= 60 ? '恭喜通过！🎉' : '还需要再接再厉哦 💪' }}
                          </div>
                          <button @click="resetQuiz" class="text-xs underline mt-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white">重考</button>
                       </div>
                     </div>

                     <!-- Questions -->
                     <div class="space-y-6">
                       <div v-for="(q, idx) in activeChapter.quiz" :key="idx" class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
                         <div class="flex gap-4 mb-4">
                           <span class="bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300 text-xs font-bold px-2.5 py-1.5 rounded-lg h-fit shadow-inner">Q{{ idx + 1 }}</span>
                           <h3 class="font-bold text-lg leading-snug text-slate-800 dark:text-slate-200">{{ q.question }}</h3>
                         </div>

                         <div class="space-y-3 pl-2">
                           <template v-if="q.type === 'choice' || q.type === 'boolean'">
                             <label v-for="option in q.options" :key="option" 
                               class="flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 group"
                               :class="[
                                 quizSubmitted 
                                   ? (option === q.correctAnswer 
                                       ? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-500 dark:border-emerald-500' 
                                       : (quizAnswers[idx] === option 
                                           ? 'bg-red-50 dark:bg-red-900/20 border-red-500 dark:border-red-500' 
                                           : 'bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-slate-800 opacity-50'))
                                   : (quizAnswers[idx] === option 
                                       ? 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-500 text-indigo-700 dark:text-indigo-300' 
                                       : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700 text-slate-600 dark:text-slate-300')
                               ]">
                               <input type="radio" :name="'q'+idx" :value="option" v-model="quizAnswers[idx]" :disabled="quizSubmitted" class="hidden">
                               <span class="w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors"
                                 :class="[
                                   quizAnswers[idx] === option 
                                     ? 'border-indigo-500 bg-indigo-500 text-white' 
                                     : 'border-slate-300 dark:border-slate-500 text-transparent group-hover:border-indigo-400'
                                 ]">
                                 <span class="w-2 h-2 rounded-full bg-current"></span>
                               </span>
                               <span class="font-medium">{{ option }}</span>
                               <span v-if="quizSubmitted && option === q.correctAnswer" class="ml-auto text-emerald-600 dark:text-emerald-400 text-xs font-bold px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 rounded">✓ 正确答案</span>
                             </label>
                           </template>
                           <template v-else-if="q.type === 'code'">
                                <div class="w-full h-64 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden mb-3">
                                   <MonacoEditor 
                                      v-model="q.initialCode"
                                      :theme="isDark ? 'vs-dark' : 'vs'"
                                      language="python"
                                   />
                                </div>
                                
                                <!-- Inline Console Output -->
                                <div v-if="quizOutputs[idx]" class="mb-4 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-900 text-xs font-mono">
                                    <div class="px-3 py-1.5 bg-slate-800 text-slate-400 border-b border-slate-700 flex justify-between items-center">
                                        <span>Terminal Output</span>
                                        <span class="text-[10px] opacity-70">{{ quizOutputs[idx].stderr.length > 0 ? 'Error' : 'Success' }}</span>
                                    </div>
                                    <div class="p-3 max-h-40 overflow-y-auto space-y-1">
                                        <div v-for="(line, i) in quizOutputs[idx].stdout" :key="'out-'+i" class="text-emerald-400 break-words">{{ line }}</div>
                                        <div v-for="(line, i) in quizOutputs[idx].stderr" :key="'err-'+i" class="text-red-400 break-words">{{ line }}</div>
                                        <div v-if="quizOutputs[idx].stdout.length === 0 && quizOutputs[idx].stderr.length === 0" class="text-slate-600 italic">No output</div>
                                    </div>
                                </div>
                                
                                <!-- Solution Explanation (Shown after run) -->
                                <div v-if="quizAnswers[idx] && q.explanation" class="mb-4 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/50 rounded-lg p-4 animate-fade-in-up">
                                    <div class="flex items-center gap-2 mb-2">
                                        <span class="text-lg">💡</span>
                                        <span class="font-bold text-indigo-700 dark:text-indigo-300 text-sm">解题思路 & 知识点</span>
                                    </div>
                                    <div class="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-wrap">{{ q.explanation }}</div>
                                </div>

                                <div class="flex items-center justify-between flex-wrap gap-2">
                                    <!-- Hints / Requirements Area -->
                                    <div class="flex-1 min-w-[200px]">
                                        <div 
                                            @click="revealedHints[idx] = true"
                                            class="text-xs text-slate-500 transition-all duration-300 relative group cursor-pointer border border-transparent rounded py-1 px-2 -ml-2"
                                            :class="{ 
                                                'filter blur-sm opacity-50 hover:blur-none hover:opacity-100': !revealedHints[idx] && quizAnswers[idx] !== 'passed',
                                                'bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-slate-700': !revealedHints[idx] && quizAnswers[idx] !== 'passed'
                                            }"
                                        >
                                            <div v-if="!revealedHints[idx] && quizAnswers[idx] !== 'passed'" class="absolute inset-0 flex items-center justify-center z-10 font-bold text-slate-400 group-hover:hidden">
                                                👁️ 点击查看要求与预期输出
                                            </div>
                                            
                                            <div :class="{ 'opacity-20 group-hover:opacity-100': !revealedHints[idx] && quizAnswers[idx] !== 'passed' }">
                                                <span v-if="q.validationType === 'keyword'">要求: 包含关键代码 <code v-for="kw in q.requiredKeywords" :key="kw" class="bg-slate-100 dark:bg-slate-900 px-1 rounded mx-0.5 text-indigo-600 dark:text-indigo-400">{{ kw }}</code></span>
                                                <span v-else>预期输出: <code class="bg-slate-100 dark:bg-slate-900 px-1 rounded text-indigo-600 dark:text-indigo-400">{{ q.expectedOutput }}</code></span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="flex items-center gap-2">
                                        <!-- Status Icons -->
                                        <span v-if="quizAnswers[idx] === 'passed'" class="text-emerald-500 text-sm font-bold flex items-center gap-1">
                                            ✓ 测试通过
                                        </span>
                                        <span v-else-if="quizAnswers[idx] === 'failed'" class="text-red-500 text-sm font-bold flex items-center gap-1">
                                            ✕ 结果不匹配
                                        </span>
                                        
                                        <!-- Compare Button -->
                                        <button 
                                            v-if="q.standardCode"
                                            @click="diffVisible[idx] = !diffVisible[idx]"
                                            class="px-3 py-1.5 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-bold rounded flex items-center gap-1 transition-colors text-slate-600 dark:text-slate-300">
                                            {{ diffVisible[idx] ? '收起对比' : '与答案对比' }}
                                        </button>

                                        <!-- Run Button (Always enabled unless loading) -->
                                        <button 
                                            @click="runQuizCode(q, idx, q.initialCode)"
                                            :disabled="isLoading"
                                            class="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs font-bold rounded flex items-center gap-1 transition-colors">
                                            <span v-if="isLoading">Running...</span>
                                            <span v-else>▶ 运行验证</span>
                                        </button>
                                    </div>
                                </div>
                                
                                <!-- Diff View -->
                                <div v-if="diffVisible[idx]" class="mt-4 border-t border-slate-100 dark:border-slate-800 pt-4">
                                    <div class="mb-2 text-xs font-bold text-slate-500 flex justify-between">
                                        <span>标准答案 (左) vs 你的代码 (右)</span>
                                    </div>
                                    <div class="h-64 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700">
                                        <MonacoDiffEditor
                                            :original="q.standardCode"
                                            :modified="q.initialCode"
                                            :theme="isDark ? 'vs-dark' : 'vs'"
                                            language="python"
                                        />
                                    </div>
                                </div>
                           </template>
                         </div>
                       </div>

                       <div class="mt-10 py-8 border-t border-slate-200 dark:border-slate-800 flex justify-end">
                         <button v-if="!quizSubmitted" @click="submitQuiz" 
                           :disabled="Object.keys(quizAnswers).length < activeChapter.quiz.length"
                           class="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-indigo-500/20 text-lg transition-all hover:-translate-y-1">
                           提交答案
                         </button>
                       </div>
                   </div>
                   </div>

                   <div v-else class="text-center py-20 text-slate-400">
                     <div class="text-4xl mb-4">🚧</div>
                     本章考核题目正在生成中...
                   </div>
               </div>
           </div>
        </div>
        </transition>
      
      </main>
    </div>
  </div>
</template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>
