import { ref, watch, computed } from 'vue'
import { get, set } from 'idb-keyval'
import { categories } from '../data/curriculum'

// Global state for progress to be shared across components
const progress = ref({})
const initialized = ref(false)

// Initialize from IndexedDB
if (typeof window !== 'undefined') {
  get('pythonlean-progress-v2').then((val) => {
    if (val) {
      progress.value = val
    }
    initialized.value = true
  })
}

// Watch for changes and save to IndexedDB
watch(progress, (newVal) => {
  if (initialized.value) {
    set('pythonlean-progress-v2', JSON.parse(JSON.stringify(newVal)))
  }
}, { deep: true })

export function useProgress() {
  
  // Toggle completion status (allow unmarking)
  function toggleComplete(chapterId, step) {
    if (!progress.value[chapterId]) {
      progress.value[chapterId] = { learn: false, practice: false, quiz: false }
    }
    // Toggle logic
    progress.value[chapterId][step] = !progress.value[chapterId][step]
  }

  // Force mark as complete (for auto-advance logic)
  function markComplete(chapterId, step) {
    if (!progress.value[chapterId]) {
      progress.value[chapterId] = { learn: false, practice: false, quiz: false }
    }
    progress.value[chapterId][step] = true
  }

  function isStepComplete(chapterId, step) {
    return progress.value[chapterId]?.[step] || false
  }
  
  function isChapterStarted(chapterId) {
    const p = progress.value[chapterId]
    if (!p) return false
    return p.learn || p.practice || p.quiz
  }

  function isChapterFullyComplete(chapterId) {
    const p = progress.value[chapterId]
    if (!p) return false
    return p.learn && p.practice && p.quiz
  }

  // Computed: Uncompleted count per category
  function getUncompletedCount(categoryId) {
    const category = categories.find(c => c.id === categoryId)
    if (!category) return 0
    return category.chapters.filter(ch => !isChapterFullyComplete(ch.id)).length
  }

  // Statistics for Home Dashboard
  const totalStats = computed(() => {
    let totalSteps = 0
    let completedSteps = 0
    let totalChapters = 0
    let completedChapters = 0

    categories.forEach(cat => {
      cat.chapters.forEach(ch => {
        totalChapters++
        totalSteps += 3 // learn, practice, quiz
        
        if (isChapterFullyComplete(ch.id)) {
          completedChapters++
        }
        
        const p = progress.value[ch.id]
        if (p) {
          if (p.learn) completedSteps++
          if (p.practice) completedSteps++
          if (p.quiz) completedSteps++
        }
      })
    })

    return {
      progressPercentage: totalSteps === 0 ? 0 : Math.round((completedSteps / totalSteps) * 100),
      completedChapters,
      totalChapters
    }
  })

  // New Content Logic (Chapters updated after last visit)
  // For simplicity, we hardcode a "last visit" check or just check against a specific date for now
  // Real implementation would store 'lastVisit' in IDB as well.
  const newContentCount = computed(() => {
    const lastVisit = new Date('2026-01-01') // Simulate a user who hasn't visited in a while
    let count = 0
    categories.forEach(cat => {
      cat.chapters.forEach(ch => {
        if (ch.updatedAt && new Date(ch.updatedAt) > lastVisit) {
          count++
        }
      })
    })
    return count
  })

  return {
    progress,
    initialized,
    toggleComplete,
    markComplete,
    isStepComplete,
    isChapterStarted,
    isChapterFullyComplete,
    getUncompletedCount,
    totalStats,
    newContentCount
  }
}
