export default {
  id: 'project-18-logging-sampling-lite',
  title: "日志采样最小集：按 N 比例输出",
  workspaceId: 'enterprise-lite',
  visibleFiles: [
    'requirements.txt',
    'app/main.py',
    'app/cli/entry.py',
    'app/config/loader.py',
    'app/config/validator.py',
    'app/logging/structured.py',
    'app/service/__init__.py',
    'app/service/idempotency.py',
    'app/logging/sampling.py'
  ],
  initialOpenFile: 'app/logging/sampling.py',
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">采样：降低噪声保留关键信息</h3>
          <div class="space-y-8">
            <section>
              <div class="flex items-center gap-2 mb-3">
                <span class="bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 px-2 py-0.5 rounded text-xs font-bold">Targets</span>
                <h4 class="font-bold text-slate-700 dark:text-slate-200">章节目标与验收</h4>
              </div>
              <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                <li>按采样率输出并统计数量。</li>
              </ul>
            </section>
          </div>
        `,
  concepts: [
    { id: 'proj_log_sample', label: '采样率', type: 'project', desc: '每 N 条输出一条。' }
  ],
  code: `print("Sample: OK")`,
  quiz: [
    {
      type: 'code',
      question: "采样率 2 输出数量打印 Count: 3",
      initialCode: `arr = [1,2,3,4,5]`,
      expectedOutput: "Count: 3",
      validationType: 'output',
      standardCode: `arr = [1,2,3,4,5]
def sample(n, arr):
    out = []
    for i, x in enumerate(arr):
        if i % n == 0:
            out.append(x)
    print(f"Count: {len(out)}")
sample(2, arr)`
    }
  ]
}
