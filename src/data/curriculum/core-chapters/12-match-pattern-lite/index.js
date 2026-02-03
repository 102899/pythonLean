export default {
  id: 'core-12-match-pattern-lite',
  title: "结构化模式匹配最小集：match / case / 守卫",
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">Python 3.10+：结构化匹配</h3>
          <div class="space-y-8">
            <section>
              <div class="flex items-center gap-2 mb-3">
                <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">Summary</span>
                <h4 class="font-bold text-slate-700 dark:text-slate-200">核心能力</h4>
              </div>
              <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                <li>match/case：匹配字面量、序列、映射与类。</li>
                <li>守卫（if）：在分支上添加条件收窄。</li>
                <li>解构绑定：将匹配到的值绑定到变量。</li>
              </ul>
            </section>
            <section>
              <div class="flex items-center gap-2 mb-3">
                <span class="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded text-xs font-bold">Practice</span>
                <h4 class="font-bold text-slate-700 dark:text-slate-200">常见场景</h4>
              </div>
              <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                <li>API 结果路由：{"type":"ok"|"err"}。</li>
                <li>事件解构：元组/列表中的位置参数。</li>
              </ul>
            </section>
          </div>
        `,
  concepts: [
    { id: 'core_match_case', label: 'match/case', type: 'syntax', desc: '结构化匹配' },
    { id: 'core_guard', label: '守卫 if', type: 'syntax', desc: '分支条件' }
  ],
  code: `def handle(res):
    match res:
        case {"type": "ok", "data": d}:
            print(f"OK:{d}")
        case {"type": "err", "msg": m}:
            print(f"ERR:{m}")
        case _:
            print("UNKNOWN")
handle({"type":"ok","data":42})`,
  quiz: [
    {
      type: 'code',
      question: "匹配字面量字符串并打印级别",
      initialCode: `def level(s):
    match s:
        case "info":
            print("I")
        case "warn":
            print("W")
        case "error":
            print("E")
level("warn")`,
      expectedOutput: "W",
      validationType: 'output',
      standardCode: `def level(s):
    match s:
        case "info":
            print("I")
        case "warn":
            print("W")
        case "error":
            print("E")
level("warn")`
    },
    {
      type: 'code',
      question: "解构元组并带守卫筛选偶数",
      initialCode: `def f(t):
    match t:
        case (x, y) if (x + y) % 2 == 0:
            print("even")
        case _:
            print("odd")
f((1,3))`,
      expectedOutput: "even",
      validationType: 'output',
      standardCode: `def f(t):
    match t:
        case (x, y) if (x + y) % 2 == 0:
            print("even")
        case _:
            print("odd")
f((1,3))`
    },
    {
      type: 'code',
      question: "匹配映射并绑定数据字段",
      initialCode: `def handle(res):
    match res:
        case {"type":"ok","data":d}:
            print(d)
        case {"type":"err","msg":m}:
            print(m)
handle({"type":"ok","data":"done"})`,
      expectedOutput: "done",
      validationType: 'output',
      standardCode: `def handle(res):
    match res:
        case {"type":"ok","data":d}:
            print(d)
        case {"type":"err","msg":m}:
            print(m)
handle({"type":"ok","data":"done"})`
    },
    {
      type: 'choice',
      question: "为分支添加判断条件使用？",
      options: ["守卫 if", "elif", "while", "for"],
      correctAnswer: "守卫 if"
    }
  ]
}
