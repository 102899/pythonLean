export default {
  id: 'project-19-health-readiness-lite',
  title: "健康与就绪最小集：依赖检查与状态",
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
    'app/util/health.py'
  ],
  initialOpenFile: 'app/util/health.py',
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">健康与就绪：服务存活与依赖可用</h3>
          <div class="space-y-8">
            <section>
              <div class="flex items-center gap-2 mb-3">
                <span class="bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 px-2 py-0.5 rounded text-xs font-bold">Targets</span>
                <h4 class="font-bold text-slate-700 dark:text-slate-200">章节目标与验收</h4>
              </div>
              <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                <li>health 仅表示存活；ready 表示依赖均可用。</li>
              </ul>
            </section>
          </div>
        `,
  concepts: [
    { id: 'proj_health', label: '健康', type: 'project', desc: '存活状态。' },
    { id: 'proj_ready', label: '就绪', type: 'project', desc: '依赖有效。' }
  ],
  code: `print("Health: OK")`,
  quiz: [
    {
      type: 'code',
      question: "依赖不全打印 health=up ready=down",
      initialCode: `db_ok = True
cache_ok = False`,
      expectedOutput: "health=up ready=down",
      validationType: 'output',
      standardCode: `db_ok = True
cache_ok = False
health = "up"
ready = "up" if db_ok and cache_ok else "down"
print(f"health={health} ready={ready}")`
    },
    {
      type: 'code',
      question: "依赖全部可用打印 health=up ready=up",
      initialCode: `db_ok = True
cache_ok = True`,
      expectedOutput: "health=up ready=up",
      validationType: 'output',
      standardCode: `db_ok = True
cache_ok = True
health = "up"
ready = "up" if db_ok and cache_ok else "down"
print(f"health={health} ready={ready}")`
    }
  ]
}
