export default {
  id: 'project-09-config-layering-apply-lite',
  title: "配置分层应用：默认→文件→环境优先",
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
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">配置分层：应用到入口与业务</h3>
          
          <div class="space-y-8">
            <section>
                <div class="flex items中心 gap-2 mb-3">
                    <span class="bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 px-2 py-0.5 rounded text-xs font-bold">Targets</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">章节目标与验收</h4>
                </div>
                <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                    <li>将分层策略应用到 main 与 service。</li>
                    <li>环境变量优先覆盖并做类型转换。</li>
                    <li>通过 validator 严格校验。</li>
                </ul>
            </section>
          </div>
        `,
  concepts: [
    { id: 'proj_cfg_apply', label: '应用分层', type: 'project', desc: '入口/业务使用配置。', refJs: 'env override' },
    { id: 'proj_cfg_validate', label: '严格校验', type: 'project', desc: '类型与必需字段。', refJs: 'schema check' }
  ],
  code: `print("Config Apply: OK")`,
  quiz: [
    {
      type: 'code',
      question: "合并默认与文件并以环境覆盖，打印 host:port",
      initialCode: `import os, json
os.environ["PORT"] = "9092"
defaults = {"host": "localhost", "port": 8080}
file = json.loads('{"port": 9090}')`,
      expectedOutput: "localhost:9092",
      validationType: 'output',
      standardCode: `import os, json
os.environ["PORT"] = "9092"
defaults = {"host": "localhost", "port": 8080}
file = json.loads('{"port": 9090}')
cfg = {**defaults, **file}
port = int(os.getenv("PORT") or cfg["port"])
print(f"{cfg['host']}:{port}")`,
      explanation: "环境变量优先覆盖并做类型转换。"
    }
  ]
}
