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
            concepts: [
                { id: 'py_print', label: 'print() 函数', type: 'concept', desc: 'Python 的输出函数，类似于 JS 的 console.log()。', refJs: 'console.log()' },
                { id: 'py_comment', label: '注释 (#)', type: 'syntax', desc: 'Python 使用井号 # 来编写单行注释，解释器会忽略井号后的内容。', refJs: '//' },
                { id: 'py_indent', label: '缩进 (作用域)', type: 'syntax', desc: 'Python 用缩进代替花括号来定义代码块作用域，这是最显著的区别之一。', refJs: '{ }' },
                { id: 'py_snake_case', label: '蛇形命名法', type: 'convention', desc: 'Python 推荐使用 snake_case 命名变量 (如 user_age)，而非 JS 的 camelCase。', refJs: 'camelCase' }
            ],
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
            concepts: [
                { id: 'py_bool_true', label: '布尔值 True/False', type: 'concept', desc: 'Python 的布尔值。注意首字母必须大写！', refJs: 'true / false' },
                { id: 'py_none', label: 'None 空值', type: 'concept', desc: 'Python 的空值对象，等同于 JS 的 null。', refJs: 'null' },
                { id: 'py_f_string', label: 'F-String 模板', type: 'feature', desc: '在引号前加 f，即可在花括号内嵌入变量，非常简洁！', refJs: '`${var}`' },
                { id: 'py_type_cast', label: '类型转换', type: 'approach', desc: 'Python 是强类型语言，需要显式使用 int()/str() 等函数转换类型。', refJs: 'Number() / String()' }
            ],
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
        },
        {
            id: 'basics-03-iteration-intro',
            title: "迭代入门：for、range、enumerate、len",
            learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">JS &rarr; Python：迭代入门速查</h3>
          
          <div class="space-y-8">
            
            <!-- 1. for 迭代 -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">1. for 迭代 (遍历序列)</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>const arr = ["A","B","C"];
arr.forEach(v => console.log(v));</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>arr = ["A","B","C"]
for v in arr:
    print(v)</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 用 <code>for ... in ...</code> 遍历可迭代对象，语义更直接。
                </p>
            </section>
            
            <!-- 2. range 计数循环 -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">2. 计数循环：range()</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>for (let i = 0; i &lt; 5; i++) {
  console.log(i);
}</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>for i in range(0, 5):
    print(i)</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> <code>range(start, stop, step)</code> 为<strong>半开区间</strong>，不包含 <code>stop</code>。
                </p>
            </section>
            
            <!-- 3. enumerate 获取索引 -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">3. 索引与值：enumerate()</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>arr.forEach((v, i) =&gt; console.log(i, v));</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>for i, v in enumerate(arr):
    print(i, v)</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> <code>enumerate()</code> 同时提供索引与值，避免手动维护 <code>i++</code>。
                </p>
            </section>
            
            <!-- 4. len 获取长度 -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">4. 获取长度：len()</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>arr.length</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>len(arr)</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 使用函数 <code>len()</code> 获取序列长度。
                </p>
            </section>
          </div>
        `,
            concepts: [
                { id: 'py_for', label: 'for 迭代', type: 'syntax', desc: '用 for ... in 遍历可迭代对象，语义清晰。', refJs: 'forEach / for...of' },
                { id: 'py_range', label: 'range 计数', type: 'feature', desc: '半开区间的计数序列，常用于索引或次数循环。', refJs: 'for (let i = ...)' },
                { id: 'py_enumerate', label: 'enumerate 获取索引', type: 'feature', desc: '同时获得索引与值，避免手动维护 i。', refJs: 'forEach((v, i) => ...)' },
                { id: 'py_len', label: 'len() 长度', type: 'function', desc: '获取序列的长度，替代 .length。', refJs: '.length' }
            ],
            code: `# 1. 基本迭代
items = ["A", "B", "C"]
for v in items:
    print(v)

# 2. 索引与值
for idx, val in enumerate(items):
    print(idx, val)

# 3. 计数循环
for i in range(1, 6):
    print(i)

# 4. 序列长度
print(len(items))`,
            quiz: [
                {
                    type: 'code',
                    question: "请用 enumerate 遍历列表并打印索引与值",
                    initialCode: `items = ["A","B","C"]
# 打印如下格式：
# 0 A
# 1 B
# 2 C
# 在下方补全代码
`,
                    expectedOutput: "0 A\n1 B\n2 C",
                    validationType: 'output',
                    standardCode: `items = ["A","B","C"]
# 打印如下格式：
# 0 A
# 1 B
# 2 C
# 在下方补全代码
for i, v in enumerate(items):
    print(i, v)`,
                    explanation: "使用 enumerate 获取 (索引, 值) 元组，避免手动维护计数变量。"
                },
                {
                    type: 'code',
                    question: "请打印 1 到 5，并输出序列长度",
                    initialCode: `nums = range(1, 6)
# 逐行打印 1 到 5
# 再打印长度
`,
                    expectedOutput: "1\n2\n3\n4\n5\n5",
                    validationType: 'output',
                    standardCode: `nums = range(1, 6)
# 逐行打印 1 到 5
# 再打印长度
for i in nums:
    print(i)
print(len(nums))`,
                    explanation: "range(1, 6) 生成 1..5 的半开区间序列，len(nums) 为 5。"
                },
                {
                    type: 'choice',
                    question: "range(0, 3) 是否包含 3？",
                    options: ["包含", "不包含"],
                    correctAnswer: "不包含"
                },
                {
                    type: 'choice',
                    question: "在 Python 中获取列表长度的正确方式是？",
                    options: ["arr.length", "len(arr)", "size(arr)", "arr.size"],
                    correctAnswer: "len(arr)"
                }
            ]
        },
        {
            id: 'basics-04-list-ops-lite',
            title: "列表操作最小集：append、pop、slice、len",
            learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">JS &rarr; Python：列表操作最小集</h3>
          
          <div class="space-y-8">
            
            <!-- 1. 追加元素 append -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">1. 追加元素：append()</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>const arr = ["A","B","C"];
arr.push("D");</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>arr = ["A","B","C"]
arr.append("D")</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> Python 使用 <code>list.append(x)</code> 追加到末尾。
                </p>
            </section>
            
            <!-- 2. 弹出元素 pop -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">2. 弹出元素：pop()</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>const last = arr.pop();</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>last = arr.pop()</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 两者语义一致，<code>pop()</code> 默认移除<strong>最后一个</strong>元素并返回它。
                </p>
            </section>
            
            <!-- 3. 切片 slice -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">3. 子数组：slice vs 切片</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>const sub = arr.slice(1, 4);</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>sub = arr[1:4]</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 切片 <code>arr[start:end]</code> 为半开区间，不包含 <code>end</code>。
                </p>
            </section>
            
            <!-- 4. 长度 len -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">4. 获取长度：len()</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>arr.length</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>len(arr)</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 使用函数 <code>len()</code> 获取列表长度。
                </p>
            </section>
          </div>
        `,
            concepts: [
                { id: 'py_append', label: 'append 追加', type: 'function', desc: 'list.append(x) 将元素追加到末尾。', refJs: 'Array.push' },
                { id: 'py_pop', label: 'pop 弹出', type: 'function', desc: 'list.pop() 默认移除最后一个元素并返回它。', refJs: 'Array.pop' },
                { id: 'py_slice', label: '切片 [start:end]', type: 'syntax', desc: '半开区间，不包含 end；拷贝出子列表。', refJs: 'Array.slice(start,end)' },
                { id: 'py_len_list', label: 'len() 长度', type: 'function', desc: '获取列表长度。', refJs: '.length' }
            ],
            code: `# 1. 追加与弹出
arr = ["A","B","C"]
arr.append("D")
last = arr.pop()
print(arr)      # ["A","B","C"]
print(last)     # "D"

# 2. 切片
nums = [1,2,3,4,5,6]
sub = nums[1:4]
print(sub)      # [2,3,4]

# 3. 长度
print(len(nums))`,
            quiz: [
                {
                    type: 'code',
                    question: "用 append 追加 'D'，再用 pop 弹出并按顺序打印：Popped 与 Final arr",
                    initialCode: `arr = ["A","B","C"]
# 步骤：
# 1) 追加 "D"
# 2) 弹出最后一个元素，并打印：Popped: <值>
# 3) 打印最终数组，并打印：Final arr: <数组>
`,
                    expectedOutput: "Popped: D\nFinal arr: ['A', 'B', 'C']",
                    validationType: 'output',
                    standardCode: `arr = ["A","B","C"]
# 步骤：
# 1) 追加 "D"
# 2) 弹出最后一个元素，并打印：Popped: <值>
# 3) 打印最终数组，并打印：Final arr: <数组>
arr.append("D")
last = arr.pop()
print(f"Popped: {last}")
print(f"Final arr: {arr}")`,
                    explanation: "list.append(x) 将元素追加到末尾；list.pop() 默认弹出最后一个元素并返回它；按顺序打印带文案的结果。"
                },
                {
                    type: 'code',
                    question: "使用切片得到子列表 [2,3,4]，先打印子列表，再打印长度",
                    initialCode: `nums = [1,2,3,4,5,6]
# 目标：先打印子列表 [2,3,4]，再打印它的长度
`,
                    expectedOutput: "[2, 3, 4]\n3",
                    validationType: 'output',
                    standardCode: `nums = [1,2,3,4,5,6]
# 目标：先打印子列表 [2,3,4]，再打印它的长度
sub = nums[1:4]
print(sub)
print(len(sub))`,
                    explanation: "切片 [start:end] 为半开区间，不包含 end；先打印子列表，再打印其长度。"
                },
                {
                    type: 'boolean',
                    question: "arr.pop() 默认是否移除最后一个元素？",
                    options: ["是", "否"],
                    correctAnswer: "是"
                },
                {
                    type: 'choice',
                    question: "在 Python 中获取 [2,3,4] 的正确语法是？",
                    options: ["arr.slice(1,4)", "arr[1:4]", "slice(arr,1,4)", "arr[1..4]"],
                    correctAnswer: "arr[1:4]"
                }
            ]
        },
        {
            id: 'basics-05-dict-lite',
            title: "字典入门最小集：keys、items、get、in",
            learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">JS &rarr; Python：字典入门最小集</h3>
          
          <div class="space-y-8">
            
            <!-- 1. 键、值、键值对 -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">1. keys / items 对照</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>const user = { name: "Alice", age: 25 };
Object.keys(user).forEach(k =&gt; console.log(k)); // Object.keys(user) → ["name","age"]；输出：name, age
Object.entries(user).forEach(([k, v]) =&gt; console.log(k, v)); // Object.entries(user) → [["name","Alice"],["age",25]]；输出：name Alice；age 25</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>user = { "name": "Alice", "age": 25 }
for k in user.keys():  # user.keys() → ["name","age"]；输出：name, age
    print(k)
for k, v in user.items():  # user.items() → [("name","Alice"),("age",25)]；输出：name Alice；age 25
    print(k, v)</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> <code>dict.keys()</code> 返回可迭代的键视图；<code>dict.items()</code> 返回 (键, 值) 二元组视图，便于遍历时同时拿到键和值。
                </p>
            </section>
            
            <!-- 2. 访问与更新 -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">2. 访问与更新</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>const user = { role: "user" };
user.role = "admin";</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>user = { "role": "user" }
user["role"] = "admin"</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 通过 <code>dict[key]</code> 访问或更新字段，与 JS 的点/中括号访问类似。
                </p>
            </section>
            
            <!-- 3. 成员测试 -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">3. 键是否存在：in</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>("age" in user) === true</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>"age" in user  # True</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> <code>in</code> 检查的是<strong>键</strong>是否存在，而不是值。
                </p>
            </section>
            
            <!-- 4. 安全访问 get -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">4. 默认值访问：get()</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>const score = user.score ?? 0;</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>score = user.get("score", 0)</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> <code>dict.get(key, default)</code> 在键缺失时返回默认值，避免 KeyError。
                </p>
            </section>
          </div>
        `,
            concepts: [
                { id: 'py_dict_items', label: 'items 键值对', type: 'feature', desc: '同时获取键和值，适合遍历输出。', refJs: 'Object.entries' },
                { id: 'py_dict_keys', label: 'keys 键集合', type: 'feature', desc: '返回所有键，可迭代。', refJs: 'Object.keys' },
                { id: 'py_dict_access_update', label: '访问与更新', type: 'syntax', desc: '通过 dict[key] 访问/更新字段。', refJs: 'obj.key / obj["key"]' },
                { id: 'py_dict_in', label: 'in 成员测试', type: 'syntax', desc: '用 in 检查键是否存在。', refJs: '\"key\" in obj' }
            ],
            code: `# 1. 遍历键值对
user = { "name": "Alice", "age": 25 }
for key, value in user.items():
    print(key, value)

# 2. 更新字段
profile = { "role": "user" }
profile["role"] = "admin"
print(profile["role"])

# 3. 键存在与默认值
print("age" in user)
print(user.get("score", 0))`,
            quiz: [
                {
                    type: 'code',
                    question: "使用 items 遍历并按文案打印键值：Key: <键>, Value: <值>",
                    initialCode: `user = { "name": "Alice", "age": 25 }
# 目标：
# 逐行打印：
# Key: name, Value: Alice
# Key: age, Value: 25
`,
                    expectedOutput: "Key: name, Value: Alice\nKey: age, Value: 25",
                    validationType: 'output',
                    standardCode: `user = { "name": "Alice", "age": 25 }
# 目标：
# 逐行打印：
# Key: name, Value: Alice
# Key: age, Value: 25
for key, value in user.items():
    print(f"Key: {key}, Value: {value}")`,
                    explanation: "dict.items() 返回 (键, 值) 二元组；按题面文案格式化输出。"
                },
                {
                    type: 'code',
                    question: "更新 role 为 admin，并按顺序打印三行文案",
                    initialCode: `user = { "name": "Alice", "role": "user" }
# 步骤：
# 1) 更新 role 为 "admin"，打印：Updated role: admin
# 2) 检查是否包含键 "age"，打印：Has age: <True/False>
# 3) 用 get 获取不存在的 score 默认 0，打印：Score: 0
`,
                    expectedOutput: "Updated role: admin\nHas age: False\nScore: 0",
                    validationType: 'output',
                    standardCode: `user = { "name": "Alice", "role": "user" }
# 步骤：
# 1) 更新 role 为 "admin"，打印：Updated role: admin
# 2) 检查是否包含键 "age"，打印：Has age: <True/False>
# 3) 用 get 获取不存在的 score 默认 0，打印：Score: 0
user["role"] = "admin"
print(f"Updated role: {user['role']}")
has_age = "age" in user
print(f"Has age: {has_age}")
score = user.get("score", 0)
print(f"Score: {score}")`,
                    explanation: "dict[key] 更新字段；\"key\" in dict 检查键存在；get(key, default) 提供安全默认值。"
                },
                {
                    type: 'choice',
                    question: "使用 dict.items() 遍历时每个元素的类型是？",
                    options: ["仅键", "仅值", "键值二元组", "字符串"],
                    correctAnswer: "键值二元组"
                },
                {
                    type: 'boolean',
                    question: "表达式 'age' in user 是检查值存在吗？",
                    options: ["是", "否（检查键）"],
                    correctAnswer: "否（检查键）"
                }
            ]
        },
        {
            id: 'basics-06-control-flow-lite',
            title: "控制流补充：while、break、continue",
            learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">JS &rarr; Python：控制流补充轻量版</h3>
          
          <div class="space-y-8">
            
            <!-- 1. while 循环 -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">1. while 循环</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>let n = 0;
while (n &lt; 3) {
  console.log(n);
  n++;
}</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>n = 0
while n &lt; 3:
    print(n)
    n += 1</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> Python 的 while 条件不需要小括号；用缩进界定代码块。Python 不支持 i++/n++，请用 i += 1 或 i -= 1 更新计数；同时设计清晰的退出条件并在循环体内维护它，避免死循环。
                </p>
            </section>
            
            <!-- 2. break 跳出 -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">2. break 跳出循环</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>for (const x of [1,2,3]) {
  if (x === 2) break;
  console.log(x);
}</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>for x in [1, 2, 3]:
    if x == 2:
        break
    print(x)</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> <code>break</code> 立即结束当前循环。
                </p>
            </section>
            
            <!-- 3. continue 跳过 -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">3. continue 跳过当前迭代</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>[1,2,3].forEach(x =&gt; {
  if (x % 2 === 0) return; // 模拟 continue
  console.log(x);
});</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>for x in [1, 2, 3]:
    if x % 2 == 0:
        continue
    print(x)</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> <code>continue</code> 跳过本次迭代，继续下一次。
                </p>
            </section>
          </div>
        `,
            concepts: [
                { id: 'py_while', label: 'while 循环', type: 'syntax', desc: '根据条件重复执行，需要维护退出条件。', refJs: 'while(...) { ... }' },
                { id: 'py_break', label: 'break 跳出', type: 'keyword', desc: '立即结束当前循环。', refJs: 'break' },
                { id: 'py_continue', label: 'continue 跳过', type: 'keyword', desc: '跳过本次迭代，继续下一次。', refJs: 'continue / return in forEach' },
                { id: 'py_exit_condition', label: '退出条件设计', type: 'approach', desc: '循环体内更新条件，避免死循环。', refJs: 'n++ / 计数更新' }
            ],
            code: `# 1. while 示例：打印 0,1,2
n = 0
while n < 3:
    print(n)
    n += 1

# 2. break 示例：打印到 1 即跳出
for x in [1, 2, 3]:
    if x == 2:
        break
    print(x)

# 3. continue 示例：跳过偶数，仅打印 1,3
for x in [1, 2, 3]:
    if x % 2 == 0:
        continue
    print(x)`,
            quiz: [
                {
                    type: 'code',
                    question: "使用 while 从 5 倒数到 1，最后打印 Done",
                    initialCode: `n = 5
# 目标：使用 while 每次减 1，打印 5 到 1
# 当 n 为 0 时停止，最后打印 "Done"
`,
                    expectedOutput: "5\n4\n3\n2\n1\nDone",
                    validationType: 'output',
                    standardCode: `n = 5
# 目标：使用 while 每次减 1，打印 5 到 1
# 当 n 为 0 时停止，最后打印 "Done"
while n > 0:
    print(n)
    n -= 1
print("Done")`,
                    explanation: "维护并更新退出条件 n>0；循环体内递减以避免死循环。"
                },
                {
                    type: 'code',
                    question: "用 continue 跳过偶数，仅打印奇数",
                    initialCode: `nums = [1,2,3,4,5]
# 目标：只打印奇数 1,3,5（使用 continue）
`,
                    expectedOutput: "1\n3\n5",
                    validationType: 'output',
                    standardCode: `nums = [1,2,3,4,5]
# 目标：只打印奇数 1,3,5（使用 continue）
for x in nums:
    if x % 2 == 0:
        continue
    print(x)`,
                    explanation: "遇到偶数时 continue 跳过本次迭代，不打印该元素。"
                },
                {
                    type: 'choice',
                    question: "关于 break 的描述正确的是？",
                    options: ["立即结束当前循环", "跳过当前一次迭代", "重置循环变量", "抛出异常"],
                    correctAnswer: "立即结束当前循环"
                },
                {
                    type: 'boolean',
                    question: "如下代码会成为死循环吗？\\n\\n n = 3\\n while n > 0:\\n     print(n)",
                    options: ["会", "不会"],
                    correctAnswer: "会"
                }
            ]
        },
        {
            id: 'basics-07-func-lite',
            title: "函数基础最小集：def、参数、return、调用",
            learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">JS &rarr; Python：函数基础轻量版</h3>
          
          <div class="space-y-8">
            
            <!-- 1. 定义与返回 -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">1. 定义与返回：def / return</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>function greet(name) {
  return "Hello, " + name;
}</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>def greet(name):
    return "Hello, " + name</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 用 <code>def</code> 定义函数，缩进构成函数体；<code>return</code> 返回值供调用方使用；<code>print</code> 仅输出文本，不替代 <code>return</code>。
                </p>
            </section>
            
            <!-- 2. 参数与调用 -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">2. 参数与调用</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>function formatName(first, last) {
  return first + " " + last;
}
console.log(formatName("Ada", "Lovelace"));</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>def format_name(first, last):
    return first + " " + last
print(format_name("Ada", "Lovelace"))</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 先定义函数，再传参调用；返回值可被 <code>print</code> 打印或继续参与运算。
                </p>
            </section>
            
            <!-- 3. 多参数示例 -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">3. 多参数与返回</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>function add(a, b) {
  return a + b;
}
console.log(add(3, 4)); // 7</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>def add(a, b):
    return a + b
print(add(3, 4))  # 7</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 函数可以接收多个参数并返回结果；返回值与 JS 一样是表达式的值。
                </p>
            </section>
          </div>
        `,
            concepts: [
                { id: 'py_def', label: 'def 定义函数', type: 'syntax', desc: 'def 名称(参数): 缩进构成函数体。', refJs: 'function fn(...) { ... }' },
                { id: 'py_return', label: 'return 返回值', type: 'syntax', desc: '将结果返回给调用方，区别于 print。', refJs: 'return' },
                { id: 'py_call', label: '函数调用', type: 'syntax', desc: '名称(参数) 调用函数，传入实参。', refJs: 'fn(args)' }
            ],
            code: `# 1) 定义并返回问候语
def greet(name):
    return "Hello, " + name
print(greet("Alice"))

# 2) 定义格式化姓名并打印
def format_name(first, last):
    return first + " " + last
print(format_name("Ada", "Lovelace"))

# 3) 两数相加
def add(a, b):
    return a + b
print(add(3, 4))`,
            quiz: [
                {
                    type: 'code',
                    question: "编写 add(a, b) 返回两数之和，并打印文案",
                    initialCode: `# 目标：
# 定义函数 add(a, b) 返回 a+b
# 调用并打印：Sum: 7
`,
                    expectedOutput: "Sum: 7",
                    validationType: 'output',
                    standardCode: `# 目标：
# 定义函数 add(a, b) 返回 a+b
# 调用并打印：Sum: 7
def add(a, b):
    return a + b
result = add(3, 4)
print(f"Sum: {result}")`,
                    explanation: "return 返回值供调用方使用；打印时用 f-string 拼接文案。"
                },
                {
                    type: 'code',
                    question: "编写 format_name(first, last) 返回 'first last' 并打印",
                    initialCode: `# 目标：
# 定义函数 format_name(first, last) 返回 'first last'
# 调用并打印：Full: Ada Lovelace
`,
                    expectedOutput: "Full: Ada Lovelace",
                    validationType: 'output',
                    standardCode: `# 目标：
# 定义函数 format_name(first, last) 返回 'first last'
# 调用并打印：Full: Ada Lovelace
def format_name(first, last):
    return first + " " + last
full = format_name("Ada", "Lovelace")
print(f"Full: {full}")`,
                    explanation: "定义函数并返回值，再在调用处打印明确文案。"
                },
                {
                    type: 'choice',
                    question: "下列关于 print 与 return 的说法正确的是？",
                    options: ["print 输出文本，return 返回值", "return 用于打印文本", "print 等同于 return", "二者无区别"],
                    correctAnswer: "print 输出文本，return 返回值"
                },
                {
                    type: 'boolean',
                    question: "函数执行到 return 后会继续执行后续语句吗？",
                    options: ["会", "不会"],
                    correctAnswer: "不会"
                }
            ]
        },
        {
            id: 'basics-08-string-lite',
            title: "字符串方法最小集：strip、lower、split、join",
            learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">JS &rarr; Python：字符串方法轻量版</h3>
          
          <div class="space-y-8">
            
            <!-- 1. 去除首尾空白 strip -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">1. 去除首尾空白：strip()</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>const s = "  Hello  ";
console.log(s.trim());</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>s = "  Hello  "
print(s.strip())</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> <code>trim()</code> 在 JS 中去除首尾空白；Python 用 <code>strip()</code> 完成相同效果。
                </p>
            </section>
            
            <!-- 2. 大小写转换 lower/upper -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">2. 大小写转换：lower()</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>const t = "MiXeD";
console.log(t.toLowerCase());</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>t = "MiXeD"
print(t.lower())</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> JS 的 <code>toLowerCase()</code>/<code>toUpperCase()</code> 对应 Python 的 <code>.lower()</code>/<code>.upper()</code>。
                </p>
            </section>
            
            <!-- 3. 分割与拼接 split / join -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">3. 分割与拼接：split() / join()</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>const text = "a b c";
const arr = text.split(" ");
console.log(arr);      // ["a","b","c"]
console.log(arr.join("-")); // "a-b-c"</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>text = "a b c"
parts = text.split(" ")
print(parts)           # ["a", "b", "c"]
print("-".join(parts)) # "a-b-c"</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> Python 的 <code>join()</code> 在<strong>分隔符字符串</strong>上调用：<code>"-".join(list)</code>；JS 则在数组上调用：<code>list.join("-")</code>。
                </p>
            </section>
          </div>
        `,
            concepts: [
                { id: 'py_strip', label: 'strip 去空白', type: 'method', desc: '去除首尾空白字符。', refJs: 'trim()' },
                { id: 'py_lower', label: 'lower 小写化', type: 'method', desc: '转换为小写；upper 为大写。', refJs: 'toLowerCase/toUpperCase' },
                { id: 'py_split', label: 'split 分割', type: 'method', desc: '按分隔符切分为列表。', refJs: 'split' },
                { id: 'py_join', label: 'join 拼接', type: 'method', desc: '在分隔符字符串上调用进行拼接。', refJs: 'Array.join' }
            ],
            code: `# 1) strip 去除首尾空白
s = "  Hello World  "
print(s.strip())

# 2) lower 小写化
t = "MiXeD"
print(t.lower())

# 3) split 分割 + join 拼接
text = "a b c"
parts = text.split(" ")
print(parts)
joined = "-".join(parts)
print(joined)`,
            quiz: [
                {
                    type: 'code',
                    question: "去除首尾空白并打印文案",
                    initialCode: `s = "  Hello World  "
# 目标：
# 去除首尾空白
# 打印：Stripped: Hello World
`,
                    expectedOutput: "Stripped: Hello World",
                    validationType: 'output',
                    standardCode: `s = "  Hello World  "
# 目标：
# 去除首尾空白
# 打印：Stripped: Hello World
print(f"Stripped: {s.strip()}")`,
                    explanation: "strip() 去除首尾空白；按题面文案输出。"
                },
                {
                    type: 'code',
                    question: "分割并拼接打印明确文案",
                    initialCode: `s = "a,b,c"
# 目标：
# 1) 将字符串按逗号分割得到列表
# 2) 用加号作为分隔符拼接成字符串
# 3) 打印：Joined: a+b+c
`,
                    expectedOutput: "Joined: a+b+c",
                    validationType: 'output',
                    standardCode: `s = "a,b,c"
# 目标：
# 1) 将字符串按逗号分割得到列表
# 2) 用加号作为分隔符拼接成字符串
# 3) 打印：Joined: a+b+c
parts = s.split(",")
joined = "+".join(parts)
print(f"Joined: {joined}")`,
                    explanation: "在分隔符字符串上调用 join；顺序打印明确文案。"
                },
                {
                    type: 'choice',
                    question: "在 Python 中正确的 join 用法是？",
                    options: ["arr.join('-')", "'-'.join(arr)", "join('-', arr)", "arr.join()"],
                    correctAnswer: "'-'.join(arr)"
                },
                {
                    type: 'boolean',
                    question: "strip() 是否默认同时去除前后空白？",
                    options: ["是", "否"],
                    correctAnswer: "是"
                }
            ]
        },
        {
            id: 'basics-09-number-lite',
            title: "数字与转换最小集：int、float、str、除法",
            learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">JS &rarr; Python：数字与类型转换轻量版</h3>
          
          <div class="space-y-8">
            
            <!-- 1. 类型转换：int / float / str -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">1. 类型转换：int / float / str</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>Number("10.5")  // 10.5
String(10)      // "10"
parseInt("42", 10) // 42</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>float("10.5")   # 10.5
str(10)         # "10"
int("42")       # 42</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 字符串与数字的互转：<code>int()</code>、<code>float()</code>、<code>str()</code>。
                </p>
            </section>
            
            <!-- 2. 除法与整除：/ vs // -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">2. 除法与整除：/ vs //</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>7 / 2           // 3.5
Math.floor(7/2) // 3</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>7 / 2   # 3.5
7 // 2  # 3</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> <code>/</code> 返回浮点；用 <code>//</code> 执行向下取整的整除。
                </p>
            </section>
            
            <!-- 3. 取模：% -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">3. 余数：%</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>7 % 3 // 1</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>7 % 3  # 1</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> <code>%</code> 计算余数；常与 <code>//</code> 搭配得到商与余数。
                </p>
            </section>
          </div>
        `,
            concepts: [
                { id: 'py_cast', label: '类型转换', type: 'syntax', desc: 'int/float/str 在字符串与数字间转换。', refJs: 'Number/parseInt/String' },
                { id: 'py_division', label: '/ 浮点除法', type: 'syntax', desc: '/ 返回浮点结果。', refJs: 'a/b' },
                { id: 'py_floor_div', label: '// 整除', type: 'syntax', desc: '向下取整的整除。', refJs: 'Math.floor(a/b)' },
                { id: 'py_mod', label: '% 取模', type: 'syntax', desc: '计算余数。', refJs: '%' }
            ],
            code: `# 1) 类型转换
print(int("42"))    # 42
print(float("10.5"))# 10.5
print(str(10))      # "10"

# 2) 除法与整除
a, b = 7, 2
print(a / b)   # 3.5
print(a // b)  # 3

# 3) 取模
print(a % b)   # 1`,
            quiz: [
                {
                    type: 'code',
                    question: "将字符串转换为整数并打印明确文案",
                    initialCode: `s = "42"
# 目标：
# 将 s 转换为整数
# 打印：Parsed: 42
`,
                    expectedOutput: "Parsed: 42",
                    validationType: 'output',
                    standardCode: `s = "42"
# 目标：
# 将 s 转换为整数
# 打印：Parsed: 42
n = int(s)
print(f"Parsed: {n}")`,
                    explanation: "使用类型转换获得整数，再按题面文案打印。"
                },
                {
                    type: 'code',
                    question: "计算 7 除以 3 的商与余数并按顺序打印",
                    initialCode: `a, b = 7, 3
# 目标：
# 逐行打印：
# Quotient: 2
# Remainder: 1
`,
                    expectedOutput: "Quotient: 2\nRemainder: 1",
                    validationType: 'output',
                    standardCode: `a, b = 7, 3
# 目标：
# 逐行打印：
# Quotient: 2
# Remainder: 1
q = a // b
r = a % b
print(f"Quotient: {q}")
print(f"Remainder: {r}")`,
                    explanation: "// 为整除得到商；% 为取模得到余数。"
                },
                {
                    type: 'choice',
                    question: "在 Python 中进行向下取整除法的正确写法是？",
                    options: ["a // b", "int(a / b)", "a / b", "floor(a, b)"],
                    correctAnswer: "a // b"
                },
                {
                    type: 'boolean',
                    question: "表达式 7/2 在 Python 是否返回浮点数？",
                    options: ["是", "否"],
                    correctAnswer: "是"
                }
            ]
        },
        {
            id: 'basics-10-list-comp-lite',
            title: "列表推导轻量版：变换、过滤、组合",
            learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">JS &rarr; Python：列表推导轻量版</h3>
          
          <div class="space-y-8">
            
            <!-- 1. 变换 (map) -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">1. 变换：map ↔ 列表推导</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>const nums = [1,2,3];
const doubled = nums.map(x =&gt; x * 2);
console.log(doubled); // [2,4,6]</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>nums = [1,2,3]
doubled = [x * 2 for x in nums]
print(doubled)  # [2,4,6]</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 列表推导将“遍历 + 变换”写在一行，更紧凑但语义清晰；放在最前面的表达式（这里是 <code>x * 2</code>）表示“新列表每个元素的值”。表达式中使用的变量（如 <code>x</code>）来自后侧的 <code>for x in ...</code> 绑定。
                </p>
            </section>
            
            <!-- 2. 过滤 (filter) -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">2. 过滤：filter ↔ 条件子句</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>const nums = [1,2,3];
const even = nums.filter(x =&gt; x % 2 === 0);
console.log(even); // [2]</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>nums = [1,2,3]
even = [x for x in nums if x % 2 == 0]
print(even)  # [2]</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 条件子句写在遍历之后，表达“筛选后保留”；推荐按“从右到左”的阅读顺序理解：先 <code>for</code> 再 <code>if</code>，最后看最前面的表达式生成元素值。
                </p>
            </section>
            
            <!-- 3. 组合：变换 + 过滤 -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">3. 组合：变换 + 过滤</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>const names = ["Ada", "Grace", "Linus"];
const upperShort = names
  .filter(n =&gt; n.length &lt;= 5)
  .map(n =&gt; n.toUpperCase());
console.log(upperShort); // ["ADA","GRACE","LINUS"]</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>names = ["Ada", "Grace", "Linus"]
upper_short = [n.upper() for n in names if len(n) <= 5]
print(upper_short)  # ["ADA","GRACE","LINUS"]</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 列表推导可同时表达“筛选 + 变换”，等价于链式 filter + map。
                </p>
            </section>
            
            <!-- 4. 阅读顺序与心智模型 -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">Guide</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">4. 阅读顺序与等价写法</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python 列表推导</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>nums = [1,2,3,4,5]
result = [x*x for x in nums if x % 2 == 0]
print(result)  # [4, 16]</code></pre>
                    </div>
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-l border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">等价 for+append 写法</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>nums = [1,2,3,4,5]
result = []
for x in nums:
    if x % 2 == 0:
        result.append(x*x)
console.log(result) // JS 思维的等价心智模型</code></pre>
                    </div>
                </div>
                <div class="mt-2 text-xs text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/50 p-2 rounded space-y-1">
                    <div><strong>阅读顺序：</strong>推荐从右到左：① 先 <code>for x in nums</code>（遍历来源）→ ② 再 <code>if</code>（过滤保留）→ ③ 最后看最前面的表达式（生成新元素值）。</div>
                    <div><strong>变量来源：</strong>前置表达式中的变量由后侧 <code>for</code> 子句提供；理解为“先绑定变量，再用变量计算新值”。</div>
                    <div><strong>适用场景：</strong>专用于“构造新列表”的场景（遍历 → 可选过滤 → 纯表达式变换）；不是通用控制流。</div>
                    <div><strong>实践建议：</strong>逻辑复杂或需要多语句/副作用时，请使用常规 <code>for</code>；列表推导更适合纯变换/筛选。</div>
                </div>
            </section>
          </div>
        `,
            concepts: [
                { id: 'py_list_comp', label: '列表推导', type: 'syntax', desc: '紧凑语法表达遍历与生成新列表。', refJs: 'map/filter 链' },
                { id: 'py_list_comp_transform', label: '变换', type: 'approach', desc: '将元素映射为新值生成列表。', refJs: 'map' },
                { id: 'py_list_comp_filter', label: '过滤', type: 'approach', desc: '保留满足条件的元素。', refJs: 'filter' },
                { id: 'py_list_comp_reading', label: '阅读顺序（右→左）', type: 'approach', desc: '先 for，再 if，最后表达式生成值。', refJs: 'filter→map 心智模型' }
            ],
            code: `# 1) 变换
nums = [1,2,3]
doubled = [x * 2 for x in nums]
print(doubled)

# 2) 过滤
even = [x for x in nums if x % 2 == 0]
print(even)

# 3) 组合
names = ["Ada", "Grace", "Linus"]
upper_short = [n.upper() for n in names if len(n) <= 5]
print(upper_short)

# 4) 等价 for+append 写法（心智模型）
nums = [1,2,3,4,5]
res = []
for x in nums:
    if x % 2 == 0:
        res.append(x*x)
print(res)`,
            quiz: [
                {
                    type: 'code',
                    question: "生成偶数的平方列表并打印明确文案",
                    initialCode: `nums = [1,2,3,4,5]
# 目标：
# 仅保留偶数并生成它们的平方
# 打印：Result: [4, 16]
`,
                    expectedOutput: "Result: [4, 16]",
                    validationType: 'output',
                    standardCode: `nums = [1,2,3,4,5]
# 目标：
# 仅保留偶数并生成它们的平方
# 打印：Result: [4, 16]
result = [x*x for x in nums if x % 2 == 0]
print(f"Result: {result}")`,
                    explanation: "先筛选偶数，再变换为平方；按题面文案输出。"
                },
                {
                    type: 'code',
                    question: "筛选长度不小于 3 的名字并转为大写打印",
                    initialCode: `names = ["ada", "bob", "al", "grace"]
# 目标：
# 保留长度不小于 3 的名字并转为大写
# 打印：Names: ['ADA', 'BOB', 'GRACE']
`,
                    expectedOutput: "Names: ['ADA', 'BOB', 'GRACE']",
                    validationType: 'output',
                    standardCode: `names = ["ada", "bob", "al", "grace"]
# 目标：
# 保留长度不小于 3 的名字并转为大写
# 打印：Names: ['ADA', 'BOB', 'GRACE']
res = [n.upper() for n in names if len(n) >= 3]
print(f"Names: {res}")`,
                    explanation: "条件用于筛选，表达式用于变换；不在题面注释中给语法暗示。"
                },
                {
                    type: 'choice',
                    question: "在列表推导中，过滤条件应写在何处？",
                    options: ["遍历 for 子句之前", "遍历 for 子句之后", "列表之外", "函数内部"],
                    correctAnswer: "遍历 for 子句之后"
                },
                {
                    type: 'boolean',
                    question: "列表推导是否可替代简单的 for+append 写法？",
                    options: ["是", "否"],
                    correctAnswer: "是"
                }
            ]
        },
        {
            id: 'basics-11-boolean-logic-lite',
            title: "布尔与逻辑最小集：比较、and、or、not",
            learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">JS &rarr; Python：布尔与逻辑轻量版</h3>
          
          <div class="space-y-8">
            
            <!-- 1. 比较运算 -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">1. 比较：==、!=、>、>=</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>3 === 3 // true
"3" === 3 // false
3 &gt; 2 // true</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>3 == 3    # True
"3" == 3   # False
3 &gt; 2     # True</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 用 <code>==</code> 比较值；Python 不存在 <code>===</code>，比较数字与字符串时都使用 <code>==</code>。
                </p>
            </section>
            
            <!-- 2. 逻辑运算 -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">2. 逻辑：and、or、not</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>true &amp;&amp; false // false
true || false // true
!true // false</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>True and False  # False
True or False   # True
not True        # False</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> JS 的 <code>&amp;&amp;/||/!</code> 对应 Python 的 <code>and/or/not</code>。
                </p>
            </section>
            
            <!-- 3. 真值语义 -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">3. 真值：空值与空容器</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>Boolean("") // false
Boolean(0) // false
Boolean([]) // true</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>bool("")   # False
bool(0)    # False
bool([])   # False
bool(None) # False</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> Python 中空字符串、0、None、空容器（[], {}, set()）为 False；非空为 True。
                </p>
            </section>
          </div>
        `,
            concepts: [
                { id: 'py_compare', label: '比较运算', type: 'syntax', desc: '==、!=、>、>=；用于值比较。', refJs: '===、!==、>、>=' },
                { id: 'py_logic', label: '逻辑运算', type: 'syntax', desc: 'and、or、not 对应 &&、||、!。', refJs: '&& || !' },
                { id: 'py_truthy', label: '真值语义', type: 'approach', desc: '空值/空容器为 False；其余通常为 True。', refJs: 'Boolean()' }
            ],
            code: `# 1) 比较
print(3 == 3)      # True
print("3" == 3)    # False

# 2) 逻辑
active = True
score = 75
print(active and score >= 60)  # True
print(not active)              # False

# 3) 真值
print(bool(""))     # False
print(bool([1]))    # True`,
            quiz: [
                {
                    type: 'code',
                    question: "组合条件打印访问结果",
                    initialCode: `user = { "role": "admin", "active": True }
# 目标：
# 当 role 为 "admin" 且 active 为 True，打印：Access
# 否则打印：Denied
`,
                    expectedOutput: "Access",
                    validationType: 'output',
                    standardCode: `user = { "role": "admin", "active": True }
# 目标：
# 当 role 为 "admin" 且 active 为 True，打印：Access
# 否则打印：Denied
if user["role"] == "admin" and user["active"]:
    print("Access")
else:
    print("Denied")`,
                    explanation: "使用 and 组合两个条件；满足则打印 Access。"
                },
                {
                    type: 'code',
                    question: "判断空字符串（去除首尾空白后）并打印文案",
                    initialCode: `text = "  "
# 目标：
# 去除首尾空白后如果为空字符串，打印：Empty
# 否则打印：Not Empty
`,
                    expectedOutput: "Empty",
                    validationType: 'output',
                    standardCode: `text = "  "
# 目标：
# 去除首尾空白后如果为空字符串，打印：Empty
# 否则打印：Not Empty
if not text.strip():
    print("Empty")
else:
    print("Not Empty")`,
                    explanation: "strip 去除空白；not 用于判断空字符串的布尔值为 False。"
                },
                {
                    type: 'choice',
                    question: "Python 中逻辑与/或/非分别对应的是？",
                    options: ["&& / || / !", "and / or / not", "& / | / ~", "AND / OR / NOT"],
                    correctAnswer: "and / or / not"
                },
                {
                    type: 'boolean',
                    question: "Python 是否存在严格相等运算符 ===？",
                    options: ["存在", "不存在"],
                    correctAnswer: "不存在"
                }
            ]
        },
        {
            id: 'basics-12-branching-lite',
            title: "条件与分支最小集：if、elif、else、条件表达式",
            learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">JS &rarr; Python：条件与分支轻量版</h3>
          
          <div class="space-y-8">
            
            <!-- 1. if / elif / else -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">1. 分支：if、elif、else</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>const score = 85;
if (score &gt;= 90) {
  console.log("A");
} else if (score &gt;= 60) {
  console.log("B");
} else {
  console.log("C");
}</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>score = 85
if score &gt;= 90:
    print("A")
elif score &gt;= 60:
    print("B")
else:
    print("C")</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 使用 <code>elif</code> 表达“否则如果”；缩进界定代码块，无需小括号。
                </p>
            </section>
            
            <!-- 2. 条件表达式 -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">2. 条件表达式：A if 条件 else B</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>const isAdmin = true;
const label = isAdmin ? "Admin" : "User";
console.log(label);</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>is_admin = True
label = "Admin" if is_admin else "User"
print(label)</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 条件表达式写作 <code>A if 条件 else B</code>，适用于简单的二选一赋值。
                </p>
            </section>
            
            <!-- 3. or 默认值选择 -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">3. 默认值：or 选择备选</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>const inputName = "";
const name = inputName || "Guest";
console.log("Hi, " + name);</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>input_name = ""
name = input_name or "Guest"
print(f"Hi, {name}")</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> <code>or</code> 可用于选择默认值；在 Python 中空字符串的布尔值为 <code>False</code>（例如 <code>bool("")</code> 为 <code>False</code>），因此当左值为空字符串时会选择右侧默认值。
                </p>
            </section>
          </div>
        `,
            concepts: [
                { id: 'py_ifelif', label: '条件分支', type: 'syntax', desc: 'if/elif/else 表达多分支。', refJs: 'if/else if/else' },
                { id: 'py_condexpr', label: '条件表达式', type: 'syntax', desc: 'A if 条件 else B。', refJs: '条件 ? A : B' },
                { id: 'py_default', label: '默认值选择', type: 'approach', desc: '用 or 选择默认值。', refJs: '|| 默认值' }
            ],
            code: `# 1) if/elif/else
score = 85
if score >= 90:
    print("A")
elif score >= 60:
    print("B")
else:
    print("C")

# 2) 条件表达式
is_admin = True
label = "Admin" if is_admin else "User"
print(label)

# 3) 默认值选择
input_name = ""
name = input_name or "Guest"
print(f"Hi, {name}")`,
            quiz: [
                {
                    type: 'code',
                    question: "根据分数打印等级",
                    initialCode: `score = 95
# 目标：
# 分数 >= 90 打印 A；60-89 打印 B；否则打印 C
`,
                    expectedOutput: "A",
                    validationType: 'output',
                    standardCode: `score = 95
# 目标：
# 分数 >= 90 打印 A；60-89 打印 B；否则打印 C
if score >= 90:
    print("A")
elif score >= 60:
    print("B")
else:
    print("C")`,
                    explanation: "用 if/elif/else 表达多分支。"
                },
                {
                    type: 'code',
                    question: "为用户名设置默认值并打印问候",
                    initialCode: `input_name = ""
# 目标：
# 当输入为空字符串时，使用默认值 "Guest"，打印：Hi, Guest
`,
                    expectedOutput: "Hi, Guest",
                    validationType: 'output',
                    standardCode: `input_name = ""
# 目标：
# 当输入为空字符串时，使用默认值 "Guest"，打印：Hi, Guest
name = input_name or "Guest"
print(f"Hi, {name}")`,
                    explanation: "空字符串的布尔值为 False，因而 or 会选择右侧默认值。"
                }
            ]
        },
        {
            id: 'basics-13-string-search-replace-lite',
            title: "字符串查找与替换最小集：in、find、startswith/endswith、replace",
            learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">JS &rarr; Python：字符串查找与替换轻量版</h3>
          
          <div class="space-y-8">
            
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">1. 子串判断：in ↔ includes</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>"hello world".includes("world") // true</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>"world" in "hello world"  # True</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 用 <code>in</code> 判断是否包含子串，返回布尔值。
                </p>
            </section>
            
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">2. 索引查找：find ↔ indexOf</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>"hello".indexOf("lo") // 3
"hello".indexOf("x") // -1</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>"hello".find("lo")  # 3
"hello".find("x")   # -1</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> <code>find</code> 返回索引或 <code>-1</code>；找不到不报错，常用于安全索引查找。
                </p>
            </section>
            
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">3. 前后缀匹配：startswith / endswith</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>"file.py".endsWith(".py") // true
"file.py".startsWith("fi") // true</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>"file.py".endswith(".py")  # True
"file.py".startswith("fi") # True</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 前缀用 <code>startswith</code>；后缀用 <code>endswith</code>。
                </p>
            </section>
            
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">4. 替换：replace</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>"2024-01-01".replace("-", "/") // "2024/01/01"</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>"2024-01-01".replace("-", "/")  # "2024/01/01"</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> <code>replace</code> 进行字符替换并返回新字符串。
                </p>
            </section>
          </div>
        `,
            concepts: [
                { id: 'py_in_sub', label: '子串判断', type: 'syntax', desc: 'in 判断是否包含子串。', refJs: 'includes' },
                { id: 'py_find_idx', label: '索引查找', type: 'function', desc: 'find 返回索引或 -1。', refJs: 'indexOf' },
                { id: 'py_prefix_suffix', label: '前后缀匹配', type: 'method', desc: 'startswith/endswith 前/后缀判断。', refJs: 'startsWith/endsWith' },
                { id: 'py_replace', label: '替换', type: 'method', desc: 'replace 返回新字符串。', refJs: 'replace' }
            ],
            code: `# 判断与查找
print("world" in "hello world")   # True
print("hello".find("x"))          # -1

# 前后缀与替换
print("file.py".endswith(".py"))  # True
print("2024-01-01".replace("-", "/"))  # "2024/01/01"`,
            quiz: [
                {
                    type: 'code',
                    question: "判断后缀并打印类型",
                    initialCode: `dom = "app.example.com"
# 目标：
# 若以 ".com" 结尾，打印：Type: com
# 否则打印：Type: other
`,
                    expectedOutput: "Type: com",
                    validationType: 'output',
                    standardCode: `dom = "app.example.com"
# 目标：
# 若以 ".com" 结尾，打印：Type: com
# 否则打印：Type: other
if dom.endswith(".com"):
    print("Type: com")
else:
    print("Type: other")`,
                    explanation: "endswith 判断后缀；按题面文案输出。"
                },
                {
                    type: 'code',
                    question: "替换占位符并打印问候语",
                    initialCode: `text = "Hello, NAME"
name = "Ada"
# 目标：
# 将 NAME 替换为变量值，打印：Greeting: Hello, Ada
`,
                    expectedOutput: "Greeting: Hello, Ada",
                    validationType: 'output',
                    standardCode: `text = "Hello, NAME"
name = "Ada"
# 目标：
# 将 NAME 替换为变量值，打印：Greeting: Hello, Ada
res = text.replace("NAME", name)
print(f"Greeting: {res}")`,
                    explanation: "replace 返回新字符串；配合变量形成最终输出。"
                },
                {
                    type: 'choice',
                    question: "检查字符串是否以某前缀开头的函数是？",
                    options: ["startswith()", "endswith()", "find()", "index()"],
                    correctAnswer: "startswith()"
                }
            ]
        },
        {
            id: 'basics-14-list-sort-search-lite',
            title: "列表排序与检索最小集：sorted、reversed、key、index、count",
            learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">JS &rarr; Python：列表排序与检索轻量版</h3>
          
          <div class="space-y-8">
            
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">1. 排序：sorted ↔ sort(compare)</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>[3,1,2].sort((a,b) =&gt; a - b) // [1,2,3]</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>nums = [3,1,2]
print(sorted(nums))  # [1,2,3]</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> <code>sorted</code> 返回新列表；原列表不变。
                </p>
            </section>
            
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">2. 定制排序：key</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>["Bob","alice"].sort((a,b) =&gt; a.toLowerCase().localeCompare(b.toLowerCase()))</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>names = ["Bob","alice"]
print(sorted(names, key=str.lower))  # ['alice','Bob']</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 用 <code>key</code> 指定排序依据，如 <code>len</code> 或 <code>str.lower</code>。
                </p>
            </section>
            
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">3. 反转：reversed ↔ reverse</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>[1,2,3].reverse() // [3,2,1]</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>print(list(reversed([1,2,3])))  # [3,2,1]</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> <code>reversed</code> 返回迭代器；如需列表可用 <code>list(...)</code> 包裹。
                </p>
            </section>
            
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">4. 检索：index / count</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>["a","b","a"].indexOf("a") // 0
["a","b","a"].filter(x =&gt; x === "a").length // 2</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>lst = ["a","b","a"]
print(lst.index("a"))  # 0
print(lst.count("a"))  # 2</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> <code>index</code> 返回首个匹配的索引；<code>count</code> 统计出现次数。
                </p>
            </section>
          </div>
        `,
            concepts: [
                { id: 'py_sorted', label: '排序', type: 'function', desc: 'sorted 返回新列表；key 定制排序。', refJs: 'sort(compare)' },
                { id: 'py_reversed', label: '反转', type: 'function', desc: 'reversed 返回迭代器；list(...) 转列表。', refJs: 'reverse' },
                { id: 'py_index_count', label: '检索', type: 'method', desc: 'index 找首个索引；count 统计次数。', refJs: 'indexOf / filter计数' }
            ],
            code: `# 排序与反转
nums = [3,1,2]
print(sorted(nums))
names = ["grace","Bob","alice"]
print(sorted(names, key=str.lower))
print(list(reversed(nums)))

# 索引与计数
lst = [1,2,2,3,2]
print(lst.index(2))
print(lst.count(2))`,
            quiz: [
                {
                    type: 'code',
                    question: "按长度排序用户名并打印结果",
                    initialCode: `names = ["grace","bob","al"]
# 目标：
# 按长度升序排序，打印：Sorted: ['al', 'bob', 'grace']
`,
                    expectedOutput: "Sorted: ['al', 'bob', 'grace']",
                    validationType: 'output',
                    standardCode: `names = ["grace","bob","al"]
# 目标：
# 按长度升序排序，打印：Sorted: ['al', 'bob', 'grace']
res = sorted(names, key=len)
print(f"Sorted: {res}")`,
                    explanation: "使用 key=len 进行长度排序；按题面文案输出。"
                },
                {
                    type: 'code',
                    question: "统计数字 2 的出现次数并打印结果",
                    initialCode: `nums = [1,2,2,3,2]
# 目标：
# 打印：Count: 3
`,
                    expectedOutput: "Count: 3",
                    validationType: 'output',
                    standardCode: `nums = [1,2,2,3,2]
# 目标：
# 打印：Count: 3
print(f"Count: {nums.count(2)}")`,
                    explanation: "count 统计元素出现次数；按题面文案输出。"
                },
                {
                    type: 'choice',
                    question: "以下哪项不会修改原列表？",
                    options: ["sorted()", "list.sort()", "list.pop()", "list.reverse()"],
                    correctAnswer: "sorted()"
                }
            ]
        },
        {
            id: 'basics-15-builtins-lite',
            title: "常用内置函数最小集：sum、min、max、round、any、all",
            learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">JS &rarr; Python：常用内置函数轻量版</h3>
          
          <div class="space-y-8">
            
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">1. 聚合：sum / min / max</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>[1,2,3].reduce((a,b) =&gt; a + b, 0) // 6
Math.min(...[1,2,3]) // 1
Math.max(...[1,2,3]) // 3</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>nums = [1,2,3]
print(sum(nums))  # 6
print(min(nums))  # 1
print(max(nums))  # 3</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 使用 <code>sum/min/max</code> 完成常见聚合操作。
                </p>
            </section>
            
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">2. 四舍五入：round</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>Math.round(3.14159) // 3</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>print(round(3.14159, 2))  # 3.14</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> <code>round(x, ndigits)</code> 指定保留小数位。
                </p>
            </section>
            
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">3. 布尔聚合：any / all</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>[true,false].some(Boolean) // true
[true,false].every(Boolean) // false</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>flags = [True, False, True]
print(any(flags))  # True
print(all([True, 1]))  # True</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> <code>any</code> 至少一个为真；<code>all</code> 全部为真。
                </p>
            </section>
          </div>
        `,
            concepts: [
                { id: 'py_sum_min_max', label: '聚合', type: 'function', desc: 'sum/min/max 进行常见聚合。', refJs: 'reduce/Math' },
                { id: 'py_round', label: '四舍五入', type: 'function', desc: 'round(x[, ndigits]) 控制小数位。', refJs: 'Math.round' },
                { id: 'py_any_all', label: '布尔聚合', type: 'function', desc: 'any 至少一真；all 全部为真。', refJs: 'some/every' }
            ],
            code: `# 聚合
nums = [10,20,30]
print(sum(nums))
print(min(nums))
print(max(nums))

# 四舍五入
print(round(3.14159, 3))

# 布尔聚合
flags = [True, False, True]
print(any(flags))
print(all([True, 1]))`,
            quiz: [
                {
                    type: 'code',
                    question: "汇总分数并打印总分",
                    initialCode: `scores = [60, 70, 50]
# 目标：
# 打印：Total: 180
`,
                    expectedOutput: "Total: 180",
                    validationType: 'output',
                    standardCode: `scores = [60, 70, 50]
# 目标：
# 打印：Total: 180
print(f"Total: {sum(scores)}")`,
                    explanation: "sum 聚合列表数值；按题面文案输出。"
                },
                {
                    type: 'code',
                    question: "判断规则是否全部满足并打印结果",
                    initialCode: `rules = [True, True, False]
# 目标：
# 打印：Valid: False
`,
                    expectedOutput: "Valid: False",
                    validationType: 'output',
                    standardCode: `rules = [True, True, False]
# 目标：
# 打印：Valid: False
print(f"Valid: {all(rules)}")`,
                    explanation: "all 判断所有元素为真；按题面文案输出。"
                },
                {
                    type: 'choice',
                    question: "下列哪个用于“至少一个为真”？",
                    options: ["any()", "all()", "sum()", "round()"],
                    correctAnswer: "any()"
                }
            ]
        },
        {
            id: 'basics-16-file-path-lite',
            title: "文件与路径最小集：with open、读写、pathlib",
            learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">JS &rarr; Python：文件与路径轻量版</h3>
          
          <div class="space-y-8">
            
            <!-- 1. 读取文本：with open -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">1. 读取：with open(..., 'r', encoding)</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript (Node.js)</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>const fs = require('fs');
const text = fs.readFileSync('data.txt','utf8');</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>with open('data.txt', 'r', encoding='utf-8') as f:
    text = f.read()</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 用 <code>with open</code> 管理文件上下文；读取文本用模式 <code>'r'</code> 并设置 <code>encoding</code>。
                </p>
            </section>
            
            <!-- 2. 写入文本：write / append -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">2. 写入：'w' 覆盖 / 'a' 追加</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript (Node.js)</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>const fs = require('fs');
fs.writeFileSync('notes.txt', 'Hello'); // 覆盖</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>with open('notes.txt', 'w', encoding='utf-8') as f:
    f.write('Hello')</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> <code>'w'</code> 覆盖写入；<code>'a'</code> 追加写入；写入完成后文件即关闭。
                </p>
            </section>
            
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">3. 导入：import 与 from ... import ...</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>// CommonJS
const path = require('path')
// ESM
import { join } from 'path'</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>import pathlib               # 导入模块，使用前缀：pathlib.Path(...)
from pathlib import Path     # 直接导入名称：Path(...)</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> <code>import 模块</code> 需带模块前缀；<code>from 模块 import 名称</code> 可直接使用该名称；二者等价选择，按可读性取舍。
                </p>
            </section>
            
            <!-- 3. 路径：pathlib.Path 拼接与存在性 -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">4. 路径：Path / exists</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript (Node.js)</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>const path = require('path');
const p = path.join('data','file.txt');</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>from pathlib import Path
p = Path('data') / 'file.txt'
p.exists()</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 用 <code>Path</code> 进行跨平台路径拼接；<code>exists()</code> 检查存在性。
                </p>
            </section>
          </div>
        `,
            concepts: [
                { id: 'py_open_read', label: '读取文本', type: 'function', desc: "with open('r', encoding) 读取文本。", refJs: 'fs.readFileSync' },
                { id: 'py_open_write', label: '写入文本', type: 'function', desc: "模式 'w' 覆盖；'a' 追加。", refJs: 'fs.writeFileSync' },
                { id: 'py_import', label: '模块导入', type: 'syntax', desc: 'import 模块 vs from 模块 import 名称。', refJs: 'require / import' },
                { id: 'py_pathlib', label: '路径', type: 'module', desc: 'Path 拼接与 exists 检查。', refJs: 'path.join' }
            ],
            code: `# 写入并提示
with open('notes.txt', 'w', encoding='utf-8') as f:
    f.write('Hello')
print("Saved: notes.txt")

# 路径拼接与存在性
from pathlib import Path
p = Path('data') / 'file.txt'
print(f"Path: {p}")`,
            quiz: [
                {
                    type: 'code',
                    question: "用 Path 拼接路径并打印",
                    initialCode: `from pathlib import Path
# 目标：
# 拼接 data 与 file.txt，打印：Path: data/file.txt
`,
                    expectedOutput: "Path: data/file.txt",
                    validationType: 'output',
                    standardCode: `from pathlib import Path
# 目标：
# 拼接 data 与 file.txt，打印：Path: data/file.txt
p = Path('data') / 'file.txt'
print(f"Path: {p}")`,
                    explanation: "Path('dir') / 'file' 进行跨平台拼接；按题面文案输出。"
                },
                {
                    type: 'code',
                    question: "写入字符串并打印保存文案",
                    initialCode: `# 目标：
# 写入到 notes.txt 并打印：Saved: notes.txt
`,
                    expectedOutput: "Saved: notes.txt",
                    validationType: 'output',
                    standardCode: `with open('notes.txt','w',encoding='utf-8') as f:
    f.write('Hello')
print("Saved: notes.txt")`,
                    explanation: "使用 'w' 模式写入并打印保存提示；不检查文件内容。"
                }
                ,
                {
                    type: 'choice',
                    question: "在 Python 中直接得到名称 Path 的导入方式是？",
                    options: ["import pathlib", "from pathlib import Path", "require('path')", "import Path from 'path'"],
                    correctAnswer: "from pathlib import Path"
                }
            ]
        },
        {
            id: 'basics-17-types-overview-milestone',
            title: "里程碑总结：Python 数据类型总览与速查",
            learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">Python 数据类型总览：心智与速查</h3>
          
          <div class="space-y-8">
            
            <!-- 1. 标量与空值 -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded text-xs font-bold">Overview</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">1. 标量：int / float / bool / None</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>42, 3.14, true/false, null</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>42, 3.14, True/False, None</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 布尔和值语法差异：<code>true/false</code> ↔ <code>True/False</code>；<code>null</code> ↔ <code>None</code>。
                </p>
            </section>
            
            <!-- 2. 字符串与容器 -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded text-xs font-bold">Overview</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">2. 字符串与容器：str / list / tuple / dict / set</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>"str", [1,2], ["a","b"], {key: val}, new Set()</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>"str", [1,2], (1,2), {"a": 1}, set()</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> <code>list/dict</code> 可变；<code>tuple</code> 不可变；<code>set</code> 去重。
                </p>
            </section>
            
            <!-- 3. 元组与列表：不可变 vs 可变 -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded text-xs font-bold">Overview</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">3. 元组与列表：不可变 vs 可变</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>const arr = [1,2]; // 可变
// 没有内置不可变序列字面量</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>lst = [1,2]      # 可变
tpl = (1,2)      # 不可变
print(lst[0], tpl[0])</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 固定结构或函数返回多值可用 <code>tuple</code>；日常可变序列用 <code>list</code>。
                </p>
            </section>
            
            <!-- 4. 集合：去重与成员测试 -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded text-xs font-bold">Overview</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">4. 集合：去重与成员测试</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>const s = new Set([1,1,2]);
s.add(3); s.has(2);</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>s = set([1,1,2])
s.add(3)
print(2 in s)  # True</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 用 <code>set</code> 去重与成员测试；与 JS 的 <code>Set</code> 对齐直觉。
                </p>
            </section>
          </div>
        `,
            concepts: [
                { id: 'ms_scalar', label: '标量与空值', type: 'overview', desc: 'int/float/bool/None 的对照与差异。', refJs: 'number/bool/null' },
                { id: 'ms_containers', label: '字符串与容器', type: 'overview', desc: 'str/list/tuple/dict/set 的职责与可变性。', refJs: 'String/Array/Object/Set' },
                { id: 'ms_tuple', label: '元组与列表', type: 'overview', desc: 'tuple 不可变；list 可变。', refJs: 'Array（不可变需自建）' },
                { id: 'ms_set', label: '集合', type: 'overview', desc: 'set 去重与成员测试。', refJs: 'Set' }
            ],
            code: `# 类型名速查
values = [123, 3.14, True, None, "hi", [1], (1,), {"a":1}, set([1])]
print([type(v).__name__ for v in values])`,
            quiz: [
                {
                    type: 'code',
                    question: "打印类型名列表",
                    initialCode: `values = [123, 3.14, True, None, "hi", [1], (1,), {"a":1}, set([1])]
# 目标：
# 打印每个元素的类型名（不带前缀），按顺序输出
`,
                    expectedOutput: "['int', 'float', 'bool', 'NoneType', 'str', 'list', 'tuple', 'dict', 'set']",
                    validationType: 'output',
                    standardCode: `values = [123, 3.14, True, None, "hi", [1], (1,), {"a":1}, set([1])]
# 目标：
# 打印每个元素的类型名（不带前缀），按顺序输出
names = [type(v).__name__ for v in values]
print(names)`,
                    explanation: "type(v).__name__ 取类型名；按题面文案输出。"
                },
                {
                    type: 'choice',
                    question: "以下哪个是不可变序列？",
                    options: ["list", "dict", "tuple", "set"],
                    correctAnswer: "tuple"
                },
                {
                    type: 'code',
                    question: "将列表转换为元组并打印文案",
                    initialCode: `lst = [1, 2, 3]
# 目标：
# 转为元组并打印：Tuple: (1, 2, 3)
`,
                    expectedOutput: "Tuple: (1, 2, 3)",
                    validationType: 'output',
                    standardCode: `lst = [1, 2, 3]
# 目标：
# 转为元组并打印：Tuple: (1, 2, 3)
tpl = tuple(lst)
print(f"Tuple: {tpl}")`,
                    explanation: "tuple(lst) 生成不可变序列；按题面文案输出。"
                },
                {
                    type: 'code',
                    question: "用 set 去重并打印唯一数量",
                    initialCode: `nums = [1,1,2,3,2]
# 目标：
# 打印：Unique: 3
`,
                    expectedOutput: "Unique: 3",
                    validationType: 'output',
                    standardCode: `nums = [1,1,2,3,2]
# 目标：
# 打印：Unique: 3
print(f"Unique: {len(set(nums))}")`,
                    explanation: "set 去重后取长度；按题面文案输出。"
                }
            ]
        }
    ]
}
