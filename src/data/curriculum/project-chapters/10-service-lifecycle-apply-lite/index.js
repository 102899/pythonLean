export default {
  id: 'project-10-service-lifecycle-apply-lite',
  title: "服务生命周期应用：main、退出码、健康检查",
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
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">生命周期：启动、运行与退出</h3>
          
          <div class="space-y-8">
            <section>
                <div class="flex items中心 gap-2 mb-3">
                    <span class="bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 px-2 py-0.5 rounded text-xs font-bold">Targets</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">章节目标与验收</h4>
                </div>
                <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                    <li>统一入口 main，健康检查输出。</li>
                    <li>退出码约定：0 成功、非 0 失败。</li>
                </ul>
            </section>
          </div>
        `,
  concepts: [
    { id: 'proj_life_main', label: '入口 main', type: 'project', desc: '统一启动。', refJs: 'IIFE' },
    { id: 'proj_life_exit', label: '退出码', type: 'project', desc: '0/非0 约定。', refJs: 'process.exit' }
  ],
  code: `print("Lifecycle: OK")`,
  quiz: [
    {
      type: 'code',
      question: "定义 main 并按约定打印退出文案",
      initialCode: `# 目标：打印 Exit: OK`,
      expectedOutput: "Exit: OK",
      validationType: 'output',
      standardCode: `def main():
    print("Exit: OK")
if __name__ == "__main__":
    main()`,
      explanation: "确保入口统一并输出约定文案。"
    }
  ]
}
