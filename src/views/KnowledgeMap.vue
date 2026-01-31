<template>
  <div class="h-screen w-full bg-[#0d1117] relative overflow-hidden text-slate-200">
    <!-- Header -->
    <div class="absolute top-0 left-0 right-0 z-50 p-4 flex justify-between items-center bg-gradient-to-b from-[#0d1117] via-[#0d1117]/80 to-transparent pointer-events-none">
      <div class="pointer-events-auto flex items-center gap-4">
        <button @click="$router.push('/editor')" class="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span class="font-medium text-sm">返回</span>
        </button>
        <h1 class="text-lg font-bold text-white/90">🧠 Python 知识宫殿</h1>
      </div>
      
      <div class="pointer-events-auto bg-[#161b22] backdrop-blur-md rounded-full px-4 py-1.5 border border-[#30363d] text-xs text-slate-400 flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        {{ nodeCount }} 个知识点
      </div>
    </div>

    <!-- Network Canvas -->
    <div ref="networkContainer" class="w-full h-full"></div>

    <!-- Detail Panel -->
    <transition name="slide-right">
      <div v-if="selectedNode" class="absolute top-0 right-0 h-full w-96 bg-[#161b22]/95 backdrop-blur-xl border-l border-[#30363d] shadow-2xl z-40 overflow-y-auto flex flex-col">
        <div class="p-6 pb-4 border-b border-[#21262d]">
          <button @click="selectedNode = null" class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#21262d] hover:bg-[#30363d] text-slate-400 hover:text-white transition-colors">✕</button>
          
          <div class="flex items-center gap-2 mb-3">
            <span :class="getNodeBadgeClass(selectedNode)" class="text-[10px] font-medium px-2.5 py-1 rounded-full border">
              {{ getNodeTypeName(selectedNode) }}
            </span>
          </div>
          
          <h2 class="text-xl font-bold text-white leading-tight">{{ selectedNode.label }}</h2>
        </div>
        
        <div class="p-6 flex-1 space-y-5">
          <p v-if="selectedNode.desc" class="text-slate-300 text-sm leading-relaxed">{{ selectedNode.desc }}</p>

          <div v-if="selectedNode.refJs" class="bg-[#21262d] rounded-xl p-4 border border-[#30363d]">
            <div class="flex items-center gap-2 mb-3">
              <span class="text-yellow-400 text-sm">⚡</span>
              <span class="text-xs font-bold text-yellow-400/80 uppercase tracking-wider">JavaScript 类比</span>
            </div>
            <div class="font-mono text-emerald-400 text-sm bg-[#0d1117] rounded-lg px-3 py-2 border border-[#30363d]">{{ selectedNode.refJs }}</div>
          </div>

          <div v-if="selectedNode.level === 3" class="bg-[#21262d] rounded-xl p-4 border border-[#30363d]">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-medium text-slate-400">掌握进度</span>
              <span class="text-sm font-bold" :class="selectedNode.mastery > 0.5 ? 'text-emerald-400' : 'text-slate-500'">
                {{ Math.round(selectedNode.mastery * 100) }}%
              </span>
            </div>
            <div class="h-1.5 bg-[#0d1117] rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r from-emerald-500 to-emerald-400" :style="{ width: `${selectedNode.mastery * 100}%` }"></div>
            </div>
          </div>
        </div>
        
        <div class="p-6 pt-4 border-t border-[#21262d]" v-if="selectedNode.level === 2">
          <button @click="goToChapter()" class="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold transition-colors flex items-center justify-center gap-2">
            开始学习
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { onMounted, ref, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Network } from 'vis-network'
import { DataSet } from 'vis-data'
import { useKnowledgeGraph } from '../composables/useKnowledgeGraph'

const route = useRoute()
const router = useRouter()
const { graphData } = useKnowledgeGraph()

const networkContainer = ref(null)
const selectedNode = ref(null)
const nodeCount = ref(0)

let network = null
let nodeDataMap = {}

// Fixed directions for 4 categories
const CATEGORY_DIRECTIONS = [
  { angle: -2.5, label: '左上' },
  { angle: -0.6, label: '右上' },
  { angle: 2.5, label: '左下' },
  { angle: 0.6, label: '右下' }
]

onMounted(() => {
  const data = graphData.value
  nodeCount.value = data.nodes.length

  data.nodes.forEach(n => {
    nodeDataMap[n.id] = n
  })

  // Layout parameters
  const centerX = 0
  const centerY = 0
  const categoryRadius = 180
  const chapterRadius = 280
  const conceptRadius = 200

  // Build maps
  const categories = data.nodes.filter(n => n.level === 1)
  const chapters = data.nodes.filter(n => n.level === 2)
  const concepts = data.nodes.filter(n => n.level === 3)
  
  const categoryDirectionMap = {}
  const chapterAngleMap = {} // Store each chapter's actual angle
  
  categories.forEach((cat, i) => {
    categoryDirectionMap[cat.id] = CATEGORY_DIRECTIONS[i % CATEGORY_DIRECTIONS.length]
  })

  // Calculate initial positions
  const nodePositions = {}
  
  // Root at center
  const rootNode = data.nodes.find(n => n.level === 0)
  if (rootNode) {
    nodePositions[rootNode.id] = { x: centerX, y: centerY }
  }

  // Categories at fixed directions
  categories.forEach((cat, i) => {
    const dir = CATEGORY_DIRECTIONS[i % CATEGORY_DIRECTIONS.length]
    nodePositions[cat.id] = {
      x: centerX + Math.cos(dir.angle) * categoryRadius,
      y: centerY + Math.sin(dir.angle) * categoryRadius
    }
  })

  // Chapters - spread in fan from category direction
  chapters.forEach(ch => {
    const catDir = categoryDirectionMap[ch.parent]
    if (!catDir) return
    
    const catPos = nodePositions[ch.parent]
    if (!catPos) return

    const siblingChapters = chapters.filter(c => c.parent === ch.parent)
    const chapterIndex = siblingChapters.indexOf(ch)
    const totalChapters = siblingChapters.length
    
    const fanSpread = 0.8
    const angleOffset = (chapterIndex - (totalChapters - 1) / 2) * (fanSpread / Math.max(totalChapters - 1, 1))
    const chapterAngle = catDir.angle + angleOffset
    
    // Store each chapter's unique angle
    chapterAngleMap[ch.id] = chapterAngle

    nodePositions[ch.id] = {
      x: catPos.x + Math.cos(chapterAngle) * chapterRadius,
      y: catPos.y + Math.sin(chapterAngle) * chapterRadius
    }
  })

  // Concepts - spread based on CHAPTER'S angle (not category's)
  concepts.forEach(con => {
    const chapterAngle = chapterAngleMap[con.parent]
    if (chapterAngle === undefined) return
    
    const chPos = nodePositions[con.parent]
    if (!chPos) return

    const siblingConcepts = concepts.filter(c => c.parent === con.parent)
    const conceptIndex = siblingConcepts.indexOf(con)
    const totalConcepts = siblingConcepts.length
    
    // Wider spread for concepts
    const fanSpread = 1.2
    const angleOffset = (conceptIndex - (totalConcepts - 1) / 2) * (fanSpread / Math.max(totalConcepts - 1, 1))
    const conceptAngle = chapterAngle + angleOffset

    nodePositions[con.id] = {
      x: chPos.x + Math.cos(conceptAngle) * conceptRadius,
      y: chPos.y + Math.sin(conceptAngle) * conceptRadius
    }
  })

  // Convert to vis-network format
  const visNodes = data.nodes.map(n => {
    const isRoot = n.level === 0
    const isCategory = n.level === 1
    const isChapter = n.level === 2
    const pos = nodePositions[n.id] || { x: 0, y: 0 }

    return {
      id: n.id,
      label: n.label,
      group: n.group,
      x: pos.x,
      y: pos.y,
      // NOT fixed - allow physics to adjust
      shape: 'box',
      margin: { 
        top: isRoot ? 14 : 10, 
        bottom: isRoot ? 14 : 10, 
        left: isRoot ? 24 : 16, 
        right: isRoot ? 24 : 16 
      },
      font: {
        color: isRoot ? '#fff' : isCategory ? '#fff' : isChapter ? '#6ee7b7' : '#cbd5e1',
        size: isRoot ? 18 : isCategory ? 15 : isChapter ? 13 : 11,
        face: 'system-ui, sans-serif',
        bold: isRoot || isCategory || isChapter
      },
      color: {
        background: isRoot ? '#6366f1' : isCategory ? '#1f2937' : isChapter ? '#064e3b' : '#21262d',
        border: isRoot ? '#818cf8' : isCategory ? '#6366f1' : isChapter ? '#10b981' : '#30363d',
        highlight: {
          background: isRoot ? '#4f46e5' : isCategory ? '#374151' : isChapter ? '#065f46' : '#30363d',
          border: '#22c55e'
        },
        hover: {
          background: isRoot ? '#4f46e5' : isCategory ? '#374151' : isChapter ? '#065f46' : '#30363d',
          border: '#22c55e'
        }
      },
      borderWidth: isRoot ? 3 : isCategory ? 2 : 1,
      shadow: {
        enabled: true,
        color: isRoot ? 'rgba(99, 102, 241, 0.5)' : 'rgba(0,0,0,0.3)',
        size: isRoot ? 15 : 8,
        x: 0,
        y: isRoot ? 0 : 4
      },
      // Mass for physics - heavier = more stable
      mass: isRoot ? 10 : isCategory ? 5 : isChapter ? 3 : 1
    }
  })

  const visEdges = data.links.map((l, i) => ({
    id: `edge-${i}`,
    from: l.source,
    to: l.target,
    color: {
      color: '#22c55e',
      highlight: '#4ade80',
      hover: '#4ade80',
      opacity: 0.6
    },
    width: l.source === 'python-learning-root' ? 3 : 2,
    smooth: false,
    shadow: {
      enabled: true,
      color: 'rgba(34, 197, 94, 0.3)',
      size: 4,
      x: 0,
      y: 0
    }
  }))

  const nodesDataset = new DataSet(visNodes)
  const edgesDataset = new DataSet(visEdges)

  // HYBRID approach: Initial positions + Physics for anti-collision
  const options = {
    nodes: {
      shape: 'box',
      borderWidth: 1,
      borderWidthSelected: 2
    },
    edges: {
      arrows: { to: false, from: false },
      smooth: false
    },
    layout: {
      improvedLayout: false,
      hierarchical: false
    },
    physics: {
      enabled: true,
      solver: 'barnesHut',
      barnesHut: {
        gravitationalConstant: -2000,
        centralGravity: 0.1,
        springLength: 150,
        springConstant: 0.05,
        damping: 0.5,
        avoidOverlap: 1  // Maximum overlap avoidance
      },
      stabilization: {
        enabled: true,
        iterations: 200,
        updateInterval: 25,
        fit: true
      },
      minVelocity: 1
    },
    interaction: {
      hover: true,
      tooltipDelay: 200,
      zoomView: true,
      dragView: true,
      dragNodes: true
    }
  }

  network = new Network(
    networkContainer.value,
    { nodes: nodesDataset, edges: edgesDataset },
    options
  )

  // After physics stabilization, freeze positions
  network.once('stabilizationIterationsDone', () => {
    // Disable physics to freeze positions
    setTimeout(() => {
      network.setOptions({ physics: { enabled: false } })
    }, 500)
    
    // Fit view
    network.fit({
      animation: {
        duration: 500,
        easingFunction: 'easeInOutQuad'
      }
    })
  })

  // Event: Node click
  network.on('click', (params) => {
    if (params.nodes.length > 0) {
      const nodeId = params.nodes[0]
      selectedNode.value = nodeDataMap[nodeId]
    } else {
      selectedNode.value = null
    }
  })

  // Focus on specific chapter if provided
  const focusChapterId = route.query.chapter
  if (focusChapterId) {
    network.once('stabilizationIterationsDone', () => {
      setTimeout(() => {
        network.focus(focusChapterId, {
          scale: 1.2,
          animation: {
            duration: 800,
            easingFunction: 'easeInOutQuad'
          }
        })
      }, 600)
    })
  }
})

// Helpers
const getNodeTypeName = (node) => {
  if (node.group === 'root') return '核心'
  if (node.group === 'category') return '分类'
  if (node.group === 'chapter') return '章节'
  return '知识点'
}

const getNodeBadgeClass = (node) => {
  if (node.group === 'root') return 'bg-purple-500/10 text-purple-400 border-purple-500/30'
  if (node.group === 'category') return 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30'
  if (node.group === 'chapter') return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
  return 'bg-pink-500/10 text-pink-400 border-pink-500/30'
}

const goToChapter = () => {
  selectedNode.value = null
  router.push('/editor')
}

onUnmounted(() => {
  if (network) {
    network.destroy()
    network = null
  }
})
</script>

<style scoped>
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.3s ease;
}
.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
}
</style>
