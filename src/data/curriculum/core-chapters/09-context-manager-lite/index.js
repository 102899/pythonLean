export default {
  id: 'core-09-context-manager-lite',
  title: "上下文管理器最小集：with、contextlib.contextmanager",
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">JS &rarr; Python：上下文管理器轻量版</h3>
          
          <div class="space-y-8">
            
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">1. 资源释放：try/finally ↔ with</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>const res = acquire();
try {
  use(res);
} finally {
  release(res);
}</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>from pathlib import Path
p = Path('example.txt')
with p.open('w', encoding='utf-8') as f:
    f.write('hello')</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> <code>with</code> 管理资源生命周期；异常也会正确关闭与清理。
                </p>
            </section>
            
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">Core</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">2. 快速自定义：contextlib.contextmanager</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>function withScope(prefix, fn) {
  console.log(prefix + ' start');
  try { fn(); }
  finally { console.log(prefix + ' end'); }
}
withScope('Task', () => { console.log('work'); })</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>from contextlib import contextmanager
@contextmanager
def managed(name):
    print(name + " start")
    try:
        yield name
    finally:
        print(name + " end")
with managed("Task") as n:
    print("work")</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> <code>@contextmanager</code> 以 <code>yield</code> 分隔进入与退出；退出总会执行。
                </p>
            </section>
          </div>
        `,
  concepts: [
    { id: 'core_with_open', label: 'with open', type: 'approach', desc: '自动关闭文件与资源。', refJs: 'try/finally' },
    { id: 'core_contextmanager', label: '@contextmanager', type: 'syntax', desc: '装饰器快速定义上下文管理器。', refJs: '包装函数' },
    { id: 'core_enter_exit', label: '__enter__/__exit__', type: 'concept', desc: '类实现上下文协议。', refJs: '类钩子' }
  ],
  code: `from contextlib import contextmanager
@contextmanager
def managed(name):
    print(name + " start")
    try:
        yield name
    finally:
        print(name + " end")
with managed("Task") as n:
    print("work")`,
  quiz: [
    {
      type: 'code',
      question: "使用 contextlib.redirect_stdout 捕获输出并打印",
      initialCode: `from io import StringIO
from contextlib import redirect_stdout
buf = StringIO()
with redirect_stdout(buf):
    print("alpha")
    print("beta")
print("Captured:", buf.getvalue().strip())`,
      expectedOutput: "Captured: alpha\nbeta",
      validationType: 'output',
      standardCode: `from io import StringIO
from contextlib import redirect_stdout
buf = StringIO()
with redirect_stdout(buf):
    print("alpha")
    print("beta")
print(f"Captured: {buf.getvalue().strip()}")`,
      explanation: "用上下文管理器重定向标准输出并在退出后读取缓冲。"
    },
    {
      type: 'choice',
      question: "快速创建自定义上下文管理器的方式是？",
      options: ["@contextmanager", "__enter__/__exit__", "with open", "try/finally"],
      correctAnswer: "@contextmanager"
    }
  ]
}
