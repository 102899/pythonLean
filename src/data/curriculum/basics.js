export const basics = {
    id: 'basics',
    title: '基础篇',
    chapters: [
        {
            id: 'basics-01-js-vs-python',
            title: "思维转变：JS 与 Python 的异同",
            learnContent: `
          <h3 class="text-xl font-bold mb-4 text-slate-800 dark:text-white">从 JavaScript 到 Python 的思维跃迁</h3>
          <div class="space-y-4 text-slate-600 dark:text-gray-300">
            <div class="bg-indigo-50 dark:bg-gray-800/50 p-4 rounded-lg border border-indigo-100 dark:border-white/5">
              <h4 class="font-bold text-indigo-600 dark:text-indigo-400 mb-2">0. 基础语法：注释与输出</h4>
              <p class="mb-2"><strong>注释：</strong> JS 使用 <code>//</code>，而 Python 使用 <code>#</code>。代码中的空行是为了可读性，会被 Python 解释器忽略。</p>
              <p><strong>输出：</strong> JS 使用 <code>console.log()</code>，而 Python 使用 <code>print()</code>。</p>
            </div>
            
            <p>作为一名前端开发者，你已经掌握了编程的核心概念。Python 和 JavaScript 在很多方面是相似的，但也有一些关键的区别。</p>
            
            <div class="bg-indigo-50 dark:bg-gray-800/50 p-4 rounded-lg border border-indigo-100 dark:border-white/5">
              <h4 class="font-bold text-indigo-600 dark:text-indigo-400 mb-2">1. 语法风格：花括号 vs 缩进</h4>
              <p>JS 使用 <code>{}</code> 来界定代码块，而 Python 强制使用<strong>缩进 (Indentation)</strong>。这使得 Python 代码看起来非常整洁，但也要求你必须严格遵守缩进规则。</p>
            </div>

            <div class="bg-indigo-50 dark:bg-gray-800/50 p-4 rounded-lg border border-indigo-100 dark:border-white/5">
              <h4 class="font-bold text-indigo-600 dark:text-indigo-400 mb-2">2. 变量声明</h4>
              <p>JS 需要 <code>var/let/const</code>。Python 不需要任何关键字，直接赋值即声明：<code>name = "Alice"</code>。</p>
            </div>

            <div class="bg-indigo-50 dark:bg-gray-800/50 p-4 rounded-lg border border-indigo-100 dark:border-white/5">
              <h4 class="font-bold text-indigo-600 dark:text-indigo-400 mb-2">3. 命名规范</h4>
              <p>JS 习惯使用 <code>camelCase</code> (userAge)，而 Python 推荐使用 <code>snake_case</code> (user_age)。</p>
            </div>
          </div>
        `,
            code: `# 1. 打印 Hello World
print("Hello from Python!")

# 2. 变量声明 (无需 var/let/const)
name = "前端工程师"
age = 25
print("用户:", name, ", 年龄:", age)

# 3. 代码块使用缩进 (Indentation) 而不是大括号 {}
if age > 18:
    print("Python 使用缩进来决定作用域！")
    print("仍然在 if 代码块内部。")

print("已经跳出 if 代码块了。")`,
            quiz: [
                {
                    type: 'code',
                    question: "请编写代码：使用 print 函数输出 Hello Python",
                    initialCode: "# Write your code here\n",
                    expectedOutput: "Hello Python",
                    validationType: 'output',
                    standardCode: "# Write your code here\nprint('Hello Python')",
                    explanation: "Python 使用 `print()` 函数将内容输出到控制台。注意字符串需要用引号 (单/双引号均可) 包裹。"
                },
                {
                    type: 'code',
                    question: "请编写代码：写一个单行注释，内容随意",
                    initialCode: "",
                    validationType: 'keyword',
                    requiredKeywords: ['#'],
                    standardCode: "# 这是一个注释",
                    explanation: "Python 使用井号 `#` 开头来表示单行注释。解释器会忽略 `#` 之后的所有内容。"
                },
                {
                    type: 'choice',
                    question: "Python 使用什么符号来表示单行注释？",
                    options: ["//", "#", "<!-- -->", "/* */"],
                    correctAnswer: "#"
                },
                {
                    type: 'choice',
                    question: "Python 中用于输出信息的函数是？",
                    options: ["console.log()", "print()", "echo()", "System.out.println()"],
                    correctAnswer: "print()"
                },
                {
                    type: 'choice',
                    question: "Python 使用什么来界定代码块的作用域？",
                    options: ["花括号 {}", "缩进 (Indentation)", "分号 ;", "关键字 end"],
                    correctAnswer: "缩进 (Indentation)"
                },
                {
                    type: 'choice',
                    question: "以下哪个是 Python 推荐的变量命名风格？",
                    options: ["camelCase (userAge)", "PascalCase (UserAge)", "snake_case (user_age)", "kebab-case (user-age)"],
                    correctAnswer: "snake_case (user_age)"
                },
                {
                    type: 'boolean',
                    question: "Python 声明变量时需要使用 var 或 let 关键字吗？",
                    options: ["需要", "不需要"],
                    correctAnswer: "不需要"
                }
            ]
        },
        {
            id: 'basics-02-core-syntax',
            title: "核心语法：变量、类型与 F-Strings",
            learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">JS &rarr; Python：核心语法对比速查</h3>
          
          <div class="space-y-8">
            
            <!-- 1. 变量与布尔值 -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">1. 变量声明与布尔值</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>let isActive = <span class="text-red-500">true</span>;
const uid = <span class="text-red-500">null</span>;</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>is_active = <span class="text-emerald-600 font-bold">True</span>
uid = <span class="text-emerald-600 font-bold">None</span></code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> Python 不需要 <code>let/const</code>；<code class="text-emerald-600">True/False/None</code> 首字母必须大写。
                </p>
            </section>

            <!-- 2. 字符串模版 -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">2. 字符串插值 (F-Strings)</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>const msg = <span class="text-red-500">\`Hello \${name}\`</span>;</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>msg = <span class="text-emerald-600 font-bold">f"Hello {name}"</span></code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 丢掉反引号！只需在引号前加 <code class="text-emerald-600 font-bold">f</code>，花括号内直接写变量。
                </p>
            </section>

            <!-- 3. 类型转换 -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">3. 类型转换</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>let n = Number("10");
let s = String(100);</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>n = <span class="text-emerald-600 font-bold">int("10")</span>
s = <span class="text-emerald-600 font-bold">str(100)</span></code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> Python 类型转换函数更简短：<code>int()</code>, <code>str()</code>, <code>float()</code>。
                </p>
            </section>
          </div>
        `,
            code: `# 1. 变量定义
username = "Frontend_Dev"
level = 99
is_verified = True  # Python 虽然是动态类型，但 bool 值首字母必须大写

# 2. F-Strings 实战
# 任务：使用 f-string 拼接出 "User: Frontend_Dev, Verified: True"
# 不再需要像 JS 那样写 \`User: \${username}...\`
info = f"User: {username}, Verified: {is_verified}"

print(info)

# 3. 类型转换演示
score_str = "100"
# total = score_str + 50      # ❌ 报错！JS 会拼成 "10050"，但 Python 禁止隐式转换
total = int(score_str) + 50   # ✅ 必须显式转为 int
print(f"Total Score: {total}")`,
            quiz: [
                {
                    type: 'code',
                    question: "请修复代码：修正 JS 风格的布尔值写法，并使用 f-string 输出结果",
                    initialCode: `is_admin = true  # ❌ JS style
user = "Admin"

# 请修复上面 boolean 错误，并取消下面注释，用 f-string 打印 "Admin access: True"
# print(...)`,
                    expectedOutput: "Admin access: True",
                    validationType: 'output',
                    standardCode: `is_admin = True  # ❌ JS style
user = "Admin"

# 请修复上面 boolean 错误，并取消下面注释，用 f-string 打印 "Admin access: True"
print(f"{user} access: {is_admin}")`,
                    explanation: "1. Python 的布尔值必须首字母大写 (`True` / `False`)。\n2. F-String 语法是 `f\"...{var}...\"`，花括号内直接填变量名。"
                },
                {
                    type: 'choice',
                    question: "在 Python 中，如何表示空值 (等同于 JS 的 null)？",
                    options: ["null", "nil", "None", "undefined"],
                    correctAnswer: "None"
                },
                {
                    type: 'choice',
                    question: "以下哪个是合法的 Python 布尔值？",
                    options: ["true", "True", "TRUE", "Boolean(1)"],
                    correctAnswer: "True"
                },
                {
                    type: 'code',
                    question: "实战：将 float 转换为 int",
                    initialCode: `price = 99.99
# 请将 price 转换为整数并赋值给 price_int (会向下取整)
price_int = ?
print(price_int)`,
                    expectedOutput: "99",
                    validationType: 'output',
                    standardCode: `price = 99.99
# 请将 price 转换为整数并赋值给 price_int (会向下取整)
price_int = int(price)
print(price_int)`,
                    explanation: "Python 是强类型语言，不会自动把 float 转 int (除了数学运算)。使用 `int()` 函数可以显式转换类型，同时会丢弃小数部分（向下取整）。"
                },
                {
                    type: 'boolean',
                    question: 'Python 中执行 `print("1" + 1)` 会像 JS 一样输出 "11" 吗？',
                    options: ["会", "不会 (报错)"],
                    correctAnswer: "不会 (报错)"
                }
            ]
        }
    ]
}
