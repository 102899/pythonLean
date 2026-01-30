<script setup>
import { ref, onMounted, computed } from 'vue'
import { usePyodide } from '../composables/usePyodide'

const code = ref(`print("Hello, World!")\n\n# Python list comprehension is like .map() in JS\nnumbers = [1, 2, 3, 4]\ndoubled = [n * 2 for n in numbers]\nprint(f"Doubled: {doubled}")`)
const { runPython, stdout, stderr, isReady, isLoading } = usePyodide()
import { isDark, toggleDark } from '../composables/useTheme'

const isExecuting = ref(false)


import { categories } from '../data/curriculum'
import { useProgress } from '../composables/useProgress'

const { 
  markComplete, 
  toggleComplete,
  isStepComplete, 
  isChapterStarted, 
  isChapterFullyComplete,
  getUncompletedCount,
  progress 
} = useProgress()

// Computed for current chapter status
const isCurrentStepComplete = computed(() => {
  if (!activeChapter.value) return false
  return isStepComplete(activeChapter.value.id, activeStep.value)
})

function handleStepToggle() {
  if (!activeChapter.value) return
  toggleComplete(activeChapter.value.id, activeStep.value)
}

function handleNextStep() {
  // Auto-mark current step as complete when proceeding
  if (activeChapter.value) {
    markComplete(activeChapter.value.id, activeStep.value)
  }
  
  if (activeStep.value === 'learn') activeStep.value = 'practice'
  else if (activeStep.value === 'practice') activeStep.value = 'quiz'
}

function handleRunCodeAutoMark() {
    handleRun()
    // Auto-mark practice as complete upon running code
    if (activeChapter.value && activeStep.value === 'practice') {
        markComplete(activeChapter.value.id, 'practice')
    }
}
const activeCategoryId = ref('basics')
const activeCategory = computed(() => categories.find(c => c.id === activeCategoryId.value))

const activeChapterIndex = ref(0)
const activeChapter = computed(() => activeCategory.value.chapters[activeChapterIndex.value])

// Learning Flow State
const activeStep = ref('learn') // 'learn', 'practice', 'quiz'
const steps = [
  { id: 'learn', label: '1. 知识剖析', icon: '📚' },
  { id: 'practice', label: '2. 代码实操', icon: '💻' },
  { id: 'quiz', label: '3. 检验考核', icon: '📝' }
]

// Quiz State
const quizAnswers = ref({})
const quizSubmitted = ref(false)
const quizScore = ref(0)

// Watch for category changes to reset chapter and step
import { watch } from 'vue'
watch(activeCategoryId, () => {
  activeChapterIndex.value = 0
  activeStep.value = 'learn'
  resetQuiz()
})

// Watch for chapter changes to update code and reset quiz
watch(activeChapter, (newChapter) => {
  if (newChapter && newChapter.code) {
    code.value = newChapter.code.trim()
  }
  resetQuiz()
  activeStep.value = 'learn'
}, { immediate: true })

function resetQuiz() {
  quizAnswers.value = {}
  quizSubmitted.value = false
  quizScore.value = 0
}

function submitQuiz() {
  if (!activeChapter.value.quiz) return
  
  let score = 0
  const total = activeChapter.value.quiz.length
  
  activeChapter.value.quiz.forEach((q, idx) => {
    if (quizAnswers.value[idx] === q.correctAnswer) {
      score++
    }
  })
  
  quizScore.value = Math.round((score / total) * 100)
  quizSubmitted.value = true
  
  if (quizScore.value === 100 && activeChapter.value) {
    markComplete(activeChapter.value.id, 'quiz')
  }
}

// Data Structure: Tiered Curriculum with Content & Quiz
// Note: Only populating the first chapter fully for demonstration


// Re-injecting the full categories data structure in the next step to ensure integrity if needed, 
// for now patching the categories definition above was illustrative. 
// REAL IMPLEMENTATION NOTE: I will use the *existing* assignment in the file but patched with the new fields.
// Since replace_file_content replaces a block, I need to be careful to match the existing text exactly 
// or replace the whole data block. 

onMounted(() => {
  // Preload Pyodide
  // usePyodide().initPyodide()
})

async function handleRun() {
  if (isExecuting.value) return
  isExecuting.value = true
  try {
    await runPython(code.value)
  } catch (e) {
    // Error already handled in composable's stderr
  } finally {
    isExecuting.value = false
  }
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
        
        <!-- Theme Toggle Removed -->

        <button 
          v-if="activeStep === 'practice'"
          @click="handleRunCodeAutoMark"
          :disabled="isLoading || isExecuting"
          class="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 md:px-5 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 shadow-lg shadow-indigo-500/20 active:scale-95">
          <svg v-if="isExecuting" class="animate-spin -ml-1 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span v-else>Run</span>
          <span v-if="!isExecuting && !isLoading" class="ml-0.5">▶</span>
        </button>
      </div>
    </header>

    <!-- Main Layout -->
    <div class="flex-1 flex overflow-hidden">
      <!-- Sidebar / Lessons (Level 2) -->
      <aside class="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col hidden md:flex shrink-0">
         <div class="p-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
           <h2 class="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">{{ activeCategory.title }}</h2>
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
      </aside>

      <!-- Content Area (Dynamic based on activeStep) -->
      <main class="flex-1 flex flex-col lg:flex-row min-w-0 bg-white dark:bg-slate-950 relative overflow-hidden">
        
        <transition name="fade-slide" mode="out-in">
        <!-- MODE 1: LEARN -->
        <div v-if="activeStep === 'learn'" key="learn" class="flex-1 overflow-y-auto p-8 max-w-4xl mx-auto w-full">
           <div class="prose prose-slate dark:prose-invert max-w-none">
             <h1 class="text-3xl font-bold mb-6 text-slate-900 dark:text-white">{{ activeChapter.title }}</h1>
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
        <div v-else-if="activeStep === 'practice'" key="practice" class="flex-1 flex flex-col lg:flex-row min-w-0 w-full">
          <div class="flex-1 border-r border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#1e1e1e] relative group flex flex-col min-h-0">
             <div class="flex items-center justify-between px-4 py-2 bg-white dark:bg-[#2d2d2d] border-b border-slate-200 dark:border-black/20 text-xs shadow-sm z-10 shrink-0">
                <span class="text-slate-500 dark:text-gray-400 font-mono">main.py</span>
                
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
             <textarea 
               class="flex-1 w-full bg-transparent text-slate-800 dark:text-gray-300 font-mono p-4 resize-none focus:outline-none leading-relaxed text-sm lg:text-base selection:bg-indigo-500/30 overflow-auto"
               spellcheck="false"
               v-model="code"
             ></textarea>
          </div>
          
          <div class="lg:w-[400px] bg-white dark:bg-slate-900 flex flex-col border-l border-slate-200 dark:border-slate-800 h-[40vh] lg:h-auto font-mono">
             <div class="px-4 py-2 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider flex justify-between items-center shrink-0">
               <span>Console Output</span>
               <button @click="(stdout = [], stderr = [])" class="hover:text-indigo-600 dark:hover:text-white transition-colors">Clear</button>
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
        <div v-else-if="activeStep === 'quiz'" key="quiz" class="flex-1 overflow-y-auto p-8 max-w-3xl mx-auto w-full">
           <div class="flex items-center justify-between mb-8">
             <h2 class="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
               <span class="text-3xl">📝</span> 章节考核: {{ activeChapter.title }}
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
                 </div>
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
           <div v-else class="text-center py-20 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700">
             <div class="text-4xl mb-4">🚧</div>
             <h3 class="text-xl font-bold text-slate-400">本章节尚未配置考核题目</h3>
             <p class="text-slate-500 mt-2">开发者正在努力编写中...</p>
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

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(10px);
}
</style>
