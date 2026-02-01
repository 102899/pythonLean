export default {
  id: 'project-17-retry-backoff-lite',
  title: "重试与回退最小集：限次与结果语义",
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
    'app/service/retry.py'
  ],
  initialOpenFile: 'app/service/retry.py',
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">重试：失败限次与成功确认</h3>
          <div class="space-y-8">
            <section>
              <div class="flex items-center gap-2 mb-3">
                <span class="bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 px-2 py-0.5 rounded text-xs font-bold">Targets</span>
                <h4 class="font-bold text-slate-700 dark:text-slate-200">章节目标与验收</h4>
              </div>
              <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                <li>实现 retry(fn, max_attempts)。</li>
                <li>输出成功或失败文案含计数。</li>
              </ul>
            </section>
          </div>
        `,
  concepts: [
    { id: 'proj_retry_attempts', label: '限次', type: 'project', desc: '尝试次数。' },
    { id: 'proj_retry_result', label: '结果', type: 'project', desc: '成功/失败含计数。' }
  ],
  code: `print("Retry: OK")`,
  quiz: [
    {
      type: 'code',
      question: "成功第三次打印 OK:3",
      initialCode: `pass`,
      expectedOutput: "OK:3",
      validationType: 'output',
      standardCode: `def retry(fn, max_attempts):
    count = 0
    while count < max_attempts:
        try:
            r = fn()
            print(f"OK:{count+1}")
            return
        except Exception:
            count += 1
    print(f"Fail:{count}")
fails = [2]
def sometimes():
    if fails[0] > 0:
        fails[0] -= 1
        raise RuntimeError("x")
    return "ok"
retry(sometimes, 3)`
    },
    {
      type: 'code',
      question: "全部失败打印 Fail:3",
      initialCode: `pass`,
      expectedOutput: "Fail:3",
      validationType: 'output',
      standardCode: `def retry(fn, max_attempts):
    count = 0
    while count < max_attempts:
        try:
            fn()
            print(f"OK:{count+1}")
            return
        except Exception:
            count += 1
    print(f"Fail:{count}")
def always_fail():
    raise RuntimeError("x")
retry(always_fail, 3)`
    }
  ]
}
