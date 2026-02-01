export default {
  id: 'project-46-router-middleware-lite',
  title: "路由中间件最小集：前置校验与短路",
  workspaceId: 'enterprise-lite',
  visibleFiles: [
    'requirements.txt',
    'app/main.py',
    'app/http/middleware.py'
  ],
  initialOpenFile: 'app/http/middleware.py',
  workspaceDelta: {
    'app/http/middleware.py': `def run_with_mw(handler, pre_check):
    if not pre_check():
        return "denied"
    return handler()`
  },
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">中间件：在处理前进行校验并可短路</h3>
          <div class="space-y-8">
            <section>
              <div class="flex items-center gap-2 mb-3">
                <span class="bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 px-2 py-0.5 rounded text-xs font-bold">Targets</span>
                <h4 class="font-bold text-slate-700 dark:text-slate-200">章节目标与验收</h4>
              </div>
              <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                <li>实现 run_with_mw(handler, pre_check)。</li>
                <li>校验失败短路返回 denied。</li>
              </ul>
            </section>
          </div>
        `,
  concepts: [
    { id: 'proj_router_mw', label: '中间件', type: 'project', desc: '前置校验与短路。' }
  ],
  code: `print("Middleware: OK")`,
  quiz: [
    {
      type: 'code',
      question: "一次 denied，一次 ok",
      initialCode: `def run_with_mw(handler, pre_check):
    if not pre_check():
        return "denied"
    return handler()
def ok(): return "ok"`,
      expectedOutput: "denied\nok",
      validationType: 'output',
      standardCode: `def run_with_mw(handler, pre_check):
    if not pre_check():
        return "denied"
    return handler()
def ok(): return "ok"
print(run_with_mw(ok, lambda: False))
print(run_with_mw(ok, lambda: True))`
    }
  ]
}
