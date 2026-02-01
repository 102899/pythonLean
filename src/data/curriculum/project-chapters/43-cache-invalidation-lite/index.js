export default {
  id: 'project-43-cache-invalidation-lite',
  title: "缓存失效最小集：前缀批量失效",
  workspaceId: 'enterprise-lite',
  visibleFiles: [
    'requirements.txt',
    'app/main.py',
    'app/cache/invalidate.py'
  ],
  initialOpenFile: 'app/cache/invalidate.py',
  workspaceDelta: {
    'app/cache/invalidate.py': `def invalidate_prefix(store, prefix):
    keys = list(store.keys())
    n = 0
    for k in keys:
        if str(k).startswith(prefix):
            store.pop(k, None)
            n += 1
    return n`
  },
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">失效：按前缀批量清理缓存键</h3>
          <div class="space-y-8">
            <section>
              <div class="flex items-center gap-2 mb-3">
                <span class="bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 px-2 py-0.5 rounded text-xs font-bold">Targets</span>
                <h4 class="font-bold text-slate-700 dark:text-slate-200">章节目标与验收</h4>
              </div>
              <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                <li>invalidate_prefix(store, prefix)。</li>
                <li>返回清理数量。</li>
              </ul>
            </section>
          </div>
        `,
  concepts: [
    { id: 'proj_cache_invalidate', label: '前缀失效', type: 'project', desc: '批量清理。' }
  ],
  code: `print("Invalidate: OK")`,
  quiz: [
    {
      type: 'code',
      question: "清理以 a: 前缀的键并打印数量 2",
      initialCode: `def invalidate_prefix(store, prefix):
    keys = list(store.keys())
    n = 0
    for k in keys:
        if str(k).startswith(prefix):
            store.pop(k, None)
            n += 1
    return n
store = {"a:1":"x","a:2":"y","b:3":"z"}`,
      expectedOutput: "2",
      validationType: 'output',
      standardCode: `def invalidate_prefix(store, prefix):
    keys = list(store.keys())
    n = 0
    for k in keys:
        if str(k).startswith(prefix):
            store.pop(k, None)
            n += 1
    return n
store = {"a:1":"x","a:2":"y","b:3":"z"}
print(invalidate_prefix(store, "a:"))`
    }
  ]
}
