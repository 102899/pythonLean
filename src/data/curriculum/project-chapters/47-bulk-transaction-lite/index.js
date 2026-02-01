export default {
  id: 'project-47-bulk-transaction-lite',
  title: "批量事务最小集：全部成功或回滚",
  workspaceId: 'enterprise-lite',
  visibleFiles: [
    'requirements.txt',
    'app/main.py',
    'app/service/bulk_tx.py'
  ],
  initialOpenFile: 'app/service/bulk_tx.py',
  workspaceDelta: {
    'app/service/bulk_tx.py': `def bulk_tx(items, fn):
    for i, x in enumerate(items, start=1):
        try:
            fn(x)
        except Exception:
            return ("rolled_back", i)
    return ("committed", len(items))`
  },
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">事务：遇错即回滚的最小语义</h3>
          <div class="space-y-8">
            <section>
              <div class="flex items-center gap-2 mb-3">
                <span class="bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 px-2 py-0.5 rounded text-xs font-bold">Targets</span>
                <h4 class="font-bold text-slate-700 dark:text-slate-200">章节目标与验收</h4>
              </div>
              <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                <li>bulk_tx(items, fn) 成功返回 committed。</li>
                <li>失败返回 rolled_back 与失败位置。</li>
              </ul>
            </section>
          </div>
        `,
  concepts: [
    { id: 'proj_bulk_tx', label: '全部成功/回滚', type: 'project', desc: '遇错即回滚。' }
  ],
  code: `print("BulkTx: OK")`,
  quiz: [
    {
      type: 'code',
      question: "第二个元素失败，返回 rolled_back,2",
      initialCode: `def bulk_tx(items, fn):
    for i, x in enumerate(items, start=1):
        try:
            fn(x)
        except Exception:
            return ("rolled_back", i)
    return ("committed", len(items))`,
      expectedOutput: "('rolled_back', 2)",
      validationType: 'output',
      standardCode: `def bulk_tx(items, fn):
    for i, x in enumerate(items, start=1):
        try:
            fn(x)
        except Exception:
            return ("rolled_back", i)
    return ("committed", len(items))
def worker(x):
    if x == "bad":
        raise Exception("x")
print(bulk_tx(["ok","bad","ok"], worker))`
    }
  ]
}
