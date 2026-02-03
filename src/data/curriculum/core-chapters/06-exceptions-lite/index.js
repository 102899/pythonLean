export default {
  id: 'core-06-exceptions-lite',
  title: "异常处理最小集：try、except、else、finally、raise",
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">健壮性：异常处理轻量版</h3>
          
          <div class="space-y-8">
            
            <!-- 1. try/catch ↔ try/except -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">1. 捕获异常：try / except</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>try { JSON.parse("{x}"); }
catch (e) { console.log("Invalid"); }</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>try:
    int("x")
except ValueError:
    print("Invalid")</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 按类型捕获异常；处理用户输入或外部 IO 时尤为重要。
                </p>
            </section>
            
            <!-- 2. else / finally 与 raise -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">Core</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">2. 正常分支与收尾：else / finally / raise</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>// finally 始终执行；throw 抛出异常</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>try:
    print("OK")
except Exception:
    print("Err")
else:
    print("Done")
finally:
    print("Cleanup")

def check_age(age):
    if age &lt; 0:
        raise ValueError("age &lt; 0")</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> <code>else</code> 仅在无异常时执行；<code>finally</code> 总会执行；<code>raise</code> 主动抛出错误。
                </p>
            </section>
          </div>
        `,
  concepts: [
    { id: 'core_try_except', label: 'try/except', type: 'approach', desc: '捕获并处理异常。', refJs: 'try/catch' },
    { id: 'core_else_finally', label: 'else/finally', type: 'approach', desc: '无异常时 else；finally 始终执行。', refJs: 'finally' },
    { id: 'core_raise', label: 'raise', type: 'syntax', desc: '主动抛出异常用于信号与验证。', refJs: 'throw' }
  ],
  code: `try:
    int("x")
except ValueError:
    print("Invalid")
else:
    print("Parsed")
finally:
    print("Cleanup")

def check_age(age):
    if age < 0:
        raise ValueError("age < 0")`,
  quiz: [
    {
      type: 'code',
      question: "捕获除零错误并打印文案",
      initialCode: `def safe_div(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return "Infinity"
print(safe_div(1, 0))`,
      expectedOutput: "Infinity",
      validationType: 'output',
      standardCode: `def safe_div(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return "Infinity"
print(safe_div(1, 0))`,
      explanation: "捕获 ZeroDivisionError 返回文案。"
    },
    {
      type: 'choice',
      question: "无异常时执行的分支是？",
      options: ["else", "finally", "except", "raise"],
      correctAnswer: "else"
    }
  ]
}
