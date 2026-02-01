export default {
  id: 'project-14-cli-args-apply-lite',
  title: "CLI 参数解析最小集：host/port 与入口集成",
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
  initialOpenFile: 'app/cli/entry.py',
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">CLI：解析参数并输出确认文案</h3>
          
          <div class="space-y-8">
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 px-2 py-0.5 rounded text-xs font-bold">Targets</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">章节目标与验收</h4>
                </div>
                <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                    <li>解析 --host 与 --port。</li>
                    <li>输出确认文案。</li>
                </ul>
            </section>
          </div>
        `,
  concepts: [
    { id: 'proj_cli_parse', label: '参数解析', type: 'project', desc: '解析 host/port。' },
    { id: 'proj_cli_output', label: '输出确认', type: 'project', desc: '打印确认文案。' }
  ],
  code: `print("CLI: OK")`,
  quiz: [
    {
      type: 'code',
      question: "解析参数并打印确认文案",
      initialCode: `import argparse`,
      expectedOutput: "Host: 0.0.0.0 Port: 8081",
      validationType: 'output',
      standardCode: `import argparse
def parse_args(args):
    p = argparse.ArgumentParser()
    p.add_argument("--port", type=int)
    p.add_argument("--host", type=str)
    return p.parse_args(args)
o = parse_args(["--port","8081","--host","0.0.0.0"])
print(f"Host: {o.host} Port: {o.port}")`,
      explanation: "解析命令行参数并输出确认文案。"
    }
  ]
}
