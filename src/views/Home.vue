<template>
  <div class="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 transition-colors duration-300 selection:bg-indigo-500 selection:text-white overflow-x-hidden font-sans">
    
    <!-- Navigation / Header -->
    <nav class="fixed top-0 w-full z-40 px-6 py-4 flex justify-between items-center bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div class="flex items-center gap-2">
        <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-indigo-500/20">
          P
        </div>
        <span class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-400">
          PythonLean
        </span>
      </div>
      
      <div class="flex items-center gap-4">
        <!-- Theme Toggle Removed as per request -->
        <a href="https://github.com/102899/python-starter-kit" target="_blank" class="hidden sm:block text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
          GitHub
        </a>
      </div>
    </nav>

    <!-- Hero Section -->
    <main class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
      <!-- Decorator Blobs -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none z-0">
        <div class="absolute top-20 left-10 w-96 h-96 bg-purple-300/30 dark:bg-purple-900/20 rounded-full blur-[100px] animate-blob"></div>
        <div class="absolute top-40 right-10 w-96 h-96 bg-indigo-300/30 dark:bg-indigo-900/20 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
        <div class="absolute bottom-20 left-1/3 w-96 h-96 bg-blue-300/30 dark:bg-blue-900/20 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
      </div>

      <div class="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-xs font-bold mb-8 uppercase tracking-wide border border-indigo-100 dark:border-indigo-500/20">
          <span class="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
          For Frontend Developers
        </div>

        <!-- Progress Dashboard (New) -->
        <div v-if="initialized && totalStats.totalChapters > 0" class="mb-12 inline-flex items-center gap-6 p-2 pr-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md rounded-2xl border border-white/50 dark:border-slate-700/50 shadow-xl shadow-indigo-500/5 animate-fade-in-up">
           <div class="relative w-16 h-16 shrink-0">
             <svg class="w-full h-full transform -rotate-90">
               <circle cx="32" cy="32" r="28" stroke="currentColor" stroke-width="6" fill="none" class="text-slate-200 dark:text-slate-700" />
               <circle cx="32" cy="32" r="28" stroke="currentColor" stroke-width="6" fill="none" class="text-indigo-500" :stroke-dasharray="175.9" :stroke-dashoffset="175.9 - (175.9 * totalStats.progressPercentage) / 100" stroke-linecap="round" />
             </svg>
             <span class="absolute inset-0 flex items-center justify-center text-xs font-bold text-slate-700 dark:text-slate-300">{{ totalStats.progressPercentage }}%</span>
           </div>
           
           <div class="text-left">
             <div class="text-sm font-bold text-slate-800 dark:text-white mb-0.5">
               整体学习进度
             </div>
             <div class="text-xs text-slate-500 dark:text-slate-400">
               已完成 {{ totalStats.completedChapters }} / {{ totalStats.totalChapters }} 章节
             </div>
           </div>

           <div class="h-8 w-px bg-slate-200 dark:bg-slate-700 mx-2"></div>
           
           <div class="text-left">
             <div class="text-sm font-bold text-slate-800 dark:text-white mb-0.5 flex items-center gap-1.5">
               <span>新内容</span>
               <span v-if="newContentCount > 0" class="flex h-2 w-2 relative">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
               </span>
             </div>
             <div class="text-xs text-slate-500 dark:text-slate-400">
               {{ newContentCount }} 节新课更新
             </div>
           </div>
        </div>


        
        <h1 class="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight text-slate-900 dark:text-white">
          像写 JavaScript 一样 <br> 
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
            精通 Python
          </span>
        </h1>
        
        <p class="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          利用你的现有知识体系，通过对比学习法，快速掌握 Python。
          <br class="hidden sm:block">
          无需配置环境，浏览器内直接运行。
        </p>
        
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <router-link to="/editor" class="group relative px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold shadow-xl shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 overflow-hidden">
            <span class="relative z-10">立即开始 (Web)</span>
            <svg class="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
            <div class="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </router-link>
          
          <button @click="showVsCodeModal = true" class="px-8 py-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-750 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-2">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M23.15 2.587l-9.97 10.026 9.92 9.2c.45.42 1.25.12 1.25-.63v-18c0-.71-.74-1.07-1.2-.596zM.606 6.38L8.68 12.01l-8.15 5.56c-.52.36-1.23-.05-1.23-.74V7.07c0-.66.68-1.05 1.2-.69zm1.85 7.15L10.96 8v8L2.456 10.47a.75.75 0 010-1.08l.006.004zM12.44 1.48L21.37 9.8 12.44 18.1c-.26.24-.68.04-.68-.3V2.78c0-.34.42-.54.68-.3z"/></svg>
            <span>VS Code 工作流</span>
          </button>
        </div>
      </div>
    </main>

    <!-- Features Section -->
    <section class="py-24 bg-slate-100 dark:bg-slate-800/50 relative border-t border-slate-200 dark:border-slate-800">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 border border-slate-100 dark:border-slate-800 group">
            <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
            </div>
            <h3 class="text-xl font-bold mb-3 text-slate-900 dark:text-white">WebAssembly 驱动</h3>
            <p class="text-slate-500 dark:text-slate-400 leading-relaxed">
              基于 Pyodide 技术，直接在浏览器中编译运行 Python 代码。零延迟，零服务端依赖。
            </p>
          </div>

          <div class="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 border border-slate-100 dark:border-slate-800 group">
            <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <h3 class="text-xl font-bold mb-3 text-slate-900 dark:text-white">知识迁移</h3>
            <p class="text-slate-500 dark:text-slate-400 leading-relaxed">
              不说废话。直接对比 JS 与 Python 的语法差异，利用你的筋肉记忆，并在实战中巩固。
            </p>
          </div>

          <div class="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 border border-slate-100 dark:border-slate-800 group">
            <div class="w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            </div>
            <h3 class="text-xl font-bold mb-3 text-slate-900 dark:text-white">无缝本地开发</h3>
            <p class="text-slate-500 dark:text-slate-400 leading-relaxed">
              通过 Deep Link 一键唤起 VS Code，自动克隆并打开项目，从网页学习平滑过渡到本地开发。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-12 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500 dark:text-slate-400 text-sm">
      <p>© 2026 PythonLean. Built for Builders.</p>
    </footer>

    <!-- VS Code Modal -->
    <transition enter-active-class="transition duration-200 ease-out" enter-from-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95" enter-to-class="translate-y-0 opacity-100 sm:scale-100" leave-active-class="transition duration-150 ease-in" leave-from-class="translate-y-0 opacity-100 sm:scale-100" leave-to-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95">
      <div v-if="showVsCodeModal" class="fixed inset-0 z-50 flex items-center justify-center px-4">
        <div class="absolute inset-0 bg-slate-900/40 dark:bg-black/60 backdrop-blur-sm" @click="showVsCodeModal = false"></div>
        <div class="relative bg-white dark:bg-slate-900 rounded-2xl max-w-lg w-full p-8 border border-slate-200 dark:border-slate-700 shadow-2xl">
          <h3 class="text-2xl font-bold mb-4 text-slate-900 dark:text-white">在 VS Code 中打开</h3>
          <p class="text-slate-500 dark:text-slate-400 mb-6">
             准备好开始实战了吗？使用下方按钮将入门套件直接克隆到您的 VS Code 中。
          </p>
          
          <div class="space-y-4">
             <a href="vscode://vscode.git/clone?url=https://github.com/102899/python-starter-kit.git"
                class="block w-full text-center py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all hover:scale-[1.02] shadow-lg shadow-blue-500/20">
                🚀 克隆入门套件 (Local)
             </a>
             <div class="flex flex-col gap-2">
               <span class="text-xs text-slate-400 text-center">或手动运行:</span>
               <code class="bg-slate-100 dark:bg-black/30 px-3 py-2 rounded-lg text-xs font-mono select-all text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 break-all text-center">
                 git clone https://github.com/102899/python-starter-kit.git
               </code>
             </div>
          </div>
          
          <button @click="showVsCodeModal = false" class="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
      </div>
    </transition>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { isDark, toggleDark } from '../composables/useTheme'
import { useProgress } from '../composables/useProgress'

const { totalStats, newContentCount, initialized } = useProgress()

const showVsCodeModal = ref(false)
</script>

<style scoped>
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}
.animate-blob {
  animation: blob 7s infinite;
}
.animation-delay-2000 {
  animation-delay: 2s;
}
.animation-delay-4000 {
  animation-delay: 4s;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}
</style>
