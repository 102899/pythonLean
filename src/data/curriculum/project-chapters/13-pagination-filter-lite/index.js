export default {
  id: 'project-13-pagination-filter-lite',
  title: "列表与分页最小集：过滤、排序与分页",
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
    'app/service/pagination.py'
  ],
  initialOpenFile: 'app/service/pagination.py',
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">分页：过滤后排序并切片</h3>
          
          <div class="space-y-8">
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 px-2 py-0.5 rounded text-xs font-bold">Targets</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">章节目标与验收</h4>
                </div>
                <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                    <li>实现 paginate(data, page, size)。</li>
                    <li>先过滤再排序，最后分页。</li>
                </ul>
            </section>
          </div>
        `,
  concepts: [
    { id: 'proj_page_filter', label: '过滤', type: 'project', desc: '先过滤再排序。' },
    { id: 'proj_page_slice', label: '分页', type: 'project', desc: '按 page/size 切片。' }
  ],
  code: `print("Pagination: OK")`,
  quiz: [
    {
      type: 'code',
      question: "排序后分页并打印切片",
      initialCode: `data = [5,1,4,3,2]`,
      expectedOutput: "Page: [3,4]",
      validationType: 'output',
      standardCode: `data = [5,1,4,3,2]
def paginate(data, page, size):
    arr = sorted(data)
    start = (page - 1) * size
    end = start + size
    return arr[start:end]
print(f"Page: {paginate(data, 2, 2)}")`,
      explanation: "升序排序后按第二页、每页两个元素切片。"
    }
  ]
}
