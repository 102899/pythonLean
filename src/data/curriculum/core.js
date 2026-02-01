export const core = {
    id: 'core',
    title: '核心篇',
    chapters: [
        {
            id: 'core-placeholder',
            title: "Coming Soon...",
            code: `# 核心篇内容正在规划中
# 将包含：
# - 数据结构 (List, Dict, Set)
# - 函数式编程 (Lambda, Map/Filter)
# - 面向对象 (Class, OOP)

print("敬请期待核心篇更新！")`
        },
        {
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
        ,
        {
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
                <div class="flex items-center gap-2 mb-3">
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
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
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
        ,
        {
            id: 'core-08-iter-protocol-lite',
            title: "迭代器协议最小集：iter、__iter__、__next__",
            learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">Python 迭代协议：从概念到自定义</h3>
          
          <div class="space-y-8">
            
            <!-- 1. 迭代器概念：JS Iterator ↔ Python Iterator -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">1. 概念对照：next()</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>const it = [1,2,3][Symbol.iterator]();
console.log(it.next()); // { value:1, done:false }</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>it = iter([1,2,3])
print(next(it))  # 1</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> <code>iter(obj)</code> 获取迭代器；<code>next(it)</code> 逐步取值；耗尽后触发结束信号。
                </p>
            </section>
            
            <!-- 2. 自定义迭代器：__iter__ 与 __next__ -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">Core</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">2. 自定义迭代器：计数器示例</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>// 伪示例：实现 next() 逐步返回</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>class Counter:
    def __init__(self, stop):
        self.cur = 0
        self.stop = stop
    def __iter__(self):
        return self
    def __next__(self):
        if self.cur &lt; self.stop:
            v = self.cur
            self.cur += 1
            return v
        raise StopIteration</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 返回自身的 <code>__iter__</code> 与按需产出的 <code>__next__</code> 构成迭代协议；结束时抛出结束信号。
                </p>
            </section>
            
            <!-- 3. 与内建配合：iter/next/list -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">Core</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">3. 消费与收集</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>// 伪示例：消耗一次后展开剩余</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>c = Counter(3)
it = iter(c)
print(next(it))      # 0
print(list(it))      # [1,2]</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> <code>next</code> 消费一个元素；<code>list</code> 收集剩余元素。
                </p>
            </section>
          </div>
        `,
            concepts: [
                { id: 'core_iter_protocol', label: '迭代协议', type: 'concept', desc: 'iter 获取迭代器；next 逐步取值。', refJs: 'Iterator.next()' },
                { id: 'core_custom_iter', label: '自定义迭代器', type: 'approach', desc: '__iter__ 返回自身；__next__ 产出或结束。', refJs: '自定义 Iterator' },
                { id: 'core_stop', label: '结束信号', type: 'concept', desc: '耗尽时抛出结束信号。', refJs: 'done: true' }
            ],
            code: `class Counter:
    def __init__(self, stop):
        self.cur = 0
        self.stop = stop
    def __iter__(self):
        return self
    def __next__(self):
        if self.cur < self.stop:
            v = self.cur
            self.cur += 1
            return v
        raise StopIteration

c = Counter(3)
it = iter(c)
print(next(it))
print(list(it))`,
            quiz: [
                {
                    type: 'code',
                    question: "消费一次 next 后打印剩余列表",
                    initialCode: `class Counter:
    def __init__(self, stop):
        self.cur = 0
        self.stop = stop
    def __iter__(self):
        return self
    def __next__(self):
        if self.cur < self.stop:
            v = self.cur
            self.cur += 1
            return v
        raise StopIteration
c = Counter(3)
it = iter(c)`,
                    expectedOutput: "First: 0\nRest: [1, 2]",
                    validationType: 'output',
                    standardCode: `class Counter:
    def __init__(self, stop):
        self.cur = 0
        self.stop = stop
    def __iter__(self):
        return self
    def __next__(self):
        if self.cur < self.stop:
            v = self.cur
            self.cur += 1
            return v
        raise StopIteration
c = Counter(3)
it = iter(c)
print(f"First: {next(it)}")
print(f"Rest: {list(it)}")`,
                    explanation: "迭代器被部分消费后，列表收集剩余元素。"
                },
                {
                    type: 'choice',
                    question: "自定义迭代器耗尽后应抛出的结束信号是？",
                    options: ["StopIteration", "ValueError", "KeyError", "TypeError"],
                    correctAnswer: "StopIteration"
                }
            ]
        }
        ,
        {
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
        ,
        {
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
        ,
        {
            id: 'core-05-oop-lite',
            title: "面向对象最小集：class、__init__、self、方法",
            learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">JS &rarr; Python：OOP 轻量版</h3>
          
          <div class="space-y-8">
            
            <!-- 1. 类与构造：constructor ↔ __init__ -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">1. 构造：__init__ 与属性</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>class Person {
  constructor(name) { this.name = name; }
  greet() { console.log("Hi, " + this.name); }
}
new Person("Bob").greet();</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>class Person:
    def __init__(self, name):
        self.name = name
    def greet(self):
        print("Hi, " + self.name)
Person("Bob").greet()</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> <code>self</code> 显式指向实例；<code>__init__</code> 用于初始化属性。
                </p>
            </section>
          </div>
        `,
            concepts: [
                { id: 'core_class', label: 'class', type: 'syntax', desc: '类定义与实例化。', refJs: 'class' },
                { id: 'core_init_self', label: '__init__/self', type: 'syntax', desc: '构造方法与实例引用。', refJs: 'constructor/this' },
                { id: 'core_method', label: '方法调用', type: 'approach', desc: '实例.方法() 调用。', refJs: 'obj.method()' }
            ],
            code: `class Person:
    def __init__(self, name):
        self.name = name
    def greet(self):
        print("Hi, " + self.name)
user = Person("Alice")
user.greet()`,
            quiz: [
                {
                    type: 'code',
                    question: "创建类并打印问候语",
                    initialCode: `class Person:
    def __init__(self, name):
        self.name = name
    def greet(self):
        print("Hi, " + self.name)
someone = Person("Bob")`,
                    expectedOutput: "Hi, Bob",
                    validationType: 'output',
                    standardCode: `class Person:
    def __init__(self, name):
        self.name = name
    def greet(self):
        print("Hi, " + self.name)
someone = Person("Bob")
someone.greet()`,
                    explanation: "实例化并调用方法输出问候语。"
                },
                {
                    type: 'choice',
                    question: "实例方法的第一个参数通常命名为？",
                    options: ["self", "this", "instance", "obj"],
                    correctAnswer: "self"
                }
            ]
        }
        ,
        {
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
        ,
        {
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
        },
        {
            id: 'core-08-iter-protocol-lite',
            title: "迭代器协议最小集：iter、__iter__、__next__",
            learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">JS &rarr; Python：迭代器协议轻量版</h3>
          
          <div class="space-y-8">
            
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">1. 迭代器初始化：iter() ↔ Symbol.iterator</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>const arr = [1,2,3];
const it = arr[Symbol.iterator]();
console.log(it.next().value)</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>arr = [1,2,3]
it = iter(arr)
print(next(it))</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> <code>iter</code> 获取迭代器；<code>next</code> 消费一次。迭代器是一次性消费。
                </p>
            </section>
            
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">Core</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">2. 自定义迭代器：__iter__ / __next__ / StopIteration</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>const counter = {
  current: 0,
  end: 2,
  [Symbol.iterator]() {
    return {
      next: () => {
        if (counter.current > counter.end) return { done: true };
        return { value: counter.current++, done: false };
      }
    }
  }
}
for (const x of counter) console.log(x)</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>class Counter:
    def __init__(self, end):
        self.current = 0
        self.end = end
    def __iter__(self):
        return self
    def __next__(self):
        if self.current > self.end:
            raise StopIteration
        val = self.current
        self.current += 1
        return val
for x in Counter(2):
    print(x)</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> Python 以 <code>StopIteration</code> 信号结束；JS 以 <code>done: true</code> 结束。
                </p>
            </section>
          </div>
        `,
            concepts: [
                { id: 'core_iter', label: 'iter', type: 'concept', desc: '从可迭代对象获取迭代器。', refJs: 'Symbol.iterator' },
                { id: 'core_custom_iter', label: '自定义迭代器', type: 'approach', desc: '__iter__ 返回 self；__next__ 返回值或 StopIteration。', refJs: '自定义 next' },
                { id: 'core_stop_iteration', label: 'StopIteration', type: 'syntax', desc: '结束迭代的标志异常。', refJs: 'done: true' }
            ],
            code: `nums = [0,1,2,3]
it = iter(nums)
print("First:", next(it))
print("Rest:", list(it))

class Counter:
    def __init__(self, end):
        self.current = 0
        self.end = end
    def __iter__(self):
        return self
    def __next__(self):
        if self.current > self.end:
            raise StopIteration
        val = self.current
        self.current += 1
        return val
print(list(Counter(3)))`,
            quiz: [
                {
                    type: 'code',
                    question: "消费一次迭代器后打印剩余元素",
                    initialCode: `nums = [0,1,2,3]`,
                    expectedOutput: "First: 0\nRest: [1, 2, 3]",
                    validationType: 'output',
                    standardCode: `nums = [0,1,2,3]
it = iter(nums)
print(f"First: {next(it)}")
print(f"Rest: {list(it)}")`,
                    explanation: "iter 初始化迭代器；next 消费一次；list 收集剩余。"
                },
                {
                    type: 'choice',
                    question: "自定义迭代器结束时应抛出？",
                    options: ["StopIteration", "ValueError", "TypeError", "None"],
                    correctAnswer: "StopIteration"
                }
            ]
        },
        {
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
        ,
        {
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
    ]
}
