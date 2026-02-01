export default {
  id: 'project-22-transactions-consistency-lite',
  title: "事务与一致性最小集：commit/rollback 与约束",
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
    'app/db/sqlite_demo.py'
  ],
  initialOpenFile: 'app/service/__init__.py',
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">事务：成功提交与错误回滚的最小闭环</h3>
          
          <div class="space-y-8">
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 px-2 py-0.5 rounded text-xs font-bold">Targets</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">章节目标与验收</h4>
                </div>
                <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                    <li>演示事务成功提交：Committed:N。</li>
                    <li>演示错误回滚：RolledBack:N。</li>
                </ul>
            </section>
            
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded text-xs font-bold">Steps</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">步骤清单</h4>
                </div>
                <ol class="text-sm text-slate-600 dark:text-slate-300 list-decimal pl-6">
                    <li>创建带约束的表：qty>0、sku 唯一。</li>
                    <li>成功事务：插入两行 → commit → 计数。</li>
                    <li>失败事务：插入非法值 → 异常 → rollback → 计数。</li>
                </ol>
            </section>
          </div>
        `,
  concepts: [
    { id: 'proj_tx_commit', label: '提交', type: 'project', desc: '成功提交事务。' },
    { id: 'proj_tx_rollback', label: '回滚', type: 'project', desc: '失败回滚保持一致性。' }
  ],
  code: `print("TX: OK")`,
  quiz: [
    {
      type: 'code',
      question: "成功提交并打印 Committed: 2",
      initialCode: `import sqlite3`,
      expectedOutput: "Committed: 2",
      validationType: 'output',
      standardCode: `import sqlite3
conn = sqlite3.connect(":memory:")
cur = conn.cursor()
cur.execute("create table items(sku text unique, qty int check (qty>0))")
cur.execute("begin")
cur.execute("insert into items values('A',1)")
cur.execute("insert into items values('B',2)")
conn.commit()
cur.execute("select count(*) from items")
print(f"Committed: {cur.fetchone()[0]}")`,
      explanation: "成功事务提交后数据持久化，计数为 2。"
    },
    {
      type: 'code',
      question: "错误触发回滚并打印 RolledBack: 1",
      initialCode: `import sqlite3`,
      expectedOutput: "RolledBack: 1",
      validationType: 'output',
      standardCode: `import sqlite3
conn = sqlite3.connect(":memory:")
cur = conn.cursor()
cur.execute("create table items(sku text unique, qty int check (qty>0))")
cur.execute("insert into items values('A',1)")
try:
    cur.execute("begin")
    cur.execute("insert into items values('B',2)")
    cur.execute("insert into items values('C',-1)")
    conn.commit()
except Exception:
    conn.rollback()
cur.execute("select count(*) from items")
print(f"RolledBack: {cur.fetchone()[0]}")`,
      explanation: "违反约束导致异常并回滚，最终计数保持为 1。"
    }
  ]
}
