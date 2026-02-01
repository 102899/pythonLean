export default {
  id: 'project-11-trace-context-lite',
  title: "请求与日志上下文最小集：trace_id 统一携带",
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
def log_line(ts, level, service, msg, trace=None):
    entry = {"ts": ts, "level": level, "service": service, "msg": msg}
    if trace is not None:
        entry["trace"] = trace
    return json.dumps(entry, separators=(",",":"))
def log_with_trace(level, service, msg, trace):
    ts = 1700000000000
    entry = {"ts": ts, "level": level, "service": service, "msg": msg, "trace": trace}
    return json.dumps(entry, separators=(",",":"))`
  },
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">上下文：将 trace_id 贯穿响应与日志</h3>
          
          <div class="space-y-8">
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 px-2 py-0.5 rounded text-xs font-bold">Targets</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">章节目标与验收</h4>
                </div>
                <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                    <li>在日志 JSON 行中携带 trace 字段。</li>
                    <li>保证响应包与日志使用同一 trace_id。</li>
                </ul>
            </section>
            
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded text-xs font-bold">Steps</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">步骤清单</h4>
                </div>
                <ol class="text-sm text-slate-600 dark:text-slate-300 list-decimal pl-6">
                    <li>定义 log_with_trace(level, service, msg, trace)。</li>
                    <li>构造包含 trace 的单行 JSON 并输出。</li>
                </ol>
            </section>
          </div>
        `,
  concepts: [
    { id: 'proj_ctx_trace', label: 'trace_id', type: 'project', desc: '上下文贯穿响应与日志。' },
    { id: 'proj_ctx_log', label: '日志携带', type: 'project', desc: 'JSON 行加入 trace 字段。' }
  ],
  code: `print("Trace: OK")`,
  quiz: [
    {
      type: 'code',
      question: "输出包含 trace 字段的日志 JSON 行",
      initialCode: `import json
ts = 1700000000000`,
      expectedOutput: "{\"ts\":1700000000000,\"level\":\"info\",\"service\":\"app\",\"msg\":\"hello\",\"trace\":\"abc\"}",
      validationType: 'output',
      standardCode: `import json
ts = 1700000000000
def log_with_trace(level, service, msg, trace):
    entry = {"ts": ts, "level": level, "service": service, "msg": msg, "trace": trace}
    print(json.dumps(entry))
log_with_trace("info", "app", "hello", "abc")`,
      explanation: "将 trace 字段并入日志 JSON 行。"
    },
    {
      type: 'code',
      question: "统计携带 trace 的条数并打印",
      initialCode: `logs = [
    {"ts": 1, "level": "info", "service": "app", "msg": "a", "trace": "x"},
    {"ts": 2, "level": "info", "service": "app", "msg": "b", "trace": "x"}
]`,
      expectedOutput: "Traced: 2",
      validationType: 'output',
      standardCode: `logs = [
    {"ts": 1, "level": "info", "service": "app", "msg": "a", "trace": "x"},
    {"ts": 2, "level": "info", "service": "app", "msg": "b", "trace": "x"}
]
print(f"Traced: {sum(1 for e in logs if e.get('trace'))}")`,
      explanation: "统计带有 trace 的日志条数。"
    }
  ]
}
