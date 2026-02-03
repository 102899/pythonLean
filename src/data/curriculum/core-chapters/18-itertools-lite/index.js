export default {
  id: 'core-18-itertools-lite',
  title: "迭代工具最小集：chain / islice / accumulate / groupby",
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">itertools：高效迭代组合</h3>
          <div class="space-y-8">
            <section>
              <div class="flex items-center gap-2 mb-3">
                <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">Summary</span>
                <h4 class="font-bold text-slate-700 dark:text-slate-200">核心工具</h4>
              </div>
              <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                <li>chain：连接多个可迭代。</li>
                <li>islice：按切片迭代。</li>
                <li>accumulate：累积聚合（默认求和）。</li>
                <li>groupby：按键分组（需先排序）。</li>
              </ul>
            </section>
          </div>
        `,
  concepts: [
    { id: 'core_chain', label: 'chain', type: 'syntax', desc: '连接迭代' },
    { id: 'core_islice', label: 'islice', type: 'syntax', desc: '切片迭代' },
    { id: 'core_accumulate', label: 'accumulate', type: 'syntax', desc: '累积' },
    { id: 'core_groupby', label: 'groupby', type: 'syntax', desc: '分组' }
  ],
  code: `from itertools import chain, islice, accumulate
data = list(chain([1,2],[3]))
print(data)
print(list(islice(range(10), 2, 5)))
print(list(accumulate([1,2,3])))`,
  quiz: [
    {
      type: 'code',
      question: "连接两个列表并打印结果",
      initialCode: `from itertools import chain
print(list(chain([1,2],[3,4])))`,
      expectedOutput: "[1, 2, 3, 4]",
      validationType: 'output',
      standardCode: `from itertools import chain
print(list(chain([1,2],[3,4])))`
    },
    {
      type: 'code',
      question: "对 range(10) 进行切片 [3:7) 并打印",
      initialCode: `from itertools import islice
print(list(islice(range(10), 3, 7)))`,
      expectedOutput: "[3, 4, 5, 6]",
      validationType: 'output',
      standardCode: `from itertools import islice
print(list(islice(range(10), 3, 7)))`
    },
    {
      type: 'code',
      question: "对 [1,2,3,4] 做累积求和并打印",
      initialCode: `from itertools import accumulate
print(list(accumulate([1,2,3,4])))`,
      expectedOutput: "[1, 3, 6, 10]",
      validationType: 'output',
      standardCode: `from itertools import accumulate
print(list(accumulate([1,2,3,4])))`
    },
    {
      type: 'code',
      question: "按城市分组并打印组大小",
      initialCode: `from itertools import groupby
rows = [{"city":"A"},{"city":"A"},{"city":"B"}]
rows.sort(key=lambda r: r["city"])
sizes = [len(list(g)) for k, g in groupby(rows, key=lambda r: r["city"])]
print(sizes)`,
      expectedOutput: "[2, 1]",
      validationType: 'output',
      standardCode: `from itertools import groupby
rows = [{"city":"A"},{"city":"A"},{"city":"B"}]
rows.sort(key=lambda r: r["city"])
sizes = [len(list(g)) for k, g in groupby(rows, key=lambda r: r["city"])]
print(sizes)`
    },
    {
      type: 'choice',
      question: "使用 groupby 分组前应当？",
      options: ["按键排序", "随机打乱", "去重", "转为集合"],
      correctAnswer: "按键排序"
    }
  ]
}
