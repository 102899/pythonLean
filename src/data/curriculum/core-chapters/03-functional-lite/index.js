export default {
  id: 'core-03-functional-lite',
  title: "函数式最小集：lambda、map、filter、key",
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">JS &rarr; Python：函数式轻量版</h3>
          
          <div class="space-y-8">
            
            <!-- 1. 匿名函数：lambda ↔ 箭头函数 -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">1. 匿名函数：lambda</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>const double = x =&gt; x * 2;
console.log(double(3));</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>double = lambda x: x * 2
print(double(3))</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> <code>lambda</code> 定义短小匿名函数；复杂逻辑仍建议用 <code>def</code>。
                </p>
            </section>
            
            <!-- 2. map/filter ↔ 列表推导 -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">2. 变换与筛选：map / filter</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>const nums = [1,2,3,4];
const evensDoubled = nums.filter(x =&gt; x % 2 === 0).map(x =&gt; x * 2);
console.log(evensDoubled);</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>nums = [1,2,3,4]
evens_doubled = list(map(lambda x: x * 2, filter(lambda x: x % 2 == 0, nums)))
print(evens_doubled)</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> Python 更推荐用“推导式”表达筛选与变换；<code>map/filter</code> 亦可直接使用。
                </p>
            </section>
            
            <!-- 3. key 函数：排序/最值定制 -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">3. key 函数：sorted / max / min</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>const names = ["grace","Bob","alice"];
const res = names.sort((a,b) =&gt; a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(res);</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>names = ["grace","Bob","alice"]
print(sorted(names, key=str.lower))</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 用 <code>key</code> 指定比较依据；适用于 <code>sorted</code>、<code>max</code>、<code>min</code>。
                </p>
            </section>
          </div>
        `,
  concepts: [
    { id: 'core_lambda', label: 'lambda', type: 'syntax', desc: '短小匿名函数，适合 map/filter/key。', refJs: '=> 匿名函数' },
    { id: 'core_map_filter', label: 'map/filter', type: 'approach', desc: '组合筛选与变换；推导式更地道。', refJs: 'map/filter' },
    { id: 'core_key', label: 'key 函数', type: 'approach', desc: '定制排序或最值比较的依据。', refJs: 'compare 函数' }
  ],
  code: `nums = [1,2,3,4]
evens_doubled = list(map(lambda x: x * 2, filter(lambda x: x % 2 == 0, nums)))
print(evens_doubled)

names = ["grace","Bob","alice"]
print(sorted(names, key=str.lower))`,
  quiz: [
    {
      type: 'code',
      question: "筛选长度≤3的字符串并转大写后打印列表",
      initialCode: `words = ["a","abcd","bb","ccc"]`,
      expectedOutput: "Result: ['A', 'BB', 'CCC']",
      validationType: 'output',
      standardCode: `words = ["a","abcd","bb","ccc"]
res = [w.upper() for w in words if len(w) <= 3]
print(f"Result: {res}")`,
      explanation: "推导式同时表达筛选与变换；按题面文案输出。"
    },
    {
      type: 'choice',
      question: "以下哪个表达式能自定义排序依据？",
      options: ["sorted(names, key=len)", "sorted(names)", "max(names)", "min(names)"],
      correctAnswer: "sorted(names, key=len)"
    }
  ]
}
