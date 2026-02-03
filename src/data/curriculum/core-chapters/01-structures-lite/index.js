export default {
  id: 'core-01-structures-lite',
  title: "数据结构进阶最小集：Set、Tuple、可变与不可变",
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">JS &rarr; Python：数据结构进阶轻量版</h3>
          
          <div class="space-y-8">
            
            <!-- 1. Set 集合：去重与成员测试 -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">1. 集合：Set ↔ set()</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>const s = new Set([1,2,2]);
s.add(3);
s.has(2); // true</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>s = set([1,2,2])
s.add(3)
2 in s  # True</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 用 <code>set</code> 表示无重复元素集合；<code>in</code> 做成员测试；<code>add</code> 追加元素。
                </p>
            </section>
            
            <!-- 2. Tuple 元组：不可变序列 -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">2. 元组：Tuple ↔ ()</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>const point = [3, 4];
console.log(point[0]); // 3</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>point = (3, 4)
print(point[0])  # 3
x, y = point
print(x, y)      # 3 4</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 元组是不可变序列；支持索引与“解包”赋值。
                </p>
            </section>
            
            <!-- 3. 可变 vs 不可变：list/dict vs tuple -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">3. 可变与不可变</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>const arr = [1,2];
arr.push(3); // 可变</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>lst = [1,2]
lst.append(3)  # 可变
tpl = (1,2)
# tpl.append(3)  # 不可变</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 列表与字典是可变结构；元组不可变，适合固定结构与函数返回多值。
                </p>
            </section>
          </div>
        `,
  concepts: [
    { id: 'core_set', label: '集合', type: 'structure', desc: 'set 无重复；in 成员测试；add 追加。', refJs: 'Set' },
    { id: 'core_tuple', label: '元组', type: 'structure', desc: '不可变序列；索引与解包赋值。', refJs: 'Array（类比元组用途）' },
    { id: 'core_mutability', label: '可变性', type: 'approach', desc: 'list/dict 可变；tuple 不可变。', refJs: 'Array/Object 可变' }
  ],
  code: `# 集合
s = set([1,2,2])
s.add(3)
print(2 in s)

# 元组与解包
point = (3, 4)
x, y = point
print(x, y)

# 可变与不可变
lst = [1,2]
lst.append(3)
tpl = (1,2)
print(lst, tpl)`,
  quiz: [
    {
      type: 'code',
      question: "统计唯一元素个数并打印",
      initialCode: `nums = [1,1,2,3,2]
# 目标：
# 打印：Unique: 3
`,
      expectedOutput: "Unique: 3",
      validationType: 'output',
      standardCode: `nums = [1,1,2,3,2]
# 目标：
# 打印：Unique: 3
print(f"Unique: {len(set(nums))}")`,
      explanation: "用 set 去重后取长度；按题面文案输出。"
    },
    {
      type: 'code',
      question: "解包元组并打印坐标",
      initialCode: `point = (5, 8)
# 目标：
# 打印：X: 5 Y: 8
`,
      expectedOutput: "X: 5 Y: 8",
      validationType: 'output',
      standardCode: `point = (5, 8)
# 目标：
# 打印：X: 5 Y: 8
x, y = point
print(f"X: {x} Y: {y}")`,
      explanation: "元组支持解包赋值；按题面文案输出。"
    },
    {
      type: 'choice',
      question: "以下哪个是不可变序列？",
      options: ["list", "dict", "tuple", "set"],
      correctAnswer: "tuple"
    }
  ]
}
