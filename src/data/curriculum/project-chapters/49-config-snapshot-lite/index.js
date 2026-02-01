export default {
  id: 'project-49-config-snapshot-lite',
  title: "配置快照最小集：备份与恢复",
  workspaceId: 'enterprise-lite',
  visibleFiles: [
    'requirements.txt',
    'app/main.py',
    'app/config/snapshot.py'
  ],
  initialOpenFile: 'app/config/snapshot.py',
  workspaceDelta: {
    'app/config/snapshot.py': `def make_snapshot(cfg):
    return dict(cfg)
def apply_snapshot(snap):
    return dict(snap)`
  },
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">快照：保存当前配置并恢复使用</h3>
          <div class="space-y-8">
            <section>
              <div class="flex items中心 gap-2 mb-3">
                <span class="bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 px-2 py-0.5 rounded text-xs font-bold">Targets</span>
                <h4 class="font-bold text-slate-700 dark:text-slate-200">章节目标与验收</h4>
              </div>
              <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                <li>make_snapshot(cfg)。</li>
                <li>apply_snapshot(snap)。</li>
              </ul>
            </section>
          </div>
        `,
  concepts: [
    { id: 'proj_cfg_snapshot', label: '快照恢复', type: 'project', desc: '备份与恢复。' }
  ],
  code: `print("ConfigSnapshot: OK")`,
  quiz: [
    {
      type: 'code',
      question: "恢复快照后打印 8080",
      initialCode: `def make_snapshot(cfg):
    return dict(cfg)
def apply_snapshot(snap):
    return dict(snap)
cfg = {"host":"localhost","port":8080}
snap = make_snapshot(cfg)
cfg["port"] = 9092`,
      expectedOutput: "8080",
      validationType: 'output',
      standardCode: `def make_snapshot(cfg):
    return dict(cfg)
def apply_snapshot(snap):
    return dict(snap)
cfg = {"host":"localhost","port":8080}
snap = make_snapshot(cfg)
cfg["port"] = 9092
restored = apply_snapshot(snap)
print(restored["port"])`
    }
  ]
}
