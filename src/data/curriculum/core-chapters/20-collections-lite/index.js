export default {
  id: 'core-20-collections-lite',
  title: "集合模块最小集：defaultdict / Counter / deque",
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">collections：高效容器工具</h3>
          <div class="space-y-8">
            <section>
              <div class="flex items-center gap-2 mb-3">
                <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">Summary</span>
                <h4 class="font-bold text-slate-700 dark:text-slate-200">核心容器</h4>
              </div>
              <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                <li>defaultdict：缺省工厂，访问缺失键时自动初始化。</li>
                <li>Counter：计数器，统计元素频次。</li>
                <li>deque：双端队列，高效头尾操作与旋转。</li>
              </ul>
            </section>
          </div>
        `,
  concepts: [
    { id: 'core_defaultdict', label: 'defaultdict', type: 'syntax', desc: '缺省初始化' },
    { id: 'core_counter', label: 'Counter', type: 'syntax', desc: '频次统计' },
    { id: 'core_deque', label: 'deque', type: 'syntax', desc: '双端队列' }
  ],
  code: `from collections import defaultdict, Counter, deque
freq = Counter("ababa")
print(freq)
dd = defaultdict(int)
dd["x"] += 1
print(dd)
dq = deque([1,2,3]); dq.appendleft(0); dq.rotate(1)
print(list(dq))`,
  quiz: [
    {
      type: 'code',
      question: "用 Counter 统计并打印有序键列表",
      initialCode: `from collections import Counter
freq = Counter("mississippi")
print(sorted(freq.keys()))`,
      expectedOutput: "['i', 'm', 'p', 's']",
      validationType: 'output',
      standardCode: `from collections import Counter
freq = Counter("mississippi")
print(sorted(freq.keys()))`
    },
    {
      type: 'code',
      question: "用 defaultdict(int) 累加计数并打印结果",
      initialCode: `from collections import defaultdict
dd = defaultdict(int)
for ch in "abba":
    dd[ch] += 1
print(dict(dd))`,
      expectedOutput: "{'a': 2, 'b': 2}",
      validationType: 'output',
      standardCode: `from collections import defaultdict
dd = defaultdict(int)
for ch in "abba":
    dd[ch] += 1
print(dict(dd))`
    },
    {
      type: 'code',
      question: "使用 deque 头尾操作与旋转",
      initialCode: `from collections import deque
dq = deque([1,2,3])
dq.appendleft(0)
dq.append(4)
dq.rotate(-1)
print(list(dq))`,
      expectedOutput: "[2, 3, 4, 0, 1]",
      validationType: 'output',
      standardCode: `from collections import deque
dq = deque([1,2,3])
dq.appendleft(0)
dq.append(4)
dq.rotate(-1)
print(list(dq))`
    },
    {
      type: 'choice',
      question: "访问缺失键自动创建默认值应使用？",
      options: ["defaultdict", "Counter", "deque", "dict.get"],
      correctAnswer: "defaultdict"
    }
  ]
}
