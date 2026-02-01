export default {
  id: 'project-03-enterprise-blueprint-lite',
  title: "企业项目蓝图：为什么、如何与避免踩坑",
  workspaceId: 'enterprise-lite',
  visibleFiles: [
    'requirements.txt',
    'app/main.py',
    'app/cli/entry.py',
    'app/service/__init__.py',
    'app/config/loader.py',
    'app/config/validator.py'
  ],
  initialOpenFile: 'app/main.py',
  workspaceDelta: {
    'app/service/__init__.py': '\n'
  },
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">企业项目蓝图：为什么、如何与避免踩坑</h3>
          
          <div class="space-y-8">
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 px-2 py-0.5 rounded text-xs font-bold">Targets</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">章节目标与验收</h4>
                </div>
                <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                    <li>建立清晰目录与模块边界（config/logging/cli/service）。</li>
                    <li>实现统一入口 main 并可直接运行。</li>
                    <li>入口与配置解耦，依赖集中管理。</li>
                </ul>
            </section>
            
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded text-xs font-bold">Steps</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">步骤清单</h4>
                </div>
                <ol class="text-sm text-slate-600 dark:text-slate-300 list-decimal pl-6">
                    <li>创建 app/ 与 config/cli/service/logging 目录。</li>
                    <li>编写 main() 与 if __name__ == '__main__' 入口。</li>
                    <li>新增 requirements.txt 管理依赖。</li>
                    <li>确认模块边界与依赖关系图。</li>
                </ol>
            </section>
            <section>
                <div class="flex items中心 gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">Goal</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">1. 背景与目标：可维护的 0→1 项目骨架</h4>
                </div>
                <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    目标是明确“目录语义 → 模块边界 → 启动入口”的最小闭环，使团队在开发、测试、交付三个阶段使用同一心智模型。
                </p>
                <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                    <li>目录语义：app 为代码根；config/cli/service/logging 为职责分层。</li>
                    <li>模块边界：每个目录仅承担单一责任，避免跨层泄漏。</li>
                    <li>统一入口：main() + if __name__ == '__main__'，确保本地与生产行为一致。</li>
                </ul>
            </section>
          </div>
        `,
  concepts: [
    { id: 'proj_bp_dirs', label: '目录结构', type: 'project', desc: '配置/CLI/服务/入口分层。', refJs: 'src 分层' },
    { id: 'proj_bp_modules', label: '模块划分', type: 'project', desc: 'config/logging/cli/service 职责。', refJs: '模块边界' },
    { id: 'proj_bp_entry', label: '启动入口', type: 'project', desc: 'main 统一入口与依赖。', refJs: 'node 入口' }
  ],
  code: `modules = ["config", "logging", "cli", "service"]
print("modules:", len(modules))`,
  quiz: [
    {
      type: 'code',
      question: "以统一入口组织蓝图：定义 modules 与 main() 并打印 Blueprint: OK",
      initialCode: `modules = ["config","logging","cli","service"]`,
      expectedOutput: "Blueprint: OK",
      validationType: 'output',
      standardCode: `modules = ["config","logging","cli","service"]
def main():
    print("Blueprint: OK")
if __name__ == "__main__":
    main()`,
      explanation: "入口统一与模块边界是 0→1 项目骨架的关键；确保 main 可直接运行并输出校验信息。"
    },
    {
      type: 'choice',
      question: "哪些应作为独立模块边界？",
      options: ["config/logging/cli/service", "utils/helpers/misc", "random/tmp/cache", "scripts/tests/assets"],
      correctAnswer: "config/logging/cli/service",
      explanation: "选择按职责分层的模块边界，避免技术性目录（utils/misc）成为“万能兜底”。"
    },
    {
      type: 'choice',
      question: "入口推荐写法是？",
      options: ["main() + if __name__ == '__main__'", "随处 print()", "类构造器自动执行", "任务调度器随机触发"],
      correctAnswer: "main() + if __name__ == '__main__'",
      explanation: "该写法本地/生产均一致，便于测试与部署；避免全局执行脚本带来的副作用。"
    }
  ]
}
