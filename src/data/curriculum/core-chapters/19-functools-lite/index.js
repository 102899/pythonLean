export default {
  id: 'core-19-functools-lite',
  title: "函数工具最小集：partial / reduce / cmp_to_key / lru_cache",
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">functools：函数式辅助工具</h3>
          <div class="space-y-8">
            <section>
              <div class="flex items-center gap-2 mb-3">
                <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">Summary</span>
                <h4 class="font-bold text-slate-700 dark:text-slate-200">核心能力</h4>
              </div>
              <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                <li>partial：预绑定部分参数得到新函数。</li>
                <li>reduce：序列折叠（累积计算）。</li>
                <li>cmp_to_key：将比较函数转为 key 用于排序。</li>
                <li>lru_cache：结果缓存以提升重复计算效率。</li>
              </ul>
            </section>
          </div>
        `,
  concepts: [
    { id: 'core_partial', label: 'partial', type: 'syntax', desc: '预绑定参数' },
    { id: 'core_reduce', label: 'reduce', type: 'syntax', desc: '折叠聚合' },
    { id: 'core_cmp_to_key', label: 'cmp_to_key', type: 'syntax', desc: '比较转 key' },
    { id: 'core_lru_cache', label: 'lru_cache', type: 'syntax', desc: '缓存结果' }
  ],
  code: `from functools import partial, reduce
def add(a, b): return a + b
add1 = partial(add, 1)
print(add1(2))
print(reduce(lambda acc, x: acc + x, [1,2,3], 0))`,
  quiz: [
    {
      type: 'code',
      question: "使用 partial 绑定参数得到平方加偏移函数",
      initialCode: `from functools import partial
def add(a, b): return a + b
add10 = partial(add, 10)
print(add10(5))`,
      expectedOutput: "15",
      validationType: 'output',
      standardCode: `from functools import partial
def add(a, b): return a + b
add10 = partial(add, 10)
print(add10(5))`
    },
    {
      type: 'code',
      question: "使用 reduce 计算乘积",
      initialCode: `from functools import reduce
print(reduce(lambda acc, x: acc * x, [2,3,4], 1))`,
      expectedOutput: "24",
      validationType: 'output',
      standardCode: `from functools import reduce
print(reduce(lambda acc, x: acc * x, [2,3,4], 1))`
    },
    {
      type: 'code',
      question: "使用 cmp_to_key 按自定义比较排序",
      initialCode: `from functools import cmp_to_key
def cmp(a, b):
    # 倒序按长度比较，相等按字典序
    if len(a) != len(b): return len(b) - len(a)
    return -1 if a < b else (1 if a > b else 0)
print(sorted(["bbb","a","cc"], key=cmp_to_key(cmp)))`,
      expectedOutput: "['bbb', 'cc', 'a']",
      validationType: 'output',
      standardCode: `from functools import cmp_to_key
def cmp(a, b):
    if len(a) != len(b): return len(b) - len(a)
    return -1 if a < b else (1 if a > b else 0)
print(sorted(["bbb","a","cc"], key=cmp_to_key(cmp)))`
    },
    {
      type: 'code',
      question: "给函数加 lru_cache 并验证重复调用只计算一次",
      initialCode: `from functools import lru_cache
calls = []
@lru_cache(maxsize=128)
def heavy(x):
    calls.append(x)
    return x * x
print(heavy(3))
print(heavy(3))
print(len(calls))`,
      expectedOutput: "9\n9\n1",
      validationType: 'output',
      standardCode: `from functools import lru_cache
calls = []
@lru_cache(maxsize=128)
def heavy(x):
    calls.append(x)
    return x * x
print(heavy(3))
print(heavy(3))
print(len(calls))`
    },
    {
      type: 'choice',
      question: "将比较函数用于 sorted 应使用？",
      options: ["cmp_to_key", "key=len", "reduce", "partial"],
      correctAnswer: "cmp_to_key"
    }
  ]
}
