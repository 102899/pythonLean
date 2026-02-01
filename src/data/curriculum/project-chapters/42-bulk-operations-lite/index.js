export default {
  id: 'project-42-bulk-operations-lite',
  title: "批量操作最小集：成功与失败计数",
  workspaceId: 'enterprise-lite',
  visibleFiles: [
    'requirements.txt',
    'app/main.py',
    'app/service/bulk_ops.py'
  ],
  initialOpenFile: 'app/service/bulk_ops.py',
  workspaceDelta: {
    'app/service/bulk_ops.py': `def process_bulk(items, fn):
    ok = 0
    fail = 0
    for x in items:
        try:
            fn(x)
            ok += 1
        except Exception:
            fail += 1
    return (ok, fail)`
  },
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">批量：统计成功与失败的最小语义</h3>
          <div class="space-y-8">
            <section>
              <div class="flex items-center gap-2 mb-3">
                <span class="bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 px-2 py-0.5 rounded text-xs font-bold">Targets</span>
                <h4 class="font-bold text-slate-700 dark:text-slate-200">章节目标与验收</h4>
              </div>
              <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                <li>实现 process_bulk(items, fn)。</li>
                <li>返回 (ok, fail) 计数。</li>
              </ul>
            </section>
          </div>
        `,
  concepts: [
    { id: 'proj_bulk_ops', label: '批量统计', type: 'project', desc: '成功与失败计数。' }
  ],
  code: `print("BulkOps: OK")`,
  quiz: [
    {
      type: 'code',
      question: "一个元素抛错、一个成功，打印 (1, 1)",
      initialCode: `def process_bulk(items, fn):
    ok = 0
    fail = 0
    for x in items:
        try:
            fn(x)
            ok += 1
        except Exception:
            fail += 1
    return (ok, fail)
def worker(x):
    if x == "bad":
        raise Exception("x")`,
      expectedOutput: "(1, 1)",
      validationType: 'output',
      standardCode: `def process_bulk(items, fn):
    ok = 0
    fail = 0
    for x in items:
        try:
            fn(x)
            ok += 1
        except Exception:
            fail += 1
    return (ok, fail)
def worker(x):
    if x == "bad":
        raise Exception("x")
print(process_bulk(["ok","bad"], worker))`
    }
  ]
}
