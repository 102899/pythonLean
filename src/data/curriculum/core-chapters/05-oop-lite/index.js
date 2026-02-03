export default {
  id: 'core-05-oop-lite',
  title: "面向对象最小集：class、__init__、self、方法",
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">JS &rarr; Python：OOP 轻量版</h3>
          
          <div class="space-y-8">
            
            <!-- 1. 类与构造：constructor ↔ __init__ -->
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">1. 构造：__init__ 与属性</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>class Person {
  constructor(name) { this.name = name; }
  greet() { console.log("Hi, " + this.name); }
}
new Person("Bob").greet();</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>class Person:
    def __init__(self, name):
        self.name = name
    def greet(self):
        print("Hi, " + self.name)
Person("Bob").greet()</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> <code>self</code> 显式指向实例；<code>__init__</code> 用于初始化属性。
                </p>
            </section>
          </div>
        `,
  concepts: [
    { id: 'core_class', label: 'class', type: 'syntax', desc: '类定义与实例化。', refJs: 'class' },
    { id: 'core_init_self', label: '__init__/self', type: 'syntax', desc: '构造方法与实例引用。', refJs: 'constructor/this' },
    { id: 'core_method', label: '方法调用', type: 'approach', desc: '实例.方法() 调用。', refJs: 'obj.method()' }
  ],
  code: `class Person:
    def __init__(self, name):
        self.name = name
    def greet(self):
        print("Hi, " + self.name)
user = Person("Alice")
user.greet()`,
  quiz: [
    {
      type: 'code',
      question: "创建类并打印问候语",
      initialCode: `class Person:
    def __init__(self, name):
        self.name = name
    def greet(self):
        print("Hi, " + self.name)
someone = Person("Bob")`,
      expectedOutput: "Hi, Bob",
      validationType: 'output',
      standardCode: `class Person:
    def __init__(self, name):
        self.name = name
    def greet(self):
        print("Hi, " + self.name)
someone = Person("Bob")
someone.greet()`,
      explanation: "实例化并调用方法输出问候语。"
    },
    {
      type: 'choice',
      question: "实例方法的第一个参数通常命名为？",
      options: ["self", "this", "instance", "obj"],
      correctAnswer: "self"
    }
  ]
}
