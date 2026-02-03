export default {
  id: 'core-04-dataclasses-namedtuple-lite',
  title: "数据模型对比：dataclasses 与 namedtuple 最小集",
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">数据建模：可变与不可变的取舍</h3>
          
          <div class="space-y-8">
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">Summary</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">最小对比</h4>
                </div>
                <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                    <li>dataclass：带类型标注的可变数据模型。</li>
                    <li>namedtuple：不可变、轻量、字段固定。</li>
                </ul>
            </section>
          </div>
        `,
  concepts: [
    { id: 'core_dc_model', label: 'dataclass', type: 'structure', desc: '可变模型，支持默认值与比较' },
    { id: 'core_nt_immutable', label: 'namedtuple', type: 'structure', desc: '不可变字段序列，属性访问' }
  ],
  code: `from dataclasses import dataclass
@dataclass
class Item:
    sku: str
    qty: int
x = Item("A", 2)
print(f"sku={x.sku} qty={x.qty}")`,
  quiz: [
    {
      type: 'code',
      question: "用 dataclass 更新数量后打印",
      initialCode: `from dataclasses import dataclass
@dataclass
class Item:
    sku: str
    qty: int
x = Item("B", 1)
x.qty = 3
print(f"{x.sku}:{x.qty}")`,
      expectedOutput: "B:3",
      validationType: 'output',
      standardCode: `from dataclasses import dataclass
@dataclass
class Item:
    sku: str
    qty: int
x = Item("B", 1)
x.qty = 3
print(f"{x.sku}:{x.qty}")`
    },
    {
      type: 'code',
      question: "用 namedtuple 创建并打印字段",
      initialCode: `from collections import namedtuple
Item = namedtuple("Item", ["sku","qty"])
y = Item("C", 2)
print(f"{y.sku}:{y.qty}")`,
      expectedOutput: "C:2",
      validationType: 'output',
      standardCode: `from collections import namedtuple
Item = namedtuple("Item", ["sku","qty"])
y = Item("C", 2)
print(f"{y.sku}:{y.qty}")`
    },
    {
      type: 'choice',
      question: "不可变的模型是？",
      options: ["namedtuple", "dataclass", "list", "dict"],
      correctAnswer: "namedtuple"
    }
  ]
}
