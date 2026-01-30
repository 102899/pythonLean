import { ref } from 'vue'

// Singleton state
let pyodideInstance = null
const isReady = ref(false)
const isLoading = ref(false)
const initError = ref(null)

// Output buffer
const stdout = ref([])
const stderr = ref([])

const PYODIDE_VERSION = "0.25.0" // Using a known stable version that usually works well with CDNs
const INDEX_URL = `https://cdn.jsdelivr.net/pyodide/v${PYODIDE_VERSION}/full/`
const SCRIPT_URL = `https://cdn.jsdelivr.net/pyodide/v${PYODIDE_VERSION}/full/pyodide.js`

function loadScript(url) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${url}"]`)) {
      resolve()
      return
    }
    const script = document.createElement('script')
    script.src = url
    script.onload = () => resolve()
    script.onerror = (err) => reject(err)
    document.head.appendChild(script)
  })
}

export function usePyodide() {
  
  const initPyodide = async () => {
    if (pyodideInstance || isLoading.value) return 

    isLoading.value = true
    try {
      // 1. Load the JS file from CDN
      await loadScript(SCRIPT_URL)

      // 2. Initialize using the global object
      // Note: loadPyodide is now on window because we loaded the script
      pyodideInstance = await window.loadPyodide({
        indexURL: INDEX_URL,
        stdout: (text) => {
           console.log('Python stdout:', text)
           stdout.value.push(text)
        },
        stderr: (text) => {
           console.error('Python stderr:', text)
           stderr.value.push(text)
        }
      })
      isReady.value = true
    } catch (e) {
      console.error('Failed to load Pyodide', e)
      initError.value = e
    } finally {
      isLoading.value = false
    }
  }

  const runPython = async (code) => {
    if (!pyodideInstance) {
      await initPyodide()
    }
    
    // Clear previous output before run
    stdout.value = []
    stderr.value = []

    try {
      // Use loadPackagesFromImports to auto-install simple packages if needed
      await pyodideInstance.loadPackagesFromImports(code)
      
      const result = await pyodideInstance.runPythonAsync(code)
      return result
    } catch (e) {
      stderr.value.push(e.toString())
      throw e
    }
  }

  return {
    isReady,
    isLoading,
    initError,
    stdout,
    stderr,
    initPyodide,
    runPython
  }
}
