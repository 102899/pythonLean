export default {
  id: 'project-05-logging-module-lite',
  title: "日志模块骨架最小集：字段选择与单行 JSON",
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
  initialOpenFile: 'app/logging/structured.py',
  workspaceDelta: {
    'app/logging/structured.py': `import json
def log_line(ts, level, service, msg):
    return json.dumps({"ts": ts, "level": level, "service": service, "msg": msg}, separators=(",",":"))`
  },
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">结构化日志：字段决策与单行输出</h3>
          <div class="space-y-8">
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 px-2 py-0.5 rounded text-xs font-bold">Checklist</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">5. 实战检查</h4>
                </div>
                <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                    <li>日志为单行 JSON；无附加语法与多余空白。</li>
                    <li>字段完整且类型正确（ts: int；msg: str）。</li>
                    <li>级别与服务名稳定；可用于聚合与告警。</li>
                </ul>
            </section>
          </div>
        `,
  concepts: [
    { id: 'proj_log_fields', label: '日志字段', type: 'project', desc: '选择 ts/level/service/msg。', refJs: 'log fields' },
    { id: 'proj_log_json', label: 'JSON 行输出', type: 'project', desc: 'json.dumps 单行输出。', refJs: 'JSON.stringify' },
    { id: 'proj_log_level', label: '级别约定', type: 'project', desc: 'info/warn/error。', refJs: 'logger levels' }
  ],
  code: `import json, time
log = {"ts": int(time.time() * 1000), "level": "info", "service": "app", "msg": "hello"}
print(json.dumps(log))`,
  quiz: [
    {
      type: 'code',
      question: "实现 log_line(level, service, msg) 并打印 JSON 行",
      initialCode: `import json
ts = 1700000000000`,
      expectedOutput: "{\"ts\":1700000000000,\"level\":\"info\",\"service\":\"app\",\"msg\":\"hello\"}",
      validationType: 'output',
      standardCode: `import json
ts = 1700000000000
def log_line(level, service, msg):
    entry = {"ts": ts, "level": level, "service": service, "msg": msg}
    return json.dumps(entry)
print(log_line("info", "app", "hello"))`,
      explanation: "考察字段与类型的稳定输出：确保 ts/int、level/service/msg 的有序构造与单行 JSON 打印。"
    },
    {
      type: 'choice',
      question: "采用 JSON 行而非自由文本的主要收益是？",
      options: ["便于机器解析与检索", "更好看", "更省字符", "随意"],
      correctAnswer: "便于机器解析与检索",
      explanation: "结构化提升可观测性：易收集、索引与告警；而自由文本难以稳定聚合。"
    },
    {
      type: 'code',
      question: "统计 error 级别条数并打印 2",
      initialCode: `logs = [
    {"ts": 1, "level": "info", "service": "app", "msg": "ok"},
    {"ts": 2, "level": "error", "service": "auth", "msg": "denied"},
    {"ts": 3, "level": "warn", "service": "app", "msg": "slow"},
    {"ts": 4, "level": "error", "service": "db", "msg": "down"}
]`,
      expectedOutput: "2",
      validationType: 'output',
      standardCode: `logs = [
    {"ts": 1, "level": "info", "service": "app", "msg": "ok"},
    {"ts": 2, "level": "error", "service": "auth", "msg": "denied"},
    {"ts": 3, "level": "warn", "service": "app", "msg": "slow"},
    {"ts": 4, "level": "error", "service": "db", "msg": "down"}
]
print(sum(1 for e in logs if e["level"] == "error"))`,
      explanation: "按级别聚合并统计条数。"
    }
  ]
}
