export default {
  id: 'project-21-db-persistence-migrations-lite',
  title: "持久化与迁移最小集：SQLite 表与模式版本",
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
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">持久化：最小可用存储与迁移心智</h3>
          
          <div class="space-y-8">
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 px-2 py-0.5 rounded text-xs font-bold">Targets</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">章节目标与验收</h4>
                </div>
                <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                    <li>用 SQLite 演示最小持久化接口：建表、写入、读取。</li>
                    <li>引入迁移心智：meta(schema_version) 记录模式版本。</li>
                </ul>
            </section>
            
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded text-xs font-bold">Steps</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">步骤清单</h4>
                </div>
                <ol class="text-sm text-slate-600 dark:text-slate-300 list-decimal pl-6">
                    <li>连接内存数据库 ':memory:'，创建 items 与 meta 表。</li>
                    <li>写入样例数据并读取计数。</li>
                    <li>更新 schema_version 并读取确认。</li>
                </ol>
            </section>
            
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 px-2 py-0.5 rounded text-xs font-bold">Pitfalls</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">常见误区</h4>
                </div>
                <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                    <li>未显式创建表与索引；应由迁移负责。</li>
                    <li>把迁移写在业务逻辑中；应集中到迁移模块。</li>
                </ul>
            </section>
          </div>
        `,
  concepts: [
    { id: 'proj_db_schema', label: '模式与迁移', type: 'project', desc: 'schema_version 记录模式版本。' },
    { id: 'proj_db_persist', label: '持久化接口', type: 'project', desc: '建表/写入/读取最小集。' }
  ],
  code: `print("DB: OK")`,
  quiz: [
    {
      type: 'code',
      question: "建表写入两行并打印 Rows: 2",
      initialCode: `import sqlite3`,
      expectedOutput: "Rows: 2",
      validationType: 'output',
      standardCode: `import sqlite3
conn = sqlite3.connect(":memory:")
cur = conn.cursor()
cur.execute("create table if not exists items(sku text, qty int)")
cur.execute("insert into items values ('A',1)")
cur.execute("insert into items values ('B',2)")
cur.execute("select count(*) from items")
print(f"Rows: {cur.fetchone()[0]}")`,
      explanation: "用 SQLite 演示最小持久化：创建表、写入两行并读取数量。"
    },
    {
      type: 'code',
      question: "更新模式版本为 2 并打印 Migrated: 2",
      initialCode: `import sqlite3`,
      expectedOutput: "Migrated: 2",
      validationType: 'output',
      standardCode: `import sqlite3
conn = sqlite3.connect(":memory:")
cur = conn.cursor()
cur.execute("create table if not exists meta(k text, v int)")
cur.execute("insert into meta values('schema_version',1)")
cur.execute("update meta set v=2 where k='schema_version'")
cur.execute("select v from meta where k='schema_version'")
print(f"Migrated: {cur.fetchone()[0]}")`,
      explanation: "通过 meta 表记录并更新 schema_version，建立迁移心智模型。"
    }
  ]
}
