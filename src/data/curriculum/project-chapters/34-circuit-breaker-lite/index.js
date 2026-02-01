export default {
  id: 'project-34-circuit-breaker-lite',
  title: "熔断器最小集：失败计数与状态切换",
  workspaceId: 'enterprise-lite',
  visibleFiles: [
    'requirements.txt',
    'app/main.py',
    'app/service/circuit_breaker.py'
  ],
  initialOpenFile: 'app/service/circuit_breaker.py',
  workspaceDelta: {
    'app/service/circuit_breaker.py': `def record_failure(state, threshold):
    c = state.get("fail", 0) + 1
    state["fail"] = c
    if c >= threshold:
        state["open"] = True
    return "open" if state.get("open") else "closed"
def reset(state):
    state.clear()
    return "closed"`
  },
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">熔断：按失败计数切换 open/closed</h3>
          <div class="space-y-8">
            <section>
              <div class="flex items-center gap-2 mb-3">
                <span class="bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 px-2 py-0.5 rounded text-xs font-bold">Targets</span>
                <h4 class="font-bold text-slate-700 dark:text-slate-200">章节目标与验收</h4>
              </div>
              <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                <li>实现 record_failure(state, threshold)。</li>
                <li>达到阈值后切换为 open。</li>
              </ul>
            </section>
            <section>
              <div class="flex items-center gap-2 mb-3">
                <span class="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded text-xs font-bold">Steps</span>
                <h4 class="font-bold text-slate-700 dark:text-slate-200">步骤清单</h4>
              </div>
              <ol class="text-sm text-slate-600 dark:text-slate-300 list-decimal pl-6">
                <li>递增失败计数并判断阈值。</li>
                <li>根据状态返回 open/closed。</li>
              </ol>
            </section>
          </div>
        `,
  concepts: [
    { id: 'proj_circuit_fail', label: '失败阈值', type: 'project', desc: '切换状态。' }
  ],
  code: `print("CircuitBreaker: OK")`,
  quiz: [
    {
      type: 'code',
      question: "连续三次失败后状态为 open",
      initialCode: `s = {}
def record_failure(state, threshold):
    c = state.get("fail", 0) + 1
    state["fail"] = c
    if c >= threshold:
        state["open"] = True
    return "open" if state.get("open") else "closed"`,
      expectedOutput: "closed\nclosed\nopen",
      validationType: 'output',
      standardCode: `s = {}
def record_failure(state, threshold):
    c = state.get("fail", 0) + 1
    state["fail"] = c
    if c >= threshold:
        state["open"] = True
    return "open" if state.get("open") else "closed"
print(record_failure(s,3))
print(record_failure(s,3))
print(record_failure(s,3))`
    }
  ]
}
