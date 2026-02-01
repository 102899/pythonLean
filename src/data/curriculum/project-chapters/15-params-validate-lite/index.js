export default {
  id: 'project-15-params-validate-lite',
  title: "参数校验最小集：字段存在、类型、边界",
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
  initialOpenFile: 'app/service/__init__.py',
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">参数校验：字段、类型与边界</h3>
          <div class="space-y-8">
            <section>
              <div class="flex items-center gap-2 mb-3">
                <span class="bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 px-2 py-0.5 rounded text-xs font-bold">Targets</span>
                <h4 class="font-bold text-slate-700 dark:text-slate-200">章节目标与验收</h4>
              </div>
              <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                <li>必须字段存在：sku、qty。</li>
                <li>类型正确：sku 为 str、qty 为正 int。</li>
              </ul>
            </section>
            <section>
              <div class="flex items-center gap-2 mb-3">
                <span class="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded text-xs font-bold">Steps</span>
                <h4 class="font-bold text-slate-700 dark:text-slate-200">步骤清单</h4>
              </div>
              <ol class="text-sm text-slate-600 dark:text-slate-300 list-decimal pl-6">
                <li>编写 validate(payload)。</li>
                <li>按“字段→类型→边界”顺序校验。</li>
              </ol>
            </section>
          </div>
        `,
  concepts: [
    { id: 'proj_val_fields', label: '字段存在', type: 'project', desc: '必须字段校验。' },
    { id: 'proj_val_types', label: '类型', type: 'project', desc: 'sku:str qty:int。' },
    { id: 'proj_val_bounds', label: '边界', type: 'project', desc: 'qty>0。' }
  ],
  code: `print("Validate: OK")`,
  quiz: [
    {
      type: 'code',
      question: "校验通过打印 Valid",
      initialCode: `payload = {"sku":"A","qty":1}`,
      expectedOutput: "Valid",
      validationType: 'output',
      standardCode: `payload = {"sku":"A","qty":1}
def validate(p):
    if not isinstance(p.get("sku"), str):
        print("Error"); return
    q = p.get("qty")
    if not isinstance(q, int) or q <= 0:
        print("Error"); return
    print("Valid")
validate(payload)`,
      explanation: "字段、类型与边界满足时打印 Valid。"
    },
    {
      type: 'code',
      question: "边界不满足打印 Error",
      initialCode: `payload = {"sku":"A","qty":0}`,
      expectedOutput: "Error",
      validationType: 'output',
      standardCode: `payload = {"sku":"A","qty":0}
def validate(p):
    if not isinstance(p.get("sku"), str):
        print("Error"); return
    q = p.get("qty")
    if not isinstance(q, int) or q <= 0:
        print("Error"); return
    print("Valid")
validate(payload)`
    },
    {
      type: 'code',
      question: "缺少字段打印 Error",
      initialCode: `payload = {}`,
      expectedOutput: "Error",
      validationType: 'output',
      standardCode: `payload = {}
def validate(p):
    if not isinstance(p.get("sku"), str):
        print("Error"); return
    q = p.get("qty")
    if not isinstance(q, int) or q <= 0:
        print("Error"); return
    print("Valid")
validate(payload)`
    }
  ]
}
