export default {
  id: 'project-35-cache-layer-lite',
  title: "缓存层最小集：KV 与过期",
  workspaceId: 'enterprise-lite',
  visibleFiles: [
    'requirements.txt',
    'app/main.py',
    'app/cache/kv.py'
  ],
  initialOpenFile: 'app/cache/kv.py',
  workspaceDelta: {
    'app/cache/kv.py': `def set_kv(store, key, value, ttl=None, now=0):
    exp = None if ttl is None else now + ttl
    store[key] = (value, exp)
    return True
def get_kv(store, key, now=0):
    v = store.get(key)
    if not v:
        return None
    val, exp = v
    if exp is not None and now >= exp:
        return None
    return val`
  },
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">KV 缓存：值与过期时间的最小实现</h3>
          <div class="space-y-8">
            <section>
              <div class="flex items-center gap-2 mb-3">
                <span class="bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 px-2 py-0.5 rounded text-xs font-bold">Targets</span>
                <h4 class="font-bold text-slate-700 dark:text-slate-200">章节目标与验收</h4>
              </div>
              <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                <li>set_kv/store：可选 ttl。</li>
                <li>get_kv：过期返回 None。</li>
              </ul>
            </section>
          </div>
        `,
  concepts: [
    { id: 'proj_cache_kv', label: 'KV 缓存', type: 'project', desc: '值与过期。' }
  ],
  code: `print("Cache: OK")`,
  quiz: [
    {
      type: 'code',
      question: "写入 ttl=10，在 now=5 存在、now=15 过期",
      initialCode: `def set_kv(store, key, value, ttl=None, now=0):
    exp = None if ttl is None else now + ttl
    store[key] = (value, exp)
    return True
def get_kv(store, key, now=0):
    v = store.get(key)
    if not v:
        return None
    val, exp = v
    if exp is not None and now >= exp:
        return None
    return val
store = {}
set_kv(store,"a","x",ttl=10,now=0)
print(get_kv(store,"a",now=5))
print(get_kv(store,"a",now=15))`,
      expectedOutput: "x\nNone",
      validationType: 'output',
      standardCode: `def set_kv(store, key, value, ttl=None, now=0):
    exp = None if ttl is None else now + ttl
    store[key] = (value, exp)
    return True
def get_kv(store, key, now=0):
    v = store.get(key)
    if not v:
        return None
    val, exp = v
    if exp is not None and now >= exp:
        return None
    return val
store = {}
set_kv(store,"a","x",ttl=10,now=0)
print(get_kv(store,"a",now=5))
print(get_kv(store,"a",now=15))`
    }
  ]
}
