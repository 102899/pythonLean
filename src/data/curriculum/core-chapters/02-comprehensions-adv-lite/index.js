export default {
  id: 'core-02-comprehensions-adv-lite',
  title: "推导式进阶最小集：字典、集合、条件、嵌套",
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">JS &rarr; Python：推导式进阶轻量版</h3>
          
          <div class="space-y-8">
            
            <!-- 1. 字典推导：Object.fromEntries ↔ {k:v for ...} -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">1. 字典推导：键值对生成字典</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>const pairs = [['a',1], ['b',2], ['a',3]];
const obj = Object.fromEntries(pairs);
console.log(Object.keys(obj).length);</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>pairs = [('a',1), ('b',2), ('a',3)]
obj = {k: v for k, v in pairs}
print(len(obj))</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> <code>{k: v for ...}</code> 直接从键值对生成字典；重复键将后者覆盖前者。
                </p>
            </section>
            
            <!-- 2. 集合推导：new Set ↔ {x for ...} -->
            <section>
                <div class="flex items中心 gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">2. 集合推导：去重并过滤</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>const nums = [1,2,2,3,4,4];
const evens = new Set(nums.filter(x =&gt; x % 2 === 0));
console.log(evens.size);</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>nums = [1,2,2,3,4,4]
evens = {x for x in nums if x % 2 == 0}
print(len(evens))</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> <code>{x for ... if ...}</code> 生成无重复集合并可直接过滤。
                </p>
            </section>
            
            <!-- 3. 条件子句：map/filter ↔ 推导式 if -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">3. 条件子句：在推导式中筛选</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>const words = ['a','bb','ccc'];
const short = words.filter(w =&gt; w.length &lt;= 2).map(w =&gt; w.toUpperCase());
console.log(short);</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>words = ['a','bb','ccc']
short = [w.upper() for w in words if len(w) &lt;= 2]
print(short)</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 条件写在推导式末尾；先“来源”后“筛选”，再“映射”生成新序列。
                </p>
            </section>
            
            <!-- 4. 嵌套推导：双层循环 ↔ 双 for -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">4. 嵌套推导：组合与展开</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow隐藏">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>const xs = [1,2], ys = ['a','b'];
const combo = xs.flatMap(x =&gt; ys.map(y =&gt; \`\${x}-\${y}\`));
console.log(combo);</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>xs = [1,2]; ys = ['a','b']
combo = [f"{x}-{y}" for x in xs for y in ys]
print(combo)</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 多层来源使用多个 <code>for</code> 顺序书写；从右至左理解来源与作用域更清晰。
                </p>
            </section>
          </div>
        `,
  concepts: [
    { id: 'core_dict_comp', label: '字典推导', type: 'structure', desc: '{k:v for ...} 生成字典；键覆盖。', refJs: 'Object.fromEntries' },
    { id: 'core_set_comp', label: '集合推导', type: 'structure', desc: '{x for ...} 去重集合；支持 if 过滤。', refJs: 'new Set + filter' },
    { id: 'core_comp_if', label: '条件子句', type: 'approach', desc: '推导式末尾 if 进行筛选。', refJs: 'filter → map' },
    { id: 'core_comp_nested', label: '嵌套推导', type: 'approach', desc: '多层 for 表达组合与展开。', refJs: 'flatMap(map)' }
  ],
  code: `pairs = [('a',1), ('b',2), ('a',3)]
obj = {k: v for k, v in pairs}
print(len(obj))

nums = [1,2,2,3,4,4]
evens = {x for x in nums if x % 2 == 0}
print(len(evens))

xs = [1,2]; ys = ['a','b']
combo = [f"{x}-{y}" for x in xs for y in ys]
print(combo)`,
  quiz: [
    {
      type: 'code',
      question: "用字典推导从键值对生成字典并打印条目数",
      initialCode: `pairs = [('a',1), ('b',2), ('a',3)]`,
      expectedOutput: "Size: 2",
      validationType: 'output',
      standardCode: `pairs = [('a',1), ('b',2), ('a',3)]
obj = {k: v for k, v in pairs}
print(f"Size: {len(obj)}")`,
      explanation: "重复键后值覆盖前值；统计最终键数量。"
    },
    {
      type: 'code',
      question: "用集合推导筛选偶数并打印唯一数量",
      initialCode: `nums = [1,1,2,2,3,4,4]`,
      expectedOutput: "Unique evens: 2",
      validationType: 'output',
      standardCode: `nums = [1,1,2,2,3,4,4]
evens = {x for x in nums if x % 2 == 0}
print(f"Unique evens: {len(evens)}")`,
      explanation: "集合推导去重并通过 if 条件筛选。"
    },
    {
      type: 'choice',
      question: "以下哪个是合法的字典推导式？",
      options: ["{i: i*i for i in range(3)}", "[i: i*i for i in range(3)]", "{i for i in range(3)}", "dict(i*i for i in range(3))"],
      correctAnswer: "{i: i*i for i in range(3)}"
    }
  ]
}
