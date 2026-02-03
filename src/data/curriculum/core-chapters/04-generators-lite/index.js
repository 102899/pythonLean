export default {
  id: 'core-04-generators-lite',
  title: "生成器最小集：yield、生成表达式、next",
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">Python 迭代与惰性：生成器轻量版</h3>
          
          <div class="space-y-8">
            
            <!-- 1. yield：按需产生序列 -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">Core</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">1. 生成器函数：yield</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>// 伪示例：按需产出值（概念对照）</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>def squares(n):
    for i in range(n):
        yield i * i
g = squares(3)
print(next(g))
print(list(g))</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> <code>yield</code> 让函数变迭代器；按需产生、节省内存。
                </p>
            </section>
            
            <!-- 2. 生成表达式：惰性管道 -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">Core</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">2. 生成表达式：(x for ...)</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>// 伪示例：链式惰性管道（概念对照）</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>nums = [1,2,3,4]
total = sum(x*x for x in nums if x % 2 == 0)
print(total)</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 生成表达式与聚合搭配（如 <code>sum</code>）获得惰性与简洁。
                </p>
            </section>
          </div>
        `,
  concepts: [
    { id: 'core_yield', label: 'yield', type: 'syntax', desc: '定义生成器函数，按需产出值。', refJs: '迭代器概念' },
    { id: 'core_gen_expr', label: '生成表达式', type: 'syntax', desc: '(x for ...) 惰性生成与聚合搭配。', refJs: 'lazy pipeline' },
    { id: 'core_next', label: 'next/iter', type: 'approach', desc: 'next 消费一次；iter 获取迭代器。', refJs: 'Iterator.next()' }
  ],
  code: `def squares(n):
    for i in range(n):
        yield i * i
g = squares(3)
print(next(g))
print(list(g))

nums = [1,2,3,4]
print(sum(x*x for x in nums if x % 2 == 0))`,
  quiz: [
    {
      type: 'code',
      question: "生成前两个平方并打印剩余列表",
      initialCode: `def squares(n):
    for i in range(n):
        yield i * i
g = squares(4)`,
      expectedOutput: "First: 0\nRest: [1, 4, 9]",
      validationType: 'output',
      standardCode: `def squares(n):
    for i in range(n):
        yield i * i
g = squares(4)
print(f"First: {next(g)}")
print(f"Rest: {list(g)}")`,
      explanation: "next 消费一个元素；剩余元素转列表打印。"
    },
    {
      type: 'choice',
      question: "下列哪个是生成表达式？",
      options: ["(x*x for x in nums)", "[x*x for x in nums]", "{x*x for x in nums}", "dict(x*x for x in nums)"],
      correctAnswer: "(x*x for x in nums)"
    }
  ]
}
