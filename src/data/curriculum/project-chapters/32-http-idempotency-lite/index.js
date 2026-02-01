export default {
  id: 'project-32-http-idempotency-lite',
  title: "HTTP 幂等最小集：按键避免重复",
  workspaceId: 'enterprise-lite',
  visibleFiles: [
    'requirements.txt',
    'app/main.py',
    'app/service/idempotency.py',
    'app/http/idempotency.py'
  ],
  initialOpenFile: 'app/http/idempotency.py',
  workspaceDelta: {
    'app/http/idempotency.py': `def create_once(key, seen):
    if key in seen:
        return "Dup"
    seen.add(key)
    return "Created"`
  },
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">幂等：用键识别重复提交</h3>
          <div class="space-y-8">
            <section>
              <div class="flex items-center gap-2 mb-3">
                <span class="bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 px-2 py-0.5 rounded text-xs font-bold">Targets</span>
                <h4 class="font-bold text-slate-700 dark:text-slate-200">章节目标与验收</h4>
              </div>
              <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                <li>以幂等键识别重复请求。</li>
                <li>重复返回 Dup；首次返回 Created。</li>
              </ul>
            </section>
            <section>
              <div class="flex items-center gap-2 mb-3">
                <span class="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded text-xs font-bold">Steps</span>
                <h4 class="font-bold text-slate-700 dark:text-slate-200">步骤清单</h4>
              </div>
              <ol class="text-sm text-slate-600 dark:text-slate-300 list-decimal pl-6">
                <li>实现 create_once(key, seen)。</li>
                <li>集合记录已处理键并返回语义。</li>
              </ol>
            </section>
          </div>
        `,
  concepts: [
    { id: 'proj_http_idem', label: '幂等键', type: 'project', desc: '避免重复提交。' }
  ],
  code: `print("HTTP Idem: OK")`,
  quiz: [
    {
      type: 'code',
      question: "调用两次，第一次 Created、第二次 Dup",
      initialCode: `seen = set()`,
      expectedOutput: "Created\nDup",
      validationType: 'output',
      standardCode: `seen = set()
def create_once(key, seen):
    if key in seen:
        return "Dup"
    seen.add(key)
    return "Created"
print(create_once("abc", seen))
print(create_once("abc", seen))`
    }
  ]
}
