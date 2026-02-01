export default {
  id: 'project-30-http-routes-mock-lite',
  title: "HTTP 路由心智：统一响应与示例返回",
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
  initialOpenFile: 'app/main.py',
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">路由心智：以统一响应包模拟 /health 与 /inventory</h3>
          <div class="space-y-8">
            <section>
              <div class="flex items-center gap-2 mb-3">
                <span class="bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 px-2 py-0.5 rounded text-xs font-bold">Targets</span>
                <h4 class="font-bold text-slate-700 dark:text-slate-200">章节目标与验收</h4>
              </div>
              <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                <li>统一响应 envelope(code,message,data)。</li>
                <li>模拟 /health 与 /inventory/{sku} 返回。</li>
              </ul>
            </section>
          </div>
        `,
  concepts: [
    { id: 'proj_routes_envelope', label: '统一响应', type: 'project', desc: 'code/message/data。' }
  ],
  code: `print("Routes: OK")`,
  quiz: [
    {
      type: 'code',
      question: "模拟 /health 返回 JSON",
      initialCode: `import json
def envelope(code, message, data):
    return {"code":code,"message":message,"data":data}`,
      expectedOutput: "{\"code\":200,\"message\":\"ok\",\"data\":{\"service\":\"healthy\"}}",
      validationType: 'output',
      standardCode: `import json
def envelope(code, message, data):
    return {"code":code,"message":message,"data":data}
print(json.dumps(envelope(200,"ok",{"service":"healthy"}),separators=(",",":")))`
    }
  ]
}
