export default {
  id: 'core-07-dict-set-idioms-lite',
  title: "字典与集合技巧最小集：合并、默认值、集合运算",
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">Python 数据结构惯用法：Dict/Set 轻量版</h3>
          
          <div class="space-y-8">
            
            <!-- 1. 字典合并：JS 扩展 ↔ Python 解包 -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">1. 合并字典：{**a, **b}</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>const a = {x:1}, b = {y:2};
const c = { ...a, ...b };</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>a = {'x':1}; b = {'y':2}
c = {**a, **b}
print(c)</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 解包合并语义清晰；键冲突以后者覆盖前者。
                </p>
            </section>
            
            <!-- 2. 默认值：get / setdefault -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">Core</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">2. 默认值：安全访问与初始化</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>const score = obj.score ?? 0;</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>user = {'name':'alice'}
print(user.get('score', 0))
counts = {}
counts.setdefault('a', 0)
counts['a'] += 1
print(counts)</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> <code>get</code> 用于安全读取；<code>setdefault</code> 用于缺省初始化。
                </p>
            </section>
            
            <!-- 3. 集合运算：并/交/差 -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">Core</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">3. 集合：| &amp; -</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>// 手动集合运算示意</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>a = {1,2,3}; b = {2,3,4}
print(a | b)  # 并集
print(a &amp; b)  # 交集
print(a - b)  # 差集</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 集合提供代数运算；适合权限、标签等场景的集合逻辑。
                </p>
            </section>
          </div>
        `,
  concepts: [
    { id: 'core_dict_merge', label: '字典合并', type: 'approach', desc: '{**a, **b} 合并；后者覆盖。', refJs: '对象展开合并' },
    { id: 'core_default', label: '默认值', type: 'approach', desc: 'get 安全读取；setdefault 缺省初始化。', refJs: 'Null 合并运算符' },
    { id: 'core_set_ops', label: '集合运算', type: 'concept', desc: '| 并集；& 交集；- 差集。', refJs: '手动集合逻辑' }
  ],
  code: `a = {'x':1}; b = {'y':2}
c = {**a, **b}
print(c)

user = {'name':'alice'}
print(user.get('score', 0))
counts = {}
counts.setdefault('a', 0)
counts['a'] += 1
print(counts)

a = {1,2,3}; b = {2,3,4}
print(a | b)
print(a & b)
print(a - b)`,
  quiz: [
    {
      type: 'code',
      question: "统计字符出现次数并打印结果",
      initialCode: `text = "ababa"`,
      expectedOutput: "Counts: {'a': 3, 'b': 2}",
      validationType: 'output',
      standardCode: `text = "ababa"
counts = {}
for ch in text:
    counts.setdefault(ch, 0)
    counts[ch] += 1
print(f"Counts: {counts}")`,
      explanation: "用 setdefault 进行缺省初始化后累加。"
    },
    {
      type: 'choice',
      question: "集合的并集操作符是？",
      options: ["|", "&", "-", "+"],
      correctAnswer: "|"
    }
  ]
}
