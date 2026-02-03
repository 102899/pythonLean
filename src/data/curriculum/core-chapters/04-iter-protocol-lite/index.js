export default {
  id: 'core-04-iter-protocol-lite',
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
print(next(it))  # 0
print(list(it))  # [1,2]</code></pre>
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
