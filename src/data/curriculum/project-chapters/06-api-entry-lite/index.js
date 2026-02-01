export default {
  id: 'project-06-api-entry-lite',
  title: "API 入口与响应包最小集",
  workspaceId: 'enterprise-lite',
  visibleFiles: [
    'requirements.txt',
    'app/main.py',
    'app/cli/entry.py',
    'app/config/loader.py',
    'app/config/validator.py',
    'app/logging/structured.py',
    'app/service/__init__.py'
  ],
  initialOpenFile: 'app/main.py',
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">API：入口、响应与错误语义</h3>
          <div class="space-y-8">
            <section>
                <div class="flex items中心 gap-2 mb-3">
                    <span class="bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 px-2 py-0.5 rounded text-xs font-bold">Rules</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">错误语义：4xx ↔ 5xx</h4>
                </div>
                <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                    <li>4xx：输入校验失败、业务拒绝。</li>
                    <li>5xx：服务内部异常、依赖失败。</li>
                </ul>
            </section>
          </div>
        `,
  concepts: [
    { id: 'proj_api_envelope', label: '响应包', type: 'project', desc: '统一 code/message/data。', refJs: 'res.json' },
    { id: 'proj_api_routes', label: '路由与入口', type: 'project', desc: 'health/orders/inventory。', refJs: 'Express routes' },
    { id: 'proj_api_errors', label: '错误语义', type: 'project', desc: '4xx/5xx 边界。', refJs: 'HTTP status' }
  ],
  code: `print("API: OK")`,
  quiz: [
    {
      type: 'code',
      question: "实现 envelope 并打印 JSON 行",
      initialCode: `import json`,
      expectedOutput: "{\"code\":200,\"message\":\"ok\",\"data\":{\"health\":\"up\"}}",
      validationType: 'output',
      standardCode: `import json
def envelope(code, message, data):
    return {"code": code, "message": message, "data": data}
print(json.dumps(envelope(200, "ok", {"health":"up"})))`,
      explanation: "统一响应包：固定字段顺序与类型；用 JSON 行校验输出。"
    },
    {
      type: 'choice',
      question: "业务失败应返回哪一类状态码？",
      options: ["4xx", "5xx", "2xx", "3xx"],
      correctAnswer: "4xx",
      explanation: "输入或业务规则失败归属 4xx；服务异常归属 5xx。"
    }
  ]
}
