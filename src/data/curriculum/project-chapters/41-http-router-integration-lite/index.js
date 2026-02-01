export default {
  id: 'project-41-http-router-integration-lite',
  title: "HTTP 路由集成最小集：函数映射",
  workspaceId: 'enterprise-lite',
  visibleFiles: [
    'requirements.txt',
    'app/main.py',
    'app/http/router.py'
  ],
  initialOpenFile: 'app/http/router.py',
  workspaceDelta: {
    'app/http/router.py': `def dispatch(routes, path):
    h = routes.get(path)
    if not h:
        return "404"
    return h()`
  },
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">路由：将路径映射到处理函数</h3>
          <div class="space-y-8">
            <section>
              <div class="flex items-center gap-2 mb-3">
                <span class="bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 px-2 py-0.5 rounded text-xs font-bold">Targets</span>
                <h4 class="font-bold text-slate-700 dark:text-slate-200">章节目标与验收</h4>
              </div>
              <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                <li>实现 dispatch(routes, path)。</li>
                <li>缺失路径返回 "404"。</li>
              </ul>
            </section>
          </div>
        `,
  concepts: [
    { id: 'proj_http_router', label: '函数映射', type: 'project', desc: 'path→handler。' }
  ],
  code: `print("Router: OK")`,
  quiz: [
    {
      type: 'code',
      question: "映射 /health 并打印 ok",
      initialCode: `def dispatch(routes, path):
    h = routes.get(path)
    if not h:
        return "404"
    return h()
routes = {"/health": lambda: "ok"}`,
      expectedOutput: "ok",
      validationType: 'output',
      standardCode: `def dispatch(routes, path):
    h = routes.get(path)
    if not h:
        return "404"
    return h()
routes = {"/health": lambda: "ok"}
print(dispatch(routes, "/health"))`
    }
  ]
}
