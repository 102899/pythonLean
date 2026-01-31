<script setup>
import { ref, watch, shallowRef, onBeforeUnmount } from 'vue'
import * as monaco from 'monaco-editor'
import 'monaco-editor/min/vs/editor/editor.main.css'

const props = defineProps({
  original: {
    type: String,
    default: ''
  },
  modified: {
    type: String,
    default: ''
  },
  language: {
    type: String,
    default: 'python'
  },
  theme: {
    type: String,
    default: 'vs'
  },
  height: {
      type: [String, Number],
      default: '300px'
  }
})

const editorContainer = ref(null)
const diffEditorInstance = shallowRef(null)

function initDiffEditor() {
  if (!editorContainer.value) return
  
  if (diffEditorInstance.value) {
      diffEditorInstance.value.dispose()
  }

  diffEditorInstance.value = monaco.editor.createDiffEditor(editorContainer.value, {
    theme: props.theme,
    automaticLayout: true,
    readOnly: true,
    fontSize: 12,
    renderSideBySide: true,
    useInlineViewWhenSpaceIsLimited: false
  })
  
  updateDiffModels()
}

function updateDiffModels() {
    if (!diffEditorInstance.value) return
    
    const originalModel = monaco.editor.createModel(props.original, props.language)
    const modifiedModel = monaco.editor.createModel(props.modified, props.language)
    
    diffEditorInstance.value.setModel({
        original: originalModel,
        modified: modifiedModel
    })
}

watch(editorContainer, (newEl) => {
    if (newEl) initDiffEditor()
})

watch(() => [props.original, props.modified, props.language], () => {
    updateDiffModels()
})

watch(() => props.theme, (newTheme) => {
    if (diffEditorInstance.value) {
        monaco.editor.setTheme(newTheme)
    }
})

onBeforeUnmount(() => {
    if (diffEditorInstance.value) {
        diffEditorInstance.value.dispose()
    }
})
</script>

<template>
  <div ref="editorContainer" class="monaco-diff-container" :style="{ height: height }"></div>
</template>

<style scoped>
.monaco-diff-container {
    width: 100%;
    overflow: hidden;
    border: 1px solid #e2e8f0; /* slate-200 */
}
:global(.dark) .monaco-diff-container {
    border-color: #1e293b; /* slate-800 */
}
</style>
