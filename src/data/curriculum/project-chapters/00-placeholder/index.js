export default {
  id: 'project-placeholder',
  title: "实战项目总览：需求、目标与路线图",
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">从 0→1：企业最小可用项目骨架</h3>
          
          <div class="space-y-8">
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">Requirements</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">商业项目需求（电商订单与库存服务）</h4>
                </div>
                <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                    <li>HTTP API：/health、/orders（创建订单）、/inventory/{sku}（查询库存）。</li>
                    <li>入口：main 统一启动；本地与生产行为一致。</li>
                    <li>配置：默认→文件→环境优先；严格类型校验（host:str、port:int）。</li>
                    <li>日志：单行 JSON；字段 ts/level/service/msg；级别 info/warn/error。</li>
                    <li>错误处理：业务失败返回 4xx；服务异常返回 5xx；统一响应包。</li>
                    <li>CLI：解析 host/port 等参数；支持本地启动与运维脚本。</li>
                </ul>
            </section>
            
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded text-xs font-bold">Goals</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">项目目标</h4>
                </div>
                <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                    <li>可维护骨架：清晰目录与模块边界。</li>
                    <li>可观测性：结构化日志可收集、索引与告警。</li>
                    <li>部署友好：环境变量优先覆盖，默认保证可用。</li>
                </ul>
            </section>
            
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 px-2 py-0.5 rounded text-xs font-bold">Roadmap</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">学习路线图（章节导览）</h4>
                </div>
                <ol class="text-sm text-slate-600 dark:text-slate-300 list-decimal pl-6">
                    <li>企业蓝图（目录结构/模块边界/入口统一）。</li>
                    <li>配置骨架（角色分离/分层策略/类型校验）。</li>
                    <li>日志骨架（字段决策/单行 JSON/级别聚合）。</li>
                </ol>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    完成以上三章后，你将具备一个能运行、能配置、能观测的最小企业项目。
                </p>
            </section>
          </div>
        `,
  code: `print("Overview: OK")`
}
