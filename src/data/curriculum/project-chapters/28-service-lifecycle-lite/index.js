export default {
  id: 'project-28-service-lifecycle-lite',
  title: "服务生命周期最小集：信号与退出码",
  workspaceId: 'enterprise-lite',
  visibleFiles: [
    'requirements.txt',
    'app/main.py',
    'app/cli/entry.py',
    'app/config/loader.py',
    'app/config/validator.py',
    'app/logging/structured.py',
    'app/service/__init__.py',
    'app/service/idempotency.py',
    'app/util/lifecycle.py'
  ],
  initialOpenFile: 'app/util/lifecycle.py',
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">优雅退出：SIGINT/SIGTERM 与退出码约定</h3>
          <div class="space-y-8">
            <section>
              <div class="flex items-center gap-2 mb-3">
                <span class="bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 px-2 py-0.5 rounded text-xs font-bold">Targets</span>
                <h4 class="font-bold text-slate-700 dark:text-slate-200">章节目标与验收</h4>
              </div>
              <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                <li>exit_code(signal)：SIGINT/SIGTERM 返回 0。</li>
                <li>其它信号返回 1。</li>
              </ul>
            </section>
          </div>
        `,
  concepts: [
    { id: 'proj_lifecycle_exit', label: '退出码', type: 'project', desc: '成功 0/失败非 0。' }
  ],
  code: `print("Lifecycle: OK")`,
  quiz: [
    {
      type: 'code',
      question: "SIGINT 对应退出码 0",
      initialCode: `def exit_code(signal_name):
    return 0 if signal_name in ("SIGINT","SIGTERM") else 1`,
      expectedOutput: "0",
      validationType: 'output',
      standardCode: `def exit_code(signal_name):
    return 0 if signal_name in ("SIGINT","SIGTERM") else 1
print(exit_code("SIGINT"))`
    }
  ]
}
