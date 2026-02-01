export default {
  id: 'project-25-logging-trace-context-lite',
  title: "日志 Trace 最小集：为日志加入 trace_id",
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
    entry = {"ts": 1, "level": level, "service": service, "msg": msg, "trace": trace}
    return json.dumps(entry, separators=(",",":"))`
  },
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">Trace 上下文：为日志条目携带追踪标识</h3>
          <div class="space-y-8">
            <section>
              <div class="flex items-center gap-2 mb-3">
                <span class="bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 px-2 py-0.5 rounded text-xs font-bold">Targets</span>
                <h4 class="font-bold text-slate-700 dark:text-slate-200">章节目标与验收</h4>
              </div>
              <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                <li>使用 log_with_trace(level, service, msg, trace)。</li>
                <li>输出含 trace 字段的 JSON 行。</li>
              </ul>
            </section>
          </div>
        `,
  concepts: [
    { id: 'proj_trace_field', label: 'trace_id', type: 'project', desc: '日志携带追踪标识。' }
  ],
  code: `print("Trace: OK")`,
  quiz: [
    {
      type: 'code',
      question: "输出含 trace 字段的日志 JSON",
      initialCode: `import json
def log_with_trace(level, service, msg, trace):
    entry = {"ts": 1, "level": level, "service": service, "msg": msg, "trace": trace}
    print(json.dumps(entry, separators=(",",":")))`,
      expectedOutput: "{\"ts\":1,\"level\":\"info\",\"service\":\"orders\",\"msg\":\"created\",\"trace\":\"abc-123\"}",
      validationType: 'output',
      standardCode: `import json
def log_with_trace(level, service, msg, trace):
    entry = {"ts": 1, "level": level, "service": service, "msg": msg, "trace": trace}
    print(json.dumps(entry, separators=(",",":")))
log_with_trace("info","orders","created","abc-123")`
    }
  ]
}
