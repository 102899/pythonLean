export default {
  id: 'project-08-error-handling-lite',
  title: "错误处理最小集：try/except、错误语义与响应包",
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
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">错误边界：捕获、分类与统一返回</h3>
          
          <div class="space-y-8">
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 px-2 py-0.5 rounded text-xs font-bold">Targets</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">章节目标与验收</h4>
                </div>
                <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                    <li>明确业务错误与服务错误的分类。</li>
                    <li>try/except 捕获并转换为统一响应包。</li>
                    <li>输出错误 JSON 行（ts/level/service/msg）。</li>
                </ul>
            </section>
            
            <section>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript 心智</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>try { /* fail */ } catch (e) { /* 4xx/5xx */ }</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python 实施</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>def envelope(code, message, data):
    return {"code": code, "message": message, "data": data}</code></pre>
                    </div>
                </div>
            </section>
          </div>
        `,
  concepts: [
    { id: 'proj_err_boundary', label: '错误边界', type: 'project', desc: '业务 vs 服务错误。', refJs: 'error types' },
    { id: 'proj_err_envelope', label: '错误响应', type: 'project', desc: '统一响应包。', refJs: 'res.json' },
    { id: 'proj_err_log', label: '错误日志', type: 'project', desc: 'JSON 行输出。', refJs: 'structured logging' }
  ],
  code: `print("Error: OK")`,
  quiz: [
    {
      type: 'code',
      question: "捕获异常并打印统一错误响应",
      initialCode: `import json
def envelope(code, message, data):
    return {"code": code, "message": message, "data": data}`,
      expectedOutput: "{\"code\":500,\"message\":\"server error\",\"data\":{}}",
      validationType: 'output',
      standardCode: `import json
def envelope(code, message, data):
    return {"code": code, "message": message, "data": data}
try:
    raise RuntimeError("fail")
except Exception:
    print(json.dumps(envelope(500, "server error", {})))`,
      explanation: "服务异常转换为 5xx；输出统一响应包。"
    },
    {
      type: 'choice',
      question: "输入校验失败属于？",
      options: ["4xx", "5xx", "2xx", "3xx"],
      correctAnswer: "4xx",
      explanation: "业务规则或输入错误归类 4xx。"
    }
  ]
}
