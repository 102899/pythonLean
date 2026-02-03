export default {
  id: 'core-03-types-summary-lite',
  title: "数据类型总结与深度考察：数值/序列/二进制/集合/映射",
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">Python 类型系统总览：从 JS 映射到 Python</h3>
          
          <div class="space-y-8">
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">Summary</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">总览：核心内建类型</h4>
                </div>
                <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                    <li>数值：int / float / complex</li>
                    <li>序列：str / list / tuple / range</li>
                    <li>二进制序列：bytes / bytearray / memoryview</li>
                    <li>集合：set / frozenset</li>
                    <li>映射：dict</li>
                    <li>其他：None / bool</li>
                </ul>
            </section>
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">二进制：Buffer/TypedArray ↔ bytes/bytearray/memoryview</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>// Buffer/Uint8Array</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>b = b"abc"
ba = bytearray(b)
mv = memoryview(ba)</code></pre>
                    </div>
                </div>
            </section>
          </div>
        `,
  concepts: [
    { id: 'core_types_num', label: '数值类型', type: 'type', desc: 'int/float/complex' },
    { id: 'core_types_seq', label: '序列类型', type: 'type', desc: 'str/list/tuple/range' },
    { id: 'core_types_bin', label: '二进制序列', type: 'type', desc: 'bytes/bytearray/memoryview' },
    { id: 'core_types_set', label: '集合类型', type: 'type', desc: 'set/frozenset' },
    { id: 'core_types_dict', label: '映射类型', type: 'type', desc: 'dict' }
  ],
  code: `b = b"abc"
ba = bytearray(b)
ba[1] = 120
print(bytes(ba))`,
  quiz: [
    {
      type: 'code',
      question: "bytearray 修改并打印 ASCII 字符串",
      initialCode: `ba = bytearray(b"abc")
ba[1] = 120
print(bytes(ba).decode())`,
      expectedOutput: "axc",
      validationType: 'output',
      standardCode: `ba = bytearray(b"abc")
ba[1] = 120
print(bytes(ba).decode())`
    },
    {
      type: 'code',
      question: "frozenset 并集后判断成员",
      initialCode: `a = {1,2}; b = {2,3}
f = frozenset(a) | frozenset(b)
print(3 in f)`,
      expectedOutput: "True",
      validationType: 'output',
      standardCode: `a = {1,2}; b = {2,3}
f = frozenset(a) | frozenset(b)
print(3 in f)`
    },
    {
      type: 'code',
      question: "memoryview 切片并转字符串",
      initialCode: `mv = memoryview(bytearray(b"abcd"))
s = mv[1:3]
print(bytes(s).decode())`,
      expectedOutput: "bc",
      validationType: 'output',
      standardCode: `mv = memoryview(bytearray(b"abcd"))
s = mv[1:3]
print(bytes(s).decode())`
    },
    {
      type: 'code',
      question: "range 过滤后求和",
      initialCode: `print(sum(x for x in range(0,10,2) if x % 4 == 0))`,
      expectedOutput: "12",
      validationType: 'output',
      standardCode: `print(sum(x for x in range(0,10,2) if x % 4 == 0))`
    },
    {
      type: 'code',
      question: "复数乘法结果",
      initialCode: `c = (1+2j)*(2-1j)
print(c)`,
      expectedOutput: "(4+3j)",
      validationType: 'output',
      standardCode: `c = (1+2j)*(2-1j)
print(c)`
    },
    {
      type: 'choice',
      question: "以下哪个是不可变类型？",
      options: ["frozenset", "bytearray", "list", "dict"],
      correctAnswer: "frozenset"
    }
  ]
}
