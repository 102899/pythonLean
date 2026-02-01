export default {
  id: 'project-04-config-module-lite',
  title: "配置模块骨架最小集：defaults/file/env、validate、merge",
  workspaceId: 'enterprise-lite',
  visibleFiles: [
    'requirements.txt',
    'app/main.py',
    'app/cli/entry.py',
    'app/service/__init__.py',
    'app/config/loader.py',
    'app/config/validator.py'
  ],
  initialOpenFile: 'app/config/loader.py',
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">配置骨架：角色分离与分层策略的工程化</h3>
          
          <div class="space-y-8">
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 px-2 py-0.5 rounded text-xs font-bold">Targets</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">章节目标与验收</h4>
                </div>
                <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                    <li>Loader 与 Validator 职责清晰、彼此解耦。</li>
                    <li>实现默认→文件→环境优先的分层策略。</li>
                    <li>类型校验严格：host 为 str、port 为 int。</li>
                </ul>
            </section>
            
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded text-xs font-bold">Steps</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">步骤清单</h4>
                </div>
                <ol class="text-sm text-slate-600 dark:text-slate-300 list-decimal pl-6">
                    <li>实现 defaults 与文件文本解析（JSON）。</li>
                    <li>合并默认与文件；读取环境变量并做类型转换。</li>
                    <li>编写 validator：字段存在且类型正确，否则失败。</li>
                </ol>
            </section>
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">Roles</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">1. 角色分离：Loader 与 Validator</h4>
                </div>
            </section>
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 px-2 py-0.5 rounded text-xs font-bold">Pitfalls</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">3. 常见误区与对策</h4>
                </div>
                <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                    <li>把验证写成“打印提示”；应返回错误或抛出异常。</li>
                    <li>环境变量直接覆盖未转换类型；应做 int/str 显式转换。</li>
                    <li>默认值散落各处；应集中在 defaults。</li>
                </ul>
            </section>
          </div>
        `,
  concepts: [
    { id: 'proj_cfg_loader', label: '加载器', type: 'project', desc: '读取默认/文件/环境。', refJs: 'loader' },
    { id: 'proj_cfg_validator', label: '校验器', type: 'project', desc: '字段与类型校验。', refJs: 'validator' },
    { id: 'proj_cfg_strategy', label: '策略合并', type: 'project', desc: '默认→文件→环境优先。', refJs: 'Object.assign + env' }
  ],
  code: `import os, json
def load_defaults(): return {"host": "localhost", "port": 8080}
def load_file(text): return json.loads(text)
def merge(a, b): return {**a, **b}
def apply_env(cfg):
    p = os.getenv("PORT")
    if p: cfg["port"] = int(p)
    return cfg
cfg = apply_env(merge(load_defaults(), load_file('{"port": 9090}')))
print(f"{cfg['host']}:{cfg['port']}")`,
  quiz: [
    {
      type: 'code',
      question: "为 cfg 添加严格校验并打印 Valid",
      initialCode: `cfg = {"host": "localhost", "port": 8080}`,
      expectedOutput: "Valid",
      validationType: 'output',
      standardCode: `cfg = {"host": "localhost", "port": 8080}
def validate(cfg):
    if not isinstance(cfg.get("host"), str): raise ValueError("host")
    if not isinstance(cfg.get("port"), int): raise ValueError("port")
    print("Valid")
validate(cfg)`,
      explanation: "校验要以异常或显式返回驱动，而非打印提示；通过后再输出确认信息。"
    }
  ]
}
