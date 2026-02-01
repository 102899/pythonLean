export default {
  id: 'project-40-observability-metrics-lite',
  title: "可观测性指标最小集：计数与读取",
  workspaceId: 'enterprise-lite',
  visibleFiles: [
    'requirements.txt',
    'app/main.py',
    'app/metrics/counter.py'
  ],
  initialOpenFile: 'app/metrics/counter.py',
  workspaceDelta: {
    'app/metrics/counter.py': `def inc(counter, key):
    counter[key] = counter.get(key, 0) + 1
    return counter[key]
def get(counter, key):
    return counter.get(key, 0)`
  },
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">指标：最小计数器的设计与读取</h3>
          <div class="space-y-8">
            <section>
              <div class="flex items-center gap-2 mb-3">
                <span class="bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 px-2 py-0.5 rounded text-xs font-bold">Targets</span>
                <h4 class="font-bold text-slate-700 dark:text-slate-200">章节目标与验收</h4>
              </div>
              <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                <li>实现 inc(counter, key)。</li>
                <li>实现 get(counter, key)。</li>
              </ul>
            </section>
          </div>
        `,
  concepts: [
    { id: 'proj_metrics_counter', label: '计数器', type: 'project', desc: '增量与读取。' }
  ],
  code: `print("Metrics: OK")`,
  quiz: [
    {
      type: 'code',
      question: "对同一键计数两次并打印 2",
      initialCode: `def inc(counter, key):
    counter[key] = counter.get(key, 0) + 1
    return counter[key]
def get(counter, key):
    return counter.get(key, 0)
c = {}
inc(c,"req")
print(inc(c,"req"))`,
      expectedOutput: "2",
      validationType: 'output',
      standardCode: `def inc(counter, key):
    counter[key] = counter.get(key, 0) + 1
    return counter[key]
def get(counter, key):
    return counter.get(key, 0)
c = {}
inc(c,"req")
print(inc(c,"req"))`
    }
  ]
}
