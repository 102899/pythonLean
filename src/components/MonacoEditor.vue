<script setup>
import { ref, onMounted, onBeforeUnmount, watch, shallowRef, nextTick } from 'vue'
import * as monaco from 'monaco-editor'
import 'monaco-editor/min/vs/editor/editor.main.css'

// --- Monaco Worker Configuration ---
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker'
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'

// Setup global Monaco Environment only once
if (!self.MonacoEnvironment) {
  self.MonacoEnvironment = {
    getWorker(_, label) {
      if (label === 'json') {
        return new jsonWorker()
      }
      if (label === 'css' || label === 'scss' || label === 'less') {
        return new cssWorker()
      }
      if (label === 'html' || label === 'handlebars' || label === 'razor') {
        return new htmlWorker()
      }
      if (label === 'typescript' || label === 'javascript') {
        return new tsWorker()
      }
      return new editorWorker()
    }
  }
}

const props = defineProps({
  modelValue: {
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
  readOnly: {
    type: Boolean,
    default: false
  },
  height: {
      type: [String, Number],
      default: '100%'
  },
  minHeight: {
      type: String, // e.g. '200px'
      default: '0px'
  }
})

const emit = defineEmits(['update:modelValue', 'editor-mounted'])

const editorContainer = ref(null)
const editorInstance = shallowRef(null)

// Initialize Editor
function initEditor() {
  if (!editorContainer.value) return

  // Dispose previous instance if exists
  if (editorInstance.value) {
    editorInstance.value.dispose()
  }

  editorInstance.value = monaco.editor.create(editorContainer.value, {
    value: props.modelValue,
    language: props.language,
    theme: props.theme,
    readOnly: props.readOnly,
    automaticLayout: true,
    minimap: { enabled: false },
    fontSize: 14,
    fontFamily: 'Menlo, Monaco, "Courier New", monospace',
    scrollBeyondLastLine: false,
    padding: { top: 16, bottom: 16 }
  })

  // Event Listeners
  editorInstance.value.onDidChangeModelContent(() => {
    const value = editorInstance.value.getValue()
    if (value !== props.modelValue) {
      emit('update:modelValue', value)
    }
  })

  emit('editor-mounted', editorInstance.value)
}

// Watchers
watch(() => props.modelValue, (newValue) => {
  if (editorInstance.value) {
    const currentValue = editorInstance.value.getValue()
    if (currentValue !== newValue) {
        // Keep cursor position if possible? No, full replace usually resets. 
        // For tutorial purposes, setValue is usually fine.
      editorInstance.value.setValue(newValue)
    }
  }
})

watch(() => props.theme, (newTheme) => {
  if (editorInstance.value) {
    monaco.editor.setTheme(newTheme)
  }
})

watch(() => props.language, (newLang) => {
    if (editorInstance.value) {
        monaco.editor.setModelLanguage(editorInstance.value.getModel(), newLang)
    }
})

// Wait for DOM
watch(editorContainer, (el) => {
    if (el) {
        initEditor()
    }
})

onBeforeUnmount(() => {
  if (editorInstance.value) {
    editorInstance.value.dispose()
  }
})

// Expose checks
defineExpose({
    editorInstance
})
</script>

<template>
  <div ref="editorContainer" class="monaco-editor-container" :style="{ height: height, minHeight: minHeight }"></div>
</template>

<style scoped>
.monaco-editor-container {
    width: 100%;
    overflow: hidden;
}
</style>
