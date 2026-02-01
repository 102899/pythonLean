export default {
  id: 'project-33-rate-limit-lite',
  title: "限流最小集：固定窗口计数",
  workspaceId: 'enterprise-lite',
  visibleFiles: [
    'requirements.txt',
    'app/main.py',
    'app/service/rate_limit.py'
  ],
  initialOpenFile: 'app/service/rate_limit.py',
  workspaceDelta: {
    'app/service/rate_limit.py': `def allow(count_map, key, max_per_window):
    n = count_map.get(key, 0)
    if n < max_per_window:
        count_map[key] = n + 1
        return True
    return False`
  },
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">限流心智：固定窗口的最小实现</h3>
          <div class="space-y-8">
            <section>
              <div class="flex items-center gap-2 mb-3">
                <span class="bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 px-2 py-0.5 rounded text-xs font-bold">Targets</span>
                <h4 class="font-bold text-slate-700 dark:text-slate-200">章节目标与验收</h4>
              </div>
              <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                <li>实现 allow(count_map, key, max)。</li>
                <li>在窗口内最多放行 max 次。</li>
              </ul>
            </section>
            <section>
              <div class="flex items-center gap-2 mb-3">
                <span class="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded text-xs font-bold">Steps</span>
                <h4 class="font-bold text-slate-700 dark:text-slate-200">步骤清单</h4>
              </div>
              <ol class="text-sm text-slate-600 dark:text-slate-300 list-decimal pl-6">
                <li>维护 count_map 的计数。</li>
                <li>小于上限则递增并允许。</li>
              </ol>
            </section>
          </div>
        `,
  concepts: [
    { id: 'proj_rate_limit', label: '固定窗口', type: 'project', desc: '计数型限流。' }
  ],
  code: `print("RateLimit: OK")`,
  quiz: [
    {
      type: 'code',
      question: "同一个键尝试三次，前两次放行",
      initialCode: `m = {}
def allow(count_map, key, max_per_window):
    n = count_map.get(key, 0)
    if n < max_per_window:
        count_map[key] = n + 1
        return True
    return False`,
      expectedOutput: "1\n1\n0",
      validationType: 'output',
      standardCode: `m = {}
def allow(count_map, key, max_per_window):
    n = count_map.get(key, 0)
    if n < max_per_window:
        count_map[key] = n + 1
        return True
    return False
print(1 if allow(m,"u",2) else 0)
print(1 if allow(m,"u",2) else 0)
print(0 if allow(m,"u",2) else 0)`
    }
  ]
}
