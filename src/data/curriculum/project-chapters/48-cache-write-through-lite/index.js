export default {
  id: 'project-48-cache-write-through-lite',
  title: "缓存写穿最小集：写库并写缓存",
  workspaceId: 'enterprise-lite',
  visibleFiles: [
    'requirements.txt',
    'app/main.py',
    'app/cache/write_through.py'
  ],
  initialOpenFile: 'app/cache/write_through.py',
  workspaceDelta: {
    'app/cache/write_through.py': `def write_through(cache, db, key, value):
    db[key] = value
    cache[key] = value
    return True`
  },
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">写穿：写数据库同时更新缓存</h3>
          <div class="space-y-8">
            <section>
              <div class="flex items-center gap-2 mb-3">
                <span class="bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 px-2 py-0.5 rounded text-xs font-bold">Targets</span>
                <h4 class="font-bold text-slate-700 dark:text-slate-200">章节目标与验收</h4>
              </div>
              <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                <li>write_through(cache,db,key,value)。</li>
                <li>返回 True 并保持两者一致。</li>
              </ul>
            </section>
          </div>
        `,
  concepts: [
    { id: 'proj_cache_write', label: '写穿', type: 'project', desc: '双写保持一致。' }
  ],
  code: `print("WriteThrough: OK")`,
  quiz: [
    {
      type: 'code',
      question: "写入后验证 db 与 cache 一致",
      initialCode: `def write_through(cache, db, key, value):
    db[key] = value
    cache[key] = value
    return True
db = {}
cache = {}`,
      expectedOutput: "x\nx",
      validationType: 'output',
      standardCode: `def write_through(cache, db, key, value):
    db[key] = value
    cache[key] = value
    return True
db = {}
cache = {}
write_through(cache, db, "a", "x")
print(db["a"])
print(cache["a"])`
    }
  ]
}
