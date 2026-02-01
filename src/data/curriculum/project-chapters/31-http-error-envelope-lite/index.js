export default {
  id: 'project-31-http-error-envelope-lite',
  title: "HTTP 错误契约最小集：统一包与语义",
  workspaceId: 'enterprise-lite',
  visibleFiles: [
    'requirements.txt',
    'app/main.py',
    'app/common/response.py',
    'app/http/error_contract.py'
  ],
  initialOpenFile: 'app/http/error_contract.py',
  workspaceDelta: {
    'app/http/error_contract.py': `import json
def to_error(code, message):
    return json.dumps({"code": code, "message": message, "data": None}, separators=(",",":"))`
  },
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">错误契约：统一 envelope 与语义边界</h3>
          <div class="space-y-8">
            <section>
              <div class="flex items-center gap-2 mb-3">
                <span class="bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 px-2 py-0.5 rounded text-xs font-bold">Targets</span>
                <h4 class="font-bold text-slate-700 dark:text-slate-200">章节目标与验收</h4>
              </div>
              <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                <li>输出统一错误包：code/message/data。</li>
                <li>区分 4xx 与 5xx 的语义边界。</li>
              </ul>
            </section>
            <section>
              <div class="flex items-center gap-2 mb-3">
                <span class="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded text-xs font-bold">Steps</span>
                <h4 class="font-bold text-slate-700 dark:text-slate-200">步骤清单</h4>
              </div>
              <ol class="text-sm text-slate-600 dark:text-slate-300 list-decimal pl-6">
                <li>实现 to_error(code, message)。</li>
                <li>打印单行 JSON；data 为 null。</li>
              </ol>
            </section>
          </div>
        `,
  concepts: [
    { id: 'proj_http_err', label: '错误契约', type: 'project', desc: '统一 envelope。' }
  ],
  code: `print("HTTP Error: OK")`,
  quiz: [
    {
      type: 'code',
      question: "打印 400 错误的统一包",
      initialCode: `import json
def to_error(code, message):
    return json.dumps({"code": code, "message": message, "data": None}, separators=(",",":"))`,
      expectedOutput: "{\"code\":400,\"message\":\"bad\",\"data\":null}",
      validationType: 'output',
      standardCode: `import json
def to_error(code, message):
    return json.dumps({"code": code, "message": message, "data": None}, separators=(",",":"))
print(to_error(400,"bad"))`
    }
  ]
}
