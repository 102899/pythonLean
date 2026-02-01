export default {
  id: 'project-16-list-response-contract-lite',
  title: "列表响应契约最小集：list、total、page、size",
  workspaceId: 'enterprise-lite',
  visibleFiles: [
    'requirements.txt',
    'app/main.py',
    'app/cli/entry.py',
    'app/config/loader.py',
    'app/config/validator.py',
    'app/logging/structured.py',
    'app/service/__init__.py',
    'app/service/idempotency.py',
    'app/common/response.py'
  ],
  initialOpenFile: 'app/common/response.py',
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">列表响应契约：统一字段与含义</h3>
          <div class="space-y-8">
            <section>
              <div class="flex items中心 gap-2 mb-3">
                <span class="bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 px-2 py-0.5 rounded text-xs font-bold">Targets</span>
                <h4 class="font-bold text-slate-700 dark:text-slate-200">章节目标与验收</h4>
              </div>
              <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                <li>统一 list/total/page/size 字段。</li>
              </ul>
            </section>
            <section>
              <div class="flex items-center gap-2 mb-3">
                <span class="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded text-xs font-bold">Steps</span>
                <h4 class="font-bold text-slate-700 dark:text-slate-200">步骤清单</h4>
              </div>
              <ol class="text-sm text-slate-600 dark:text-slate-300 list-decimal pl-6">
                <li>编写 list_envelope(items, page, size)。</li>
                <li>计算 total 并返回统一结构。</li>
              </ol>
            </section>
          </div>
        `,
  concepts: [
    { id: 'proj_list_contract', label: '契约', type: 'project', desc: 'list/total/page/size。' }
  ],
  code: `print("ListResp: OK")`,
  quiz: [
    {
      type: 'code',
      question: "构造统一列表响应 JSON",
      initialCode: `import json`,
      expectedOutput: "{\"code\":200,\"message\":\"ok\",\"data\":{\"list\":[1,2,3],\"total\":3,\"page\":1,\"size\":2}}",
      validationType: 'output',
      standardCode: `import json
def list_envelope(items, page, size):
    return {"code":200,"message":"ok","data":{"list":items,"total":len(items),"page":page,"size":size}}
print(json.dumps(list_envelope([1,2,3],1,2),separators=(",",":")))`
    }
  ]
}
