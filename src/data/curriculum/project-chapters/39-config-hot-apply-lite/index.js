export default {
  id: 'project-39-config-hot-apply-lite',
  title: "配置热应用最小集：运行时更新",
  workspaceId: 'enterprise-lite',
  visibleFiles: [
    'requirements.txt',
    'app/main.py',
    'app/config/hot_apply.py'
  ],
  initialOpenFile: 'app/config/hot_apply.py',
  workspaceDelta: {
    'app/config/hot_apply.py': `def apply_update(cfg, changes):
    out = {**cfg, **changes}
    return out`
  },
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">热应用：对运行中配置进行安全更新</h3>
          <div class="space-y-8">
            <section>
              <div class="flex items-center gap-2 mb-3">
                <span class="bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 px-2 py-0.5 rounded text-xs font-bold">Targets</span>
                <h4 class="font-bold text-slate-700 dark:text-slate-200">章节目标与验收</h4>
              </div>
              <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                <li>apply_update(cfg, changes)。</li>
                <li>返回合并后的新配置。</li>
              </ul>
            </section>
          </div>
        `,
  concepts: [
    { id: 'proj_cfg_hot', label: '热应用', type: 'project', desc: '运行时更新。' }
  ],
  code: `print("ConfigHotApply: OK")`,
  quiz: [
    {
      type: 'code',
      question: "更新 port 字段并打印 host:port",
      initialCode: `def apply_update(cfg, changes):
    out = {**cfg, **changes}
    return out
cfg = {"host": "localhost", "port": 8080}
new_cfg = apply_update(cfg, {"port": 9092})
print(f"{new_cfg['host']}:{new_cfg['port']}")`,
      expectedOutput: "localhost:9092",
      validationType: 'output',
      standardCode: `def apply_update(cfg, changes):
    out = {**cfg, **changes}
    return out
cfg = {"host": "localhost", "port": 8080}
new_cfg = apply_update(cfg, {"port": 9092})
print(f"{new_cfg['host']}:{new_cfg['port']}")`
    }
  ]
}
