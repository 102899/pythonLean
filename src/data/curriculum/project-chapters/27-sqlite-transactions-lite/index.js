export default {
  id: 'project-27-sqlite-transactions-lite',
  title: "SQLite 最小集：表、插入与模式版本",
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
  initialOpenFile: 'app/db/sqlite_demo.py',
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">SQLite：初始化与模式版本迁移</h3>
          <div class="space-y-8">
            <section>
              <div class="flex items-center gap-2 mb-3">
                <span class="bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 px-2 py-0.5 rounded text-xs font-bold">Targets</span>
                <h4 class="font-bold text-slate-700 dark:text-slate-200">章节目标与验收</h4>
              </div>
              <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                <li>init_items(conn)：创建表并插入 2 行。</li>
                <li>migrate_version(conn, ver)：更新 schema_version。</li>
              </ul>
            </section>
          </div>
        `,
  concepts: [
    { id: 'proj_sqlite_init', label: '初始化', type: 'project', desc: '建表与插入。' },
    { id: 'proj_sqlite_migrate', label: '迁移', type: 'project', desc: '模式版本更新。' }
  ],
  code: `print("SQLite: OK")`,
  quiz: [
    {
      type: 'code',
      question: "初始化并打印行数",
      initialCode: `import sqlite3`,
      expectedOutput: "2",
      validationType: 'output',
      standardCode: `import sqlite3
def init_items(conn):
    cur = conn.cursor()
    cur.execute("create table if not exists items(sku text, qty int)")
    cur.execute("insert into items values('A',1)")
    cur.execute("insert into items values('B',2)")
    cur.execute("select count(*) from items")
    return cur.fetchone()[0]
conn = sqlite3.connect(":memory:")
print(init_items(conn))`
    },
    {
      type: 'code',
      question: "迁移版本并打印当前版本",
      initialCode: `import sqlite3`,
      expectedOutput: "3",
      validationType: 'output',
      standardCode: `import sqlite3
def migrate_version(conn, new_ver):
    cur = conn.cursor()
    cur.execute("create table if not exists meta(k text, v int)")
    cur.execute("insert into meta values('schema_version',1)")
    cur.execute("update meta set v=? where k='schema_version'", (new_ver,))
    cur.execute("select v from meta where k='schema_version'")
    return cur.fetchone()[0]
conn = sqlite3.connect(":memory:")
print(migrate_version(conn, 3))`
    }
  ]
}
