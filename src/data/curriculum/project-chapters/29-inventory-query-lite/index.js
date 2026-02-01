export default {
  id: 'project-29-inventory-query-lite',
  title: "库存查询最小集：读取数量与默认值",
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
    'app/service/inventory.py'
  ],
  initialOpenFile: 'app/service/inventory.py',
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">库存查询：安全读取与默认值</h3>
          <div class="space-y-8">
            <section>
              <div class="flex items-center gap-2 mb-3">
                <span class="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded text-xs font-bold">Targets</span>
                <h4 class="font-bold text-slate-700 dark:text-slate-200">章节目标与验收</h4>
              </div>
              <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                <li>get_qty(stock, sku)：返回库存数量。</li>
                <li>缺失默认返回 0。</li>
              </ul>
            </section>
          </div>
        `,
  concepts: [
    { id: 'proj_inv_get', label: '读取库存', type: 'project', desc: '安全读取与默认值。' }
  ],
  code: `print("Inventory: OK")`,
  quiz: [
    {
      type: 'code',
      question: "读取存在的库存数量",
      initialCode: `def get_qty(stock, sku):
    return int(stock.get(sku, 0))`,
      expectedOutput: "5",
      validationType: 'output',
      standardCode: `def get_qty(stock, sku):
    return int(stock.get(sku, 0))
print(get_qty({"A":5},"A"))`
    },
    {
      type: 'code',
      question: "读取不存在的库存返回 0",
      initialCode: `def get_qty(stock, sku):
    return int(stock.get(sku, 0))`,
      expectedOutput: "0",
      validationType: 'output',
      standardCode: `def get_qty(stock, sku):
    return int(stock.get(sku, 0))
print(get_qty({"A":5},"B"))`
    }
  ]
}
