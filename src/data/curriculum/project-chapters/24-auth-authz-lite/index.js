export default {
  id: 'project-24-auth-authz-lite',
  title: "认证与授权最小集：令牌校验与角色边界",
  workspaceId: 'enterprise-lite',
  visibleFiles: [
    'requirements.txt',
    'app/main.py',
    'app/cli/entry.py',
    'app/config/loader.py',
    'app/config/validator.py',
    'app/logging/structured.py',
    'app/service/__init__.py',
    'app/auth/security.py'
  ],
  initialOpenFile: 'app/auth/security.py',
  workspaceDelta: {
    'app/auth/security.py': `def check_token(token):
    return isinstance(token, str) and len(token) >= 8
def authorize(role, required):
    return role == "admin" or role == required`
  },
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">认证与授权：入口校验与角色边界</h3>
          
          <div class="space-y-8">
            <section>
              <div class="flex items-center gap-2 mb-3">
                <span class="bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 px-2 py-0.5 rounded text-xs font-bold">Targets</span>
                <h4 class="font-bold text-slate-700 dark:text-slate-200">章节目标与验收</h4>
              </div>
              <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                <li>认证：令牌存在与有效性检查。</li>
                <li>授权：角色边界判定与拒绝策略。</li>
              </ul>
            </section>
            <section>
              <div class="flex items-center gap-2 mb-3">
                <span class="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded text-xs font-bold">Steps</span>
                <h4 class="font-bold text-slate-700 dark:text-slate-200">步骤清单</h4>
              </div>
              <ol class="text-sm text-slate-600 dark:text-slate-300 list-decimal pl-6">
                <li>编写 check_token(token)：非空与形态判断。</li>
                <li>编写 authorize(role, required)：边界判定。</li>
              </ol>
            </section>
            <section>
              <div class="flex items-center gap-2 mb-3">
                <span class="bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 px-2 py-0.5 rounded text-xs font-bold">Pitfalls</span>
                <h4 class="font-bold text-slate-700 dark:text-slate-200">常见误区</h4>
              </div>
              <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                <li>把认证与授权混在一起；应先认证再授权。</li>
                <li>以“角色字符串拼接”替代清晰边界；应集中在授权模块判定。</li>
              </ul>
            </section>
          </div>
        `,
  concepts: [
    { id: 'proj_auth_check', label: '认证', type: 'project', desc: '令牌存在与有效性。' },
    { id: 'proj_authz_boundary', label: '授权', type: 'project', desc: '角色边界与拒绝策略。' }
  ],
  code: `print("Auth: OK")`,
  quiz: [
    {
      type: 'code',
      question: "令牌有效打印 Valid",
      initialCode: `token = "abcdefgh"`,
      expectedOutput: "Valid",
      validationType: 'output',
      standardCode: `def check_token(token):
    if isinstance(token, str) and len(token) >= 8:
        print("Valid")
    else:
        print("Invalid")
token = "abcdefgh"
check_token(token)`,
      explanation: "最小认证：令牌存在且形态满足（演示用，生产应使用签名/JWT 等）。"
    },
    {
      type: 'code',
      question: "授权通过打印 Allow",
      initialCode: `role = "admin"
required = "user"`,
      expectedOutput: "Allow",
      validationType: 'output',
      standardCode: `def authorize(role, required):
    if role == "admin" or role == required:
        print("Allow")
    else:
        print("Deny")
role = "admin"
required = "user"
authorize(role, required)`,
      explanation: "最小授权：管理员放行；或与所需角色一致。"
    },
    {
      type: 'code',
      question: "授权拒绝打印 Deny",
      initialCode: `role = "guest"
required = "user"`,
      expectedOutput: "Deny",
      validationType: 'output',
      standardCode: `def authorize(role, required):
    if role == "admin" or role == required:
        print("Allow")
    else:
        print("Deny")
role = "guest"
required = "user"
authorize(role, required)`
    }
  ]
}
