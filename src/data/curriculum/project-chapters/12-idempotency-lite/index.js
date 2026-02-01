export default {
  id: 'project-12-idempotency-lite',
  title: "订单幂等最小集：idempotency-key 检测与创建",
  workspaceId: 'enterprise-lite',
  visibleFiles: [
    'requirements.txt',
    'app/main.py',
    'app/cli/entry.py',
    'app/config/loader.py',
    'app/config/validator.py',
    'app/logging/structured.py',
    'app/service/__init__.py',
    'app/service/idempotency.py'
  ],
  initialOpenFile: 'app/service/idempotency.py',
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">幂等：避免重复创建同一订单</h3>
          
          <div class="space-y-8">
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 px-2 py-0.5 rounded text-xs font-bold">Targets</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">章节目标与验收</h4>
                </div>
                <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                    <li>依据 idempotency-key 检测重复。</li>
                    <li>重复打印 Dup；新建打印 Created:N。</li>
                </ul>
            </section>
          </div>
        `,
  concepts: [
    { id: 'proj_idem_key', label: '幂等键', type: 'project', desc: '按 key 识别重复请求。' },
    { id: 'proj_idem_result', label: '结果语义', type: 'project', desc: 'Dup 或 Created:N。' }
  ],
  code: `print("Idempotent: OK")`,
  quiz: [
    {
      type: 'code',
      question: "重复幂等键打印 Dup",
      initialCode: `items = [("A", 1)]
stock = {"A": 10}
seen = set(["order-1"])`,
      expectedOutput: "Dup",
      validationType: 'output',
      standardCode: `items = [("A", 1)]
stock = {"A": 10}
seen = set(["order-1"])
def create_order_idem(items, stock, key, seen):
    if key in seen:
        print("Dup")
        return
    total = 0
    for sku, qty in items:
        if not isinstance(sku, str) or not isinstance(qty, int):
            print("Error: input")
            return
        if stock.get(sku, 0) < qty:
            print("Error: stock")
            return
        total += qty
    seen.add(key)
    print(f"Created: {total}")
create_order_idem(items, stock, "order-1", seen)`,
      explanation: "幂等键已存在时返回 Dup。"
    },
    {
      type: 'code',
      question: "新幂等键打印 Created:N",
      initialCode: `items = [("A", 1), ("B", 2)]
stock = {"A": 10, "B": 5}
seen = set()`,
      expectedOutput: "Created: 3",
      validationType: 'output',
      standardCode: `items = [("A", 1), ("B", 2)]
stock = {"A": 10, "B": 5}
seen = set()
def create_order_idem(items, stock, key, seen):
    if key in seen:
        print("Dup")
        return
    total = 0
    for sku, qty in items:
        if not isinstance(sku, str) or not isinstance(qty, int):
            print("Error: input")
            return
        if stock.get(sku, 0) < qty:
            print("Error: stock")
            return
        total += qty
    seen.add(key)
    print(f"Created: {total}")
create_order_idem(items, stock, "order-2", seen)`,
      explanation: "新的幂等键创建并返回 Created:N。"
    }
  ]
}
