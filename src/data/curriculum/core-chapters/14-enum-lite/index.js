export default {
  id: 'core-07-enum-lite',
  title: "枚举最小集：枚举与常量边界",
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">枚举：稳定常量集合的表达</h3>
          <div class="space-y-8">
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">Summary</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">使用场景</h4>
                </div>
                <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                    <li>状态码、角色、固定分类。</li>
                </ul>
            </section>
          </div>
        `,
  concepts: [
    { id: 'core_enum', label: 'Enum', type: 'syntax', desc: '定义稳定常量集合' }
  ],
  code: `from enum import Enum
class Status(Enum):
    OK = 200
    FAIL = 500
print(Status.OK.value)`,
  quiz: [
    {
      type: 'code',
      question: "打印枚举的名称与值",
      initialCode: `from enum import Enum
class Role(Enum):
    ADMIN = 1
    USER = 2
print(f"{Role.ADMIN.name}:{Role.ADMIN.value}")`,
      expectedOutput: "ADMIN:1",
      validationType: 'output',
      standardCode: `from enum import Enum
class Role(Enum):
    ADMIN = 1
    USER = 2
print(f"{Role.ADMIN.name}:{Role.ADMIN.value}")`
    },
    {
      type: 'choice',
      question: "下列更适合表达固定常量集合的是？",
      options: ["Enum", "list", "dict", "set"],
      correctAnswer: "Enum"
    }
  ]
}
