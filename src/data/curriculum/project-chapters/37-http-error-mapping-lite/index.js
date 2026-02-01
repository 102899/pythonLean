export default {
  id: 'project-37-http-error-mapping-lite',
  title: "HTTP 错误映射：异常→状态码",
  workspaceId: 'enterprise-lite',
  visibleFiles: [
    'requirements.txt',
    'app/main.py',
    'app/http/error_mapping.py'
  ],
  initialOpenFile: 'app/http/error_mapping.py',
  workspaceDelta: {
    'app/http/error_mapping.py': `def map_exc(e):
    if isinstance(e, ValueError):
        return 400
    return 500`
  },
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">错误映射：将异常类型转为状态码</h3>
          <div class="space-y-8">
            <section>
              <div class="flex items-center gap-2 mb-3">
                <span class="bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 px-2 py-0.5 rounded text-xs font-bold">Targets</span>
                <h4 class="font-bold text-slate-700 dark:text-slate-200">章节目标与验收</h4>
              </div>
              <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                <li>ValueError → 400。</li>
                <li>其他异常 → 500。</li>
              </ul>
            </section>
          </div>
        `,
  concepts: [
    { id: 'proj_http_map', label: '异常映射', type: 'project', desc: '类型→状态码。' }
  ],
  code: `print("ErrorMapping: OK")`,
  quiz: [
    {
      type: 'code',
      question: "映射 ValueError 与一般 Exception",
      initialCode: `def map_exc(e):
    if isinstance(e, ValueError):
        return 400
    return 500`,
      expectedOutput: "400\n500",
      validationType: 'output',
      standardCode: `def map_exc(e):
    if isinstance(e, ValueError):
        return 400
    return 500
print(map_exc(ValueError("x")))
print(map_exc(Exception("y")))`
    }
  ]
}
