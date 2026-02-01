export default {
  id: 'project-50-project-epilogue-lite',
  title: "实战篇收官：最终验收与心智闭环",
  workspaceId: 'enterprise-lite',
  visibleFiles: [
    'requirements.txt',
    'app/main.py',
    'app/epilogue/checklist.py'
  ],
  initialOpenFile: 'app/epilogue/checklist.py',
  workspaceDelta: {
    'app/epilogue/checklist.py': `def finalize_message():
    return "Project Completed"`
  },
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">收官：以最小验收收束学习闭环</h3>
          <div class="space-y-8">
            <section>
              <div class="flex items-center gap-2 mb-3">
                <span class="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded text-xs font-bold">Checklist</span>
                <h4 class="font-bold text-slate-700 dark:text-slate-200">最终验收清单</h4>
              </div>
              <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                <li>配置：默认/文件/环境与热应用。</li>
                <li>日志：JSON 行与 trace 上下文。</li>
                <li>业务：订单/库存/并发/幂等/编排。</li>
                <li>可观测性：指标与采样、错误映射。</li>
                <li>缓存：KV/失效/写穿。</li>
                <li>路由与中间件：函数映射与前置校验。</li>
              </ul>
            </section>
          </div>
        `,
  concepts: [
    { id: 'proj_epilogue', label: '收官验收', type: 'project', desc: '闭环心智。' }
  ],
  code: `print("Epilogue: OK")`,
  quiz: [
    {
      type: 'code',
      question: "打印最终收官提示",
      initialCode: `def finalize_message():
    return "Project Completed"`,
      expectedOutput: "Project Completed",
      validationType: 'output',
      standardCode: `def finalize_message():
    return "Project Completed"
print(finalize_message())`
    }
  ]
}
