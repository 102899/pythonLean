export default {
  id: 'project-36-retry-backoff-apply-lite',
  title: "重试与回退应用：有限次尝试",
  workspaceId: 'enterprise-lite',
  visibleFiles: [
    'requirements.txt',
    'app/main.py',
    'app/service/retry.py',
    'app/service/backoff.py'
  ],
  initialOpenFile: 'app/service/backoff.py',
  workspaceDelta: {
    'app/service/backoff.py': `def backoff(delays, fn):
    attempts = 0
    for _ in delays:
        try:
            fn()
            return ("ok", attempts + 1)
        except Exception:
            attempts += 1
            continue
    return ("fail", attempts)`
  },
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">回退心智：失败后再次尝试的最小模式</h3>
          <div class="space-y-8">
            <section>
              <div class="flex items-center gap-2 mb-3">
                <span class="bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 px-2 py-0.5 rounded text-xs font-bold">Targets</span>
                <h4 class="font-bold text-slate-700 dark:text-slate-200">章节目标与验收</h4>
              </div>
              <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                <li>实现 backoff(delays, fn)。</li>
                <li>成功返回 ("ok", 次数)。</li>
              </ul>
            </section>
          </div>
        `,
  concepts: [
    { id: 'proj_retry_backoff', label: '回退重试', type: 'project', desc: '有限次尝试。' }
  ],
  code: `print("Backoff: OK")`,
  quiz: [
    {
      type: 'code',
      question: "前两次抛错、第三次成功，返回 ok,3",
      initialCode: `def backoff(delays, fn):
    attempts = 0
    for _ in delays:
        try:
            fn()
            return ("ok", attempts + 1)
        except Exception:
            attempts += 1
            continue
    return ("fail", attempts)
state = {"i":0}
def flaky():
    state["i"] += 1
    if state["i"] < 3:
        raise Exception("x")`,
      expectedOutput: "('ok', 3)",
      validationType: 'output',
      standardCode: `def backoff(delays, fn):
    attempts = 0
    for _ in delays:
        try:
            fn()
            return ("ok", attempts + 1)
        except Exception:
            attempts += 1
            continue
    return ("fail", attempts)
state = {"i":0}
def flaky():
    state["i"] += 1
    if state["i"] < 3:
        raise Exception("x")
print(backoff([1,2,3], flaky))`
    }
  ]
}
