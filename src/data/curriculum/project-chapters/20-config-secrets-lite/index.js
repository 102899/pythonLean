export default {
  id: 'project-20-config-secrets-lite',
  title: "密钥读取最小集：环境优先与回退",
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
  initialOpenFile: 'app/config/loader.py',
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">密钥：读取环境并提供回退</h3>
          <div class="space-y-8">
            <section>
              <div class="flex items-center gap-2 mb-3">
                <span class="bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 px-2 py-0.5 rounded text-xs font-bold">Targets</span>
                <h4 class="font-bold text-slate-700 dark:text-slate-200">章节目标与验收</h4>
              </div>
              <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                <li>从环境读取 SECRET；无则回退为 none。</li>
              </ul>
            </section>
          </div>
        `,
  concepts: [
    { id: 'proj_secret_env', label: '环境密钥', type: 'project', desc: '优先读取环境变量。' },
    { id: 'proj_secret_fallback', label: '回退', type: 'project', desc: '无值回退默认。' }
  ],
  code: `print("Secret: OK")`,
  quiz: [
    {
      type: 'code',
      question: "无环境打印 Secret: none",
      initialCode: `import os`,
      expectedOutput: "Secret: none",
      validationType: 'output',
      standardCode: `import os
secret = os.getenv("SECRET","none")
print(f"Secret: {secret}")`
    },
    {
      type: 'code',
      question: "有环境打印 Secret: abc",
      initialCode: `import os`,
      expectedOutput: "Secret: abc",
      validationType: 'output',
      standardCode: `import os
os.environ["SECRET"] = "abc"
secret = os.getenv("SECRET","none")
print(f"Secret: {secret}")`
    }
  ]
}
