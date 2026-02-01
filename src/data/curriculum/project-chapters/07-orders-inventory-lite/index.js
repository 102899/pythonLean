export default {
  id: 'project-07-orders-inventory-lite',
  title: "订单与库存最小集：输入校验、库存校验、错误返回",
  workspaceId: 'enterprise-lite',
  visibleFiles: [
    'requirements.txt',
    'app/main.py',
    'app/cli/entry.py',
    'app/config/loader.py',
    'app/config/validator.py',
    'app/logging/structured.py',
    'app/service/__init__.py',
    'app/service/orders.py'
  ],
  initialOpenFile: 'app/service/orders.py',
  workspaceDelta: {
    'app/service/orders.py': `def create_order(items, stock):
    total = 0
    for sku, qty in items:
        if not isinstance(sku, str) or not isinstance(qty, int):
            print("Error: input")
            return
        if stock.get(sku, 0) < qty:
            print("Error: stock")
            return
        total += qty
    print(f"Created: {total}")`
  },
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">订单与库存：边界检查与业务结果</h3>
          
          <div class="space-y-8">
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 px-2 py-0.5 rounded text-xs font-bold">Targets</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">章节目标与验收</h4>
                </div>
                <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                    <li>输入校验：sku 为 str，qty 为 int。</li>
                    <li>库存校验：不足则失败。</li>
                    <li>结果返回：成功打印 Created:N；失败打印错误文案。</li>
                </ul>
            </section>
            
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded text-xs font-bold">Steps</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">步骤清单</h4>
                </div>
                <ol class="text-sm text-slate-600 dark:text-slate-300 list-decimal pl-6">
                    <li>编写 create_order(items, stock)。</li>
                    <li>先做输入校验，再做库存校验。</li>
                    <li>根据结果打印成功或错误文案。</li>
                </ol>
            </section>
            <section>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript 心智</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>// 校验 → 库存 → 结果
// return 'Created: N' 或错误</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python 实施</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>def create_order(items, stock):
    pass</code></pre>
                    </div>
                </div>
            </section>
          </div>
        `,
  concepts: [
    { id: 'proj_ord_input', label: '输入校验', type: 'project', desc: 'sku/qty 类型边界。', refJs: 'validator' },
    { id: 'proj_ord_stock', label: '库存校验', type: 'project', desc: '不足失败。', refJs: 'business rule' },
    { id: 'proj_ord_result', label: '结果返回', type: 'project', desc: 'Created:N 或错误。', refJs: 'return value' }
  ],
  code: `print("Order: OK")`,
  quiz: [
    {
      type: 'code',
      question: "实现 create_order 并在成功时打印",
      initialCode: `items = [("A", 1), ("B", 2)]
stock = {"A": 10, "B": 5}`,
      expectedOutput: "Created: 3",
      validationType: 'output',
      standardCode: `items = [("A", 1), ("B", 2)]
stock = {"A": 10, "B": 5}
def create_order(items, stock):
    total = 0
    for sku, qty in items:
        if not isinstance(sku, str) or not isinstance(qty, int):
            print("Error: input")
            return
        if stock.get(sku, 0) < qty:
            print("Error: stock")
            return
        total += qty
    print(f"Created: {total}")
create_order(items, stock)`,
      explanation: "按“输入 → 库存 → 结果”的顺序完成校验与输出。"
    },
    {
      type: 'code',
      question: "输入类型错误时打印错误文案",
      initialCode: `items = [("A", "1")]
stock = {"A": 10}`,
      expectedOutput: "Error: input",
      validationType: 'output',
      standardCode: `items = [("A", "1")]
stock = {"A": 10}
def create_order(items, stock):
    for sku, qty in items:
        if not isinstance(sku, str) or not isinstance(qty, int):
            print("Error: input")
            return
        if stock.get(sku, 0) < qty:
            print("Error: stock")
            return
    print("Created: 0")
create_order(items, stock)`,
      explanation: "类型边界优先；不满足即失败，不继续库存检查。"
    },
    {
      type: 'code',
      question: "库存不足时打印错误文案",
      initialCode: `items = [("A", 3)]
stock = {"A": 2}`,
      expectedOutput: "Error: stock",
      validationType: 'output',
      standardCode: `items = [("A", 3)]
stock = {"A": 2}
def create_order(items, stock):
    for sku, qty in items:
        if not isinstance(sku, str) or not isinstance(qty, int):
            print("Error: input")
            return
        if stock.get(sku, 0) < qty:
            print("Error: stock")
            return
    print("Created: 0")
create_order(items, stock)`,
      explanation: "库存边界不满足时返回对应错误文案。"
    }
  ]
}
