export default {
  id: 'core-10-decorator-lite',
  title: "装饰器最小集：@decorator、函数包装、保留签名",
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">JS &rarr; Python：装饰器轻量版</h3>
          
          <div class="space-y-8">
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">1. 高阶函数：包装与增强</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>const log = fn =&gt; (...args) =&gt; {
  console.log('start'); const r = fn(...args); console.log('end'); return r;
}
const add = (a,b) =&gt; a+b
const wrapped = log(add)
console.log(wrapped(2,3))</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>def log(fn):
    def wrapper(*args, **kwargs):
        print("start"); r = fn(*args, **kwargs); print("end"); return r
    return wrapper
@log
def add(a, b): return a + b
print(add(2,3))</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> Python 以 <code>@decorator</code> 语法糖应用包装函数；心智等价前端高阶函数。
                </p>
            </section>
            
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">Core</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">2. 保留签名：functools.wraps</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>// 包装函数时保留原函数名/注释的心智示意</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>from functools import wraps
def log(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        print("start"); r = fn(*args, **kwargs); print("end"); return r
    return wrapper</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 用 <code>@wraps</code> 复制原函数的元数据（名称、文档等）。
                </p>
            </section>
          </div>
        `,
  concepts: [
    { id: 'core_deco_basic', label: '@decorator', type: 'syntax', desc: '以语法糖应用包装函数。', refJs: '高阶函数' },
    { id: 'core_deco_wraps', label: 'functools.wraps', type: 'approach', desc: '保留原函数元数据。', refJs: '函数名保留' }
  ],
  code: `from functools import wraps
def log(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        print("start"); r = fn(*args, **kwargs); print("end"); return r
    return wrapper
@log
def add(a, b): return a + b
print(add(2,3))`,
  quiz: [
    {
      type: 'code',
      question: "为函数 multiply 应用日志装饰器并打印",
      initialCode: `def multiply(a, b): return a * b`,
      expectedOutput: "start\nend\n9",
      validationType: 'output',
      standardCode: `from functools import wraps
def log(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        print("start"); r = fn(*args, **kwargs); print("end"); return r
    return wrapper
@log
def multiply(a, b): return a * b
print(multiply(3,3))`,
      explanation: "用装饰器包装函数；执行前后打印语句。"
    },
    {
      type: 'choice',
      question: "保留原函数名称与文档的工具是？",
      options: ["functools.wraps", "contextlib.contextmanager", "property", "lambda"],
      correctAnswer: "functools.wraps"
    }
  ]
}
