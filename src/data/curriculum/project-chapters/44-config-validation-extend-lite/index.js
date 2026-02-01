export default {
  id: 'project-44-config-validation-extend-lite',
  title: "配置校验扩展：新增字段与规则",
  workspaceId: 'enterprise-lite',
  visibleFiles: [
    'requirements.txt',
    'app/main.py',
    'app/config/validator_extend.py'
  ],
  initialOpenFile: 'app/config/validator_extend.py',
  workspaceDelta: {
    'app/config/validator_extend.py': `def validate_extended(cfg):
    h = cfg.get("host")
    p = cfg.get("port")
    m = cfg.get("mode")
    if not isinstance(h, str):
        raise ValueError("host")
    if not isinstance(p, int) or p <= 0:
        raise ValueError("port")
    if m not in ("dev","prod"):
        raise ValueError("mode")
    return cfg`
  },
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">校验扩展：在基础校验上增加 mode 字段</h3>
          <div class="space-y-8">
            <section>
              <div class="flex items-center gap-2 mb-3">
                <span class="bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 px-2 py-0.5 rounded text-xs font-bold">Targets</span>
                <h4 class="font-bold text-slate-700 dark:text-slate-200">章节目标与验收</h4>
              </div>
              <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                <li>新增字段 mode 校验。</li>
                <li>返回通过的配置对象。</li>
              </ul>
            </section>
          </div>
        `,
  concepts: [
    { id: 'proj_cfg_validate_extend', label: '字段扩展', type: 'project', desc: '严格校验。' }
  ],
  code: `print("ConfigValidateExt: OK")`,
  quiz: [
    {
      type: 'code',
      question: "校验通过后打印 mode",
      initialCode: `def validate_extended(cfg):
    h = cfg.get("host")
    p = cfg.get("port")
    m = cfg.get("mode")
    if not isinstance(h, str):
        raise ValueError("host")
    if not isinstance(p, int) or p <= 0:
        raise ValueError("port")
    if m not in ("dev","prod"):
        raise ValueError("mode")
    return cfg
cfg = {"host":"localhost","port":8080,"mode":"prod"}`,
      expectedOutput: "prod",
      validationType: 'output',
      standardCode: `def validate_extended(cfg):
    h = cfg.get("host")
    p = cfg.get("port")
    m = cfg.get("mode")
    if not isinstance(h, str):
        raise ValueError("host")
    if not isinstance(p, int) or p <= 0:
        raise ValueError("port")
    if m not in ("dev","prod"):
        raise ValueError("mode")
    return cfg
cfg = {"host":"localhost","port":8080,"mode":"prod"}
print(validate_extended(cfg)["mode"])`
    }
  ]
}
