export default {
  id: 'project-38-order-workflow-lite',
  title: "订单编排最小集：库存校验→创建→输出",
  workspaceId: 'enterprise-lite',
  visibleFiles: [
    'requirements.txt',
    'app/main.py',
    'app/workflow/order_flow.py'
  ],
  initialOpenFile: 'app/workflow/order_flow.py',
  workspaceDelta: {
    'app/workflow/order_flow.py': `def order_flow(items, stock):
    total = 0
    for sku, qty in items:
        if not isinstance(sku, str) or not isinstance(qty, int):
            return (False, "Error: input")
        if stock.get(sku, 0) < qty:
            return (False, "Error: stock")
        total += qty
    return (True, f"Created: {total}")`
  },
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">编排：按校验→创建→输出的直线流程</h3>
          <div class="space-y-8">
            <section>
              <div class="flex items-center gap-2 mb-3">
                <span class="bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 px-2 py-0.5 rounded text-xs font-bold">Targets</span>
                <h4 class="font-bold text-slate-700 dark:text-slate-200">章节目标与验收</h4>
              </div>
              <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                <li>输入与库存边界校验。</li>
                <li>创建成功输出结果语义。</li>
              </ul>
            </section>
          </div>
        `,
  concepts: [
    { id: 'proj_order_flow', label: '直线编排', type: 'project', desc: '校验→创建→输出。' }
  ],
  code: `print("OrderFlow: OK")`,
  quiz: [
    {
      type: 'code',
      question: "库存不足时返回错误，充足时返回 Created",
      initialCode: `def order_flow(items, stock):
    total = 0
    for sku, qty in items:
        if not isinstance(sku, str) or not isinstance(qty, int):
            return (False, "Error: input")
        if stock.get(sku, 0) < qty:
            return (False, "Error: stock")
        total += qty
    return (True, f"Created: {total}")
stock = {"A": 1, "B": 0}
print(order_flow([("A",1),("B",1)], stock))
print(order_flow([("A",1)], stock))`,
      expectedOutput: "(False, 'Error: stock')\n(True, 'Created: 1')",
      validationType: 'output',
      standardCode: `def order_flow(items, stock):
    total = 0
    for sku, qty in items:
        if not isinstance(sku, str) or not isinstance(qty, int):
            return (False, "Error: input")
        if stock.get(sku, 0) < qty:
            return (False, "Error: stock")
        total += qty
    return (True, f"Created: {total}")
stock = {"A": 1, "B": 0}
print(order_flow([("A",1),("B",1)], stock))
print(order_flow([("A",1)], stock))`
    }
  ]
}
