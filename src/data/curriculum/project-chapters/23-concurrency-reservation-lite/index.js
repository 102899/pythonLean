export default {
  id: 'project-23-concurrency-reservation-lite',
  title: "并发与库存预留最小集：锁保护与预留语义",
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
    'app/service/concurrency.py'
  ],
  initialOpenFile: 'app/service/concurrency.py',
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">并发控制：以锁保护库存并实现预留语义</h3>
          
          <div class="space-y-8">
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 px-2 py-0.5 rounded text-xs font-bold">Targets</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">章节目标与验收</h4>
                </div>
                <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                    <li>通过锁保护库存更新。</li>
                    <li>实现预留成功/失败的输出语义。</li>
                </ul>
            </section>
            
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded text-xs font-bold">Steps</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">步骤清单</h4>
                </div>
                <ol class="text-sm text-slate-600 dark:text-slate-300 list-decimal pl-6">
                    <li>定义 reserve(sku, qty)：加锁 → 校验 → 更新。</li>
                    <li>输出 Reserved:N 或 Error: stock。</li>
                </ol>
            </section>
          </div>
        `,
  concepts: [
    { id: 'proj_conc_lock', label: '锁', type: 'project', desc: '互斥保护共享状态。' },
    { id: 'proj_conc_reserve', label: '预留语义', type: 'project', desc: '成功/失败输出。' }
  ],
  code: `print("Concurrency: OK")`,
  quiz: [
    {
      type: 'code',
      question: "成功预留打印 Reserved: 1",
      initialCode: `from threading import Lock
stock = {"A": 1}
lock = Lock()`,
      expectedOutput: "Reserved: 1",
      validationType: 'output',
      standardCode: `from threading import Lock
stock = {"A": 1}
lock = Lock()
def reserve(sku, qty):
    with lock:
        if stock.get(sku, 0) >= qty:
            stock[sku] -= qty
            print(f"Reserved: {qty}")
        else:
            print("Error: stock")
reserve("A", 1)`,
      explanation: "以锁保护共享库存，满足时预留成功并输出数量。"
    },
    {
      type: 'code',
      question: "库存不足打印 Error: stock",
      initialCode: `from threading import Lock
stock = {"A": 1}
lock = Lock()`,
      expectedOutput: "Error: stock",
      validationType: 'output',
      standardCode: `from threading import Lock
stock = {"A": 1}
lock = Lock()
def reserve(sku, qty):
    with lock:
        if stock.get(sku, 0) >= qty:
            stock[sku] -= qty
            print(f"Reserved: {qty}")
        else:
            print("Error: stock")
reserve("A", 2)`,
      explanation: "库存不足时输出错误文案，保持状态不变。"
    }
  ]
}
