export default {
  id: 'project-26-cli-entry-lite',
  title: "CLI 最小集：解析参数并注入入口",
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
  initialOpenFile: 'app/cli/entry.py',
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">CLI：参数解析与入口集成</h3>
          <div class="space-y-8">
            <section>
              <div class="flex items-center gap-2 mb-3">
                <span class="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded text-xs font-bold">Targets</span>
                <h4 class="font-bold text-slate-700 dark:text-slate-200">章节目标与验收</h4>
              </div>
              <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                <li>parse_args(args)：读取 --port 与 --host。</li>
                <li>打印解析结果用于验证。</li>
              </ul>
            </section>
          </div>
        `,
  concepts: [
    { id: 'proj_cli_parse', label: '参数解析', type: 'project', desc: '从 CLI 读取配置。' }
  ],
  code: `print("CLI: OK")`,
  quiz: [
    {
      type: 'code',
      question: "解析 CLI 参数并打印端口",
      initialCode: `def parse_args(args):
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument("--port", type=int)
    return p.parse_args(args)`,
      expectedOutput: "8080",
      validationType: 'output',
      standardCode: `def parse_args(args):
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument("--port", type=int)
    return p.parse_args(args)
print(parse_args(["--port","8080"]).port)`
    }
  ]
}
