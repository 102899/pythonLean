export default {
  id: 'project-45-observability-gauge-lite',
  title: "可观测性 Gauge：瞬时值设置与读取",
  workspaceId: 'enterprise-lite',
  visibleFiles: [
    'requirements.txt',
    'app/main.py',
    'app/metrics/gauge.py'
  ],
  initialOpenFile: 'app/metrics/gauge.py',
  workspaceDelta: {
    'app/metrics/gauge.py': `def set_gauge(store, key, value):
    store[key] = value
    return value
def get_gauge(store, key):
    return store.get(key, 0)`
  },
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">Gauge：瞬时值指标的最小实现</h3>
          <div class="space-y-8">
            <section>
              <div class="flex items-center gap-2 mb-3">
                <span class="bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 px-2 py-0.5 rounded text-xs font-bold">Targets</span>
                <h4 class="font-bold text-slate-700 dark:text-slate-200">章节目标与验收</h4>
              </div>
              <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                <li>set_gauge(store,key,value)。</li>
                <li>get_gauge(store,key)。</li>
              </ul>
            </section>
          </div>
        `,
  concepts: [
    { id: 'proj_metrics_gauge', label: '瞬时值', type: 'project', desc: '设置与读取。' }
  ],
  code: `print("Gauge: OK")`,
  quiz: [
    {
      type: 'code',
      question: "设置 gauge 为 42 并读出 42",
      initialCode: `def set_gauge(store, key, value):
    store[key] = value
    return value
def get_gauge(store, key):
    return store.get(key, 0)
g = {}
set_gauge(g,"temp",42)
print(get_gauge(g,"temp"))`,
      expectedOutput: "42",
      validationType: 'output',
      standardCode: `def set_gauge(store, key, value):
    store[key] = value
    return value
def get_gauge(store, key):
    return store.get(key, 0)
g = {}
set_gauge(g,"temp",42)
print(get_gauge(g,"temp"))`
    }
  ]
}
