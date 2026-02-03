export default {
  id: 'core-04-dataclass-frozen-lite',
  title: "dataclass 不可变与比较语义最小集",
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">不可变与比较：dataclass 的 frozen/eq/order</h3>
          <div class="space-y-8">
            <section>
              <div class="flex items-center gap-2 mb-3">
                <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">Summary</span>
                <h4 class="font-bold text-slate-700 dark:text-slate-200">核心语义</h4>
              </div>
              <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                <li>frozen=True：实例不可变，字段赋值将被禁止。</li>
                <li>eq=True：按字段值生成相等性判断。</li>
                <li>order=True：按字段顺序生成 &lt; ≤ &gt; ≥ 比较方法。</li>
              </ul>
            </section>
            <section>
              <div class="flex items-center gap-2 mb-3">
                <span class="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded text-xs font-bold">Core</span>
                <h4 class="font-bold text-slate-700 dark:text-slate-200">不可变模型的常见场景</h4>
              </div>
              <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                <li>配置快照、事件载体、值对象。</li>
                <li>对比/排序：按字段定义的字典序。</li>
              </ul>
            </section>
          </div>
        `,
  concepts: [
    { id: 'core_dc_frozen', label: 'frozen', type: 'syntax', desc: '不可变实例' },
    { id: 'core_dc_eq', label: 'eq', type: 'syntax', desc: '按字段生成相等性' },
    { id: 'core_dc_order', label: 'order', type: 'syntax', desc: '按字段顺序生成比较方法' }
  ],
  code: `from dataclasses import dataclass
@dataclass(frozen=True, order=True)
class Point:
    x: int
    y: int
a = Point(1, 2)
b = Point(1, 3)
print(a == b)
print(a < b)`,
  quiz: [
    {
      type: 'code',
      question: "使用 replace 更新 frozen 实例并打印前后数量",
      initialCode: `from dataclasses import dataclass, replace
@dataclass(frozen=True)
class Item:
    sku: str
    qty: int
x = Item("A", 1)
y = replace(x, qty=3)
print(f"{x.qty}->{y.qty}")`,
      expectedOutput: "1->3",
      validationType: 'output',
      standardCode: `from dataclasses import dataclass, replace
@dataclass(frozen=True)
class Item:
    sku: str
    qty: int
x = Item("A", 1)
y = replace(x, qty=3)
print(f"{x.qty}->{y.qty}")`
    },
    {
      type: 'code',
      question: "比较两个 frozen 实例的相等性",
      initialCode: `from dataclasses import dataclass
@dataclass(frozen=True)
class User:
    id: int
    name: str
u1 = User(1, "alice")
u2 = User(1, "alice")
print("EQ" if u1 == u2 else "NE")`,
      expectedOutput: "EQ",
      validationType: 'output',
      standardCode: `from dataclasses import dataclass
@dataclass(frozen=True)
class User:
    id: int
    name: str
u1 = User(1, "alice")
u2 = User(1, "alice")
print("EQ" if u1 == u2 else "NE")`
    },
    {
      type: 'code',
      question: "按字段顺序比较两个点的大小",
      initialCode: `from dataclasses import dataclass
@dataclass(frozen=True, order=True)
class P:
    x: int
    y: int
print(P(1,2) < P(2,1))`,
      expectedOutput: "True",
      validationType: 'output',
      standardCode: `from dataclasses import dataclass
@dataclass(frozen=True, order=True)
class P:
    x: int
    y: int
print(P(1,2) < P(2,1))`
    },
    {
      type: 'choice',
      question: "frozen=True 的直接效果是？",
      options: ["不可变实例", "自动排序", "允许任意字段", "关闭类型检查"],
      correctAnswer: "不可变实例"
    }
  ]
}
