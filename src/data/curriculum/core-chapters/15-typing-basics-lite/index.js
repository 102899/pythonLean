export default {
  id: 'core-08-typing-basics-lite',
  title: "类型提示最小集：List/Dict/Tuple/Callable",
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">类型提示：提高可读性与静态分析友好度</h3>
          <div class="space-y-8">
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">Summary</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">基础提示</h4>
                </div>
                <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                    <li>List[int]、Dict[str,int]、Tuple[str,int]。</li>
                    <li>Callable[[int], int]。</li>
                </ul>
            </section>
          </div>
        `,
  concepts: [
    { id: 'core_typing_list', label: 'List/Dict', type: 'syntax', desc: '容器类型提示' },
    { id: 'core_typing_callable', label: 'Callable', type: 'syntax', desc: '函数签名提示' }
  ],
  code: `from typing import List
def total(xs: List[int]) -> int:
    return sum(xs)
print(total([1,2,3]))`,
  quiz: [
    {
      type: 'code',
      question: "为函数加上类型提示并返回总和",
      initialCode: `from typing import List
def total(xs: List[int]) -> int:
    return sum(xs)
print(total([1,2,3]))`,
      expectedOutput: "6",
      validationType: 'output',
      standardCode: `from typing import List
def total(xs: List[int]) -> int:
    return sum(xs)
print(total([1,2,3]))`
    },
    {
      type: 'code',
      question: "使用 Callable 应用一元函数到值",
      initialCode: `from typing import Callable
def apply(f: Callable[[int], int], x: int) -> int:
    return f(x)
print(apply(lambda v: v*v, 4))`,
      expectedOutput: "16",
      validationType: 'output',
      standardCode: `from typing import Callable
def apply(f: Callable[[int], int], x: int) -> int:
    return f(x)
print(apply(lambda v: v*v, 4))`
    }
  ]
}
