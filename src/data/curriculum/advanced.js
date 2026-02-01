export const advanced = {
    id: 'advanced',
    title: '进阶篇',
    chapters: [
        {
            id: 'advanced-placeholder',
            title: "Coming Soon...",
            code: `# 进阶篇内容正在规划中
# 将包含：
# - 错误处理 (Try/Except)
# - 异步编程 (Async/Await)
# - 装饰器与生成器

print("敬请期待进阶篇更新！")`
        }
        ,
        {
            id: 'advanced-13-service-lifecycle-lite',
            title: "服务启动与优雅退出最小集：main、signal、sys.exit",
            learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">工程健壮性：服务生命周期轻量版</h3>
          
          <div class="space-y-8">
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">1. 入口 main：IIFE ↔ if __name__ == '__main__'</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>(function main(){ console.log('start') })()</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>def main():
    print("start")
if __name__ == '__main__':
    main()</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 将程序入口集中在 main；便于测试与复用。
                </p>
            </section>
            
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded text-xs font-bold">Core</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">2. 信号处理：SIGINT/SIGTERM</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>process.on('SIGINT', () => console.log('stop'))</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>import signal
def handle(signum, frame):
    print("stop")
signal.signal(signal.SIGINT, handle)
signal.signal(signal.SIGTERM, handle)</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 注册信号处理器以实现优雅退出与资源清理。
                </p>
            </section>
            
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded text-xs font-bold">Core</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">3. 退出码：sys.exit</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>// 0 成功，非 0 失败：process.exit(1)</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>import sys
# sys.exit(1)</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 统一退出码约定，并在日志中记录失败原因。
                </p>
            </section>
          </div>
        `,
            concepts: [
                { id: 'adv_srv_main', label: '入口 main', type: 'service', desc: '集中入口便于测试与复用。', refJs: 'IIFE/入口函数' },
                { id: 'adv_srv_signal', label: '信号处理', type: 'service', desc: 'SIGINT/SIGTERM 优雅退出。', refJs: 'process.on' },
                { id: 'adv_srv_exit', label: '退出码', type: 'service', desc: '0 成功，非 0 失败。', refJs: 'process.exit' }
            ],
            code: `import signal
def handle(signum, frame):
    print("stop")
print("start")
handle(None, None)`,
            quiz: [
                {
                    type: 'code',
                    question: "打印服务启动与停止：start 和 stop",
                    initialCode: `def handle():
    print("stop")
print("start")
handle()`,
                    expectedOutput: "start\nstop",
                    validationType: 'output',
                    standardCode: `def handle():
    print("stop")
print("start")
handle()`,
                    explanation: "按顺序输出启动与停止信息。"
                },
                {
                    type: 'choice',
                    question: "生产中表示失败的退出码推荐是？",
                    options: ["1", "0", "255", "2"],
                    correctAnswer: "1"
                }
            ]
        },
        {
            id: 'advanced-12-config-manager-lite',
            title: "配置管理抽象最小集：加载器、校验器、策略",
            learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">工程健壮性：配置管理抽象轻量版</h3>
          
          <div class="space-y-8">
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">1. 角色分离：loader/validator ↔ 加载/校验</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>// loader: 读取 defaults/file/env
// validator: 校验字段与类型</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>def load_defaults(): return {"host": "localhost", "port": 8080}
def validate(cfg):
    if not isinstance(cfg.get("host"), str): raise ValueError("host")
    if not isinstance(cfg.get("port"), int): raise ValueError("port")
    return cfg</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 将“加载”与“校验”分离，提升可维护性与可测试性。
                </p>
            </section>
            
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded text-xs font-bold">Core</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">2. 策略合并：默认→文件→环境优先</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>const cfg = { ...defaults, ...file }; if (process.env.PORT) cfg.port = Number(process.env.PORT)</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>import os, json
def merge(a, b): return {**a, **b}
def load_file(text): return json.loads(text)
def apply_env(cfg):
    p = os.getenv("PORT")
    if p: cfg["port"] = int(p)
    return cfg</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 明确优先级并封装为可组合策略函数。
                </p>
            </section>
          </div>
        `,
            concepts: [
                { id: 'adv_cfg_mgr_loader', label: '加载器', type: 'config', desc: '读取默认/文件/环境。', refJs: 'loader' },
                { id: 'adv_cfg_mgr_validator', label: '校验器', type: 'config', desc: '字段与类型校验。', refJs: 'validator' },
                { id: 'adv_cfg_mgr_strategy', label: '策略合并', type: 'config', desc: '默认→文件→环境优先。', refJs: 'Object.assign + env' }
            ],
            code: `import os, json
def load_defaults(): return {"host": "localhost", "port": 8080}
def load_file(text): return json.loads(text)
def merge(a, b): return {**a, **b}
def apply_env(cfg):
    p = os.getenv("PORT")
    if p: cfg["port"] = int(p)
    return cfg
cfg = apply_env(merge(load_defaults(), load_file('{"port": 9090}')))
print(f"{cfg['host']}:{cfg['port']}")`,
            quiz: [
                {
                    type: 'code',
                    question: "实现校验器：host 为 str、port 为 int 并打印 OK",
                    initialCode: `cfg = {"host": "localhost", "port": 8080}`,
                    expectedOutput: "OK",
                    validationType: 'output',
                    standardCode: `cfg = {"host": "localhost", "port": 8080}
def validate(cfg):
    if not isinstance(cfg.get("host"), str): return
    if not isinstance(cfg.get("port"), int): return
    print("OK")
validate(cfg)`,
                    explanation: "检查必需字段与类型；满足后输出 OK。"
                },
                {
                    type: 'choice',
                    question: "配置优先顺序推荐是？",
                    options: ["环境 > 文件 > 默认", "文件 > 环境 > 默认", "默认 > 文件 > 环境", "随机"],
                    correctAnswer: "环境 > 文件 > 默认"
                }
            ]
        },
        {
            id: 'advanced-11-logging-structured-lite',
            title: "结构化日志最小集：JSON 行、字段选择、级别",
            learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">工程健壮性：结构化日志轻量版</h3>
          
          <div class="space-y-8">
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">1. JSON 行日志：console ↔ json.dumps</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>console.log(JSON.stringify({ level: 'info', msg: 'hello', service: 'app' }))</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>import json
log = {"level": "info", "msg": "hello", "service": "app"}
print(json.dumps(log))</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 结构化日志使用 JSON 行，便于收集与检索。
                </p>
            </section>
            
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded text-xs font-bold">Core</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">2. 字段选择：时间戳、服务名、级别、消息</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>{ ts: Date.now(), level: 'info', service: 'demo', msg: 'started' }</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>import time, json
log = { "ts": int(time.time()*1000), "level": "info", "service": "demo", "msg": "started" }
print(json.dumps(log))</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 统一字段命名；按业务可读性选择必要字段。
                </p>
            </section>
          </div>
        `,
            concepts: [
                { id: 'adv_log_json', label: 'JSON 行', type: 'logging', desc: '结构化日志格式。', refJs: 'JSON.stringify' },
                { id: 'adv_log_fields', label: '字段选择', type: 'logging', desc: 'ts/level/service/msg 基本字段。', refJs: '日志字段设计' },
                { id: 'adv_log_level', label: '日志级别', type: 'logging', desc: 'info/debug/warn/error 语义。', refJs: 'console 级别' }
            ],
            code: `import time, json
log = { "ts": int(time.time()*1000), "level": "info", "service": "demo", "msg": "started" }
print(json.dumps(log))`,
            quiz: [
                {
                    type: 'code',
                    question: "输出结构化日志：{\"level\":\"info\",\"msg\":\"started\",\"service\":\"demo\"}",
                    initialCode: `import json
log = {"level": "info", "msg": "started", "service": "demo"}`,
                    expectedOutput: "{\"level\":\"info\",\"msg\":\"started\",\"service\":\"demo\"}",
                    validationType: 'output',
                    standardCode: `import json
log = {"level": "info", "msg": "started", "service": "demo"}
print(json.dumps(log))`,
                    explanation: "使用 json.dumps 输出单行 JSON。"
                },
                {
                    type: 'choice',
                    question: "结构化日志推荐的输出格式是？",
                    options: ["JSON 行", "随机字符串", "CSV 表格", "二进制 blob"],
                    correctAnswer: "JSON 行"
                }
            ]
        },
        {
            id: 'advanced-10-error-handling-lite',
            title: "错误处理最小集：try/except、raise、退出码",
            learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">工程健壮性：错误处理轻量版</h3>
          
          <div class="space-y-8">
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">1. 异常边界：try/catch ↔ try/except</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>try { JSON.parse('{') } catch(e) { console.error('error') }</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>try:
    int("x")
except ValueError:
    print("error")</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 在边界捕获已知异常类型；避免吞掉所有错误。
                </p>
            </section>
            
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded text-xs font-bold">Core</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">2. 主动错误：throw ↔ raise</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>function divide(a,b){ if(b===0) throw new Error('zero') }</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>def divide(a, b):
    if b == 0:
        raise ValueError("zero")</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 用明确异常类型表达非法输入；在调用处捕获处理。
                </p>
            </section>
            
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded text-xs font-bold">Core</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">3. 退出码：process.exit ↔ sys.exit</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>// 生产约定：0 成功，非 0 失败
// process.exit(1)</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code># 生产约定：0 成功，非 0 失败
# import sys; sys.exit(1)</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> CLI/服务入口统一约定退出码；日志记录失败原因。
                </p>
            </section>
          </div>
        `,
            concepts: [
                { id: 'adv_err_boundary', label: '异常边界', type: 'error', desc: 'try/except 捕获已知异常。', refJs: 'try/catch' },
                { id: 'adv_err_raise', label: '主动错误', type: 'error', desc: '非法输入 raise 特定异常。', refJs: 'throw Error' },
                { id: 'adv_err_exit', label: '退出码', type: 'error', desc: '约定 0 成功，非 0 失败。', refJs: 'process.exit' }
            ],
            code: `def safe_div(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return "error"`,
            quiz: [
                {
                    type: 'code',
                    question: "捕获除零异常并打印 error",
                    initialCode: `def div(a, b):
    return a / b`,
                    expectedOutput: "error",
                    validationType: 'output',
                    standardCode: `def div(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        print("error")`,
                    explanation: "在异常边界捕获 ZeroDivisionError 并输出错误信息。"
                },
                {
                    type: 'choice',
                    question: "生产中表示失败的退出码推荐是？",
                    options: ["1", "0", "255", "2"],
                    correctAnswer: "1"
                }
            ]
        },
        {
            id: 'advanced-08-config-files-lite',
            title: "配置文件最小集：JSON、configparser（INI）",
            learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">工程健壮性：配置文件轻量版</h3>
          
          <div class="space-y-8">
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">1. JSON 配置：JSON.parse ↔ json.loads</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>const cfg = JSON.parse('{"host":"localhost","port":8080}')
console.log(cfg.host)</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>import json
cfg = json.loads('{"host":"localhost","port":8080}')
print(cfg["host"])</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> JSON 读写心智与前端一致；使用 <code>json</code> 标准库。
                </p>
            </section>
            
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded text-xs font-bold">Core</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">2. INI 配置：configparser 读写</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>// 伪示例：读取 ini 样式文本并解析</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>import configparser
cfg = configparser.ConfigParser()
cfg.read_string("[server]\\nhost=localhost\\nport=8080")
print(cfg["server"]["host"])</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> <code>configparser</code> 适合 INI 风格；可结合环境变量进行分层配置。
                </p>
            </section>
          </div>
        `,
            concepts: [
                { id: 'adv_cfg_json', label: 'JSON', type: 'config', desc: '使用 json 标准库读取配置。', refJs: 'JSON.parse' },
                { id: 'adv_cfg_ini', label: 'INI', type: 'config', desc: 'configparser 读取 INI 风格配置。', refJs: 'ini 解析' },
                { id: 'adv_cfg_layer', label: '配置分层', type: 'config', desc: '环境变量与文件配置组合。', refJs: 'process.env + 文件' }
            ],
            code: `import json, configparser
cfg_json = json.loads('{"host":"localhost","port":8080}')
print(cfg_json["host"])
cfg_ini = configparser.ConfigParser()
cfg_ini.read_string("[server]\\nhost=localhost\\nport=8080")
print(cfg_ini["server"]["port"])`,
            quiz: [
                {
                    type: 'code',
                    question: "用 configparser 读取 INI 字符串并打印 Host",
                    initialCode: `import configparser
text = "[server]\\nhost=localhost\\nport=8080"
cfg = configparser.ConfigParser()
cfg.read_string(text)
print("Host:", cfg["server"]["host"])`,
                    expectedOutput: "Host: localhost",
                    validationType: 'output',
                    standardCode: `import configparser
text = "[server]\\nhost=localhost\\nport=8080"
cfg = configparser.ConfigParser()
cfg.read_string(text)
print(f"Host: {cfg['server']['host']}")`,
                    explanation: "read_string 直接从字符串读取配置并访问键。"
                },
                {
                    type: 'choice',
                    question: "读取 INI 风格配置的标准库是？",
                    options: ["configparser", "json", "logging", "argparse"],
                    correctAnswer: "configparser"
                }
            ]
        },
        {
            id: 'advanced-05-package-structure-lite',
            title: "包与模块结构最小集：package、__init__.py、相对导入",
            learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">工程健壮性：包与模块结构轻量版</h3>
          
          <div class="space-y-8">
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">1. 包出口：index.js ↔ __init__.py</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>// index.js 汇总导出
// export { foo } from './foo.js'</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code># __init__.py 汇总导出
# from .foo import foo</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 包的入口由 <code>__init__.py</code> 定义公开 API，心智等价于前端的 index.js。
                </p>
            </section>
            
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded text-xs font-bold">Core</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">2. 导入形式：import / from ... import ...</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>// import * as pkg from 'pkg'; import { foo } from 'pkg'</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>import pkg           # 需带前缀：pkg.foo()
from pkg import foo  # 直接使用：foo()</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 两种导入心智与前端一致；按可读性与命名空间选择。
                </p>
            </section>
            
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded text-xs font-bold">Core</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">3. 相对导入：包内模块引用</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>// 从当前目录引用：import { util } from './util.js'</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>from .util import helper
from .sub.mod import calc</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 包内引用用点号起始的相对导入；避免与全局命名冲突。
                </p>
            </section>
          </div>
        `,
            concepts: [
                { id: 'adv_pkg_init', label: '__init__.py', type: 'package', desc: '定义包入口与公开 API。', refJs: 'index.js' },
                { id: 'adv_pkg_import', label: '导入形式', type: 'package', desc: 'import 或 from 模式。', refJs: 'ESM 导入' },
                { id: 'adv_pkg_relative', label: '相对导入', type: 'package', desc: 'from .module 导入包内模块。', refJs: './ 相对路径' }
            ],
            code: `print("Module:", __name__)
print("Package:", __package__)`,
            quiz: [
                {
                    type: 'code',
                    question: "打印当前模块与包名（执行环境为顶层）",
                    initialCode: `print("Module:", __name__)
print("Package:", __package__)`,
                    expectedOutput: "Module: __main__\nPackage: None",
                    validationType: 'output',
                    standardCode: `print(f"Module: {__name__}")
print(f"Package: {__package__}")`,
                    explanation: "顶层执行环境下：模块名为 __main__；包名为空（None）。"
                },
                {
                    type: 'choice',
                    question: "包内相对导入的正确写法是？",
                    options: ["from .util import helper", "import .util", "from util import .helper", "from ./util import helper"],
                    correctAnswer: "from .util import helper"
                }
            ]
        },
        {
            id: 'advanced-01-typing-lite',
            title: "类型标注最小集：函数返回、容器、Optional",
            learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">工程健壮性：类型标注轻量版</h3>
          
          <div class="space-y-8">
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded text-xs font-bold">Typing</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">1. 函数签名与返回类型</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>// TS 示例：function add(a: number, b: number): number { ... }</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>def add(a: int, b: int) -&gt; int:
    return a + b</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 函数签名 <code>(参数: 类型) -&gt; 返回类型</code>，与 TS 心智一致。
                </p>
            </section>
            
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded text-xs font-bold">Typing</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">2. 容器类型：List / Dict</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>// TS 示例：const arr: number[] = []</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>from typing import List, Dict
nums: List[int] = [1,2,3]
user: Dict[str, int] = {"age": 20}</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 标注容器元素类型；利于静态检查与自文档化。
                </p>
            </section>
            
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded text-xs font-bold">Typing</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">3. Optional 可选值</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>// TS 示例：string | null</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>from typing import Optional
def greet(name: Optional[str]) -&gt; str:
    return "Hi, " + (name or "Anon")</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> <code>Optional[T]</code> 表示可为 <code>None</code>；使用时注意空值处理。
                </p>
            </section>
          </div>
        `,
            concepts: [
                { id: 'adv_typing_fn', label: '函数签名', type: 'typing', desc: '参数与返回类型标注。', refJs: 'TS 函数注解' },
                { id: 'adv_typing_container', label: '容器类型', type: 'typing', desc: 'List/Dict 元素类型标注。', refJs: 'TS 数组/对象类型' },
                { id: 'adv_typing_optional', label: 'Optional', type: 'typing', desc: '可选类型与空值处理。', refJs: 'TS union null' }
            ],
            code: `from typing import List, Dict, Optional
def add(a: int, b: int) -> int:
    return a + b
nums: List[int] = [1,2,3]
user: Dict[str, int] = {"age": 20}
def greet(name: Optional[str]) -> str:
    return "Hi, " + (name or "Anon")
print(add(2,3)); print(greet(None))`,
            quiz: [
                {
                    type: 'code',
                    question: "为函数 annotate(x,y) 添加类型标注并打印结果",
                    initialCode: `# 目标：
# annotate 接受 int, int 返回 int，打印：Res: 5
def annotate(x, y):
    return x + y`,
                    expectedOutput: "Res: 5",
                    validationType: 'output',
                    standardCode: `def annotate(x: int, y: int) -> int:
    return x + y
print(f"Res: {annotate(2,3)}")`,
                    explanation: "添加参数与返回类型标注；按题面输出。"
                },
                {
                    type: 'choice',
                    question: "下列哪个表示可为 None 的字符串？",
                    options: ["Optional[str]", "List[str]", "Dict[str,str]", "str | int"],
                    correctAnswer: "Optional[str]"
                }
            ]
        }
        ,
        {
            id: 'advanced-02-unittest-lite',
            title: "测试最小集：unittest、断言、用例类",
            learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">工程健壮性：单元测试轻量版</h3>
          
          <div class="space-y-8">
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded text-xs font-bold">Test</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">1. 用例类与断言</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>// 伪示例：expect(add(2,3)).toBe(5)</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>import unittest
def add(a, b): return a + b
class TestAdd(unittest.TestCase):
    def test_add(self):
        self.assertEqual(add(2,3), 5)
if __name__ == '__main__':
    unittest.main()</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 用例类继承 <code>unittest.TestCase</code>；断言方法校验预期。
                </p>
            </section>
          </div>
        `,
            concepts: [
                { id: 'adv_unittest_case', label: '用例类', type: 'testing', desc: '继承 TestCase 定义测试方法。', refJs: 'jest describe/test' },
                { id: 'adv_unittest_assert', label: '断言', type: 'testing', desc: 'assertEqual 等断言校验值。', refJs: 'expect toBe' }
            ],
            code: `import unittest
def add(a, b): return a + b
class TestAdd(unittest.TestCase):
    def test_add(self):
        self.assertEqual(add(2,3), 5)
if __name__ == '__main__':
    unittest.main()`,
            quiz: [
                {
                    type: 'choice',
                    question: "unittest 中定义测试方法需要以什么前缀命名？",
                    options: ["test_", "spec_", "case_", "assert_"],
                    correctAnswer: "test_"
                }
            ]
        }
        ,
        {
            id: 'advanced-03-asyncio-lite',
            title: "异步最小集：async/await、asyncio.run、sleep",
            learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">工程健壮性：异步轻量版</h3>
          
          <div class="space-y-8">
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded text-xs font-bold">Async</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">1. async/await 与运行入口</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>async function main(){ await new Promise(r =&gt; setTimeout(r, 100)); }</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>import asyncio
async def main():
    await asyncio.sleep(0.1)
asyncio.run(main())</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 用 <code>asyncio.run</code> 作为入口；<code>await</code> 协程内等待异步任务。
                </p>
            </section>
          </div>
        `,
            concepts: [
                { id: 'adv_async_entry', label: '运行入口', type: 'async', desc: 'asyncio.run(main()) 作为入口。', refJs: '顶层 await/立即执行函数' },
                { id: 'adv_async_sleep', label: '异步等待', type: 'async', desc: 'await asyncio.sleep 模拟 IO 等待。', refJs: 'setTimeout Promise' }
            ],
            code: `import asyncio
async def main():
    await asyncio.sleep(0.1)
asyncio.run(main())`,
            quiz: [
                {
                    type: 'choice',
                    question: "在协程内等待异步任务应使用？",
                    options: ["await", "yield", "return", "break"],
                    correctAnswer: "await"
                }
            ]
        }
        ,
        {
            id: 'advanced-04-logging-config-lite',
            title: "日志与配置最小集：basicConfig、getLogger、os.getenv",
            learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">工程健壮性：日志与配置轻量版</h3>
          
          <div class="space-y-8">
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">1. 快速日志：console ↔ logging.basicConfig</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>console.info('hello')</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>import logging
logging.basicConfig(level=logging.INFO, format="%(levelname)s:%(name)s:%(message)s")
logger = logging.getLogger("app")
logger.info("hello")</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> <code>basicConfig</code> 一行配置级别与格式；<code>getLogger</code> 获取命名日志器。
                </p>
            </section>
            
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded text-xs font-bold">Core</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">2. 环境配置：process.env ↔ os.getenv</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>const env = process.env.NODE_ENV || 'dev'
const debug = process.env.DEBUG === '1'
if (debug) console.debug('debug on')</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>import os, logging
env = os.getenv('APP_ENV', 'dev')
debug = os.getenv('APP_DEBUG', '0') == '1'
level = logging.DEBUG if debug else logging.INFO
logging.basicConfig(level=level, format="%(levelname)s:%(name)s:%(message)s")
logger = logging.getLogger("app")
logger.debug("debug on")
logger.info(f"env: {env}")</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 用环境变量切换行为；<code>os.getenv</code> 读取；级别控制输出。
                </p>
            </section>
          </div>
        `,
            concepts: [
                { id: 'adv_logging_basic', label: 'basicConfig', type: 'logging', desc: '快速配置级别与格式。', refJs: 'console 配置' },
                { id: 'adv_logger', label: 'getLogger', type: 'logging', desc: '获取命名日志器用于模块化。', refJs: '命名 logger' },
                { id: 'adv_env_config', label: '环境配置', type: 'config', desc: 'os.getenv 读取环境变量。', refJs: 'process.env' }
            ],
            code: `import logging, os
env = os.getenv('APP_ENV', 'dev')
debug = os.getenv('APP_DEBUG', '0') == '1'
level = logging.DEBUG if debug else logging.INFO
logging.basicConfig(level=level, format="%(levelname)s:%(name)s:%(message)s")
logger = logging.getLogger("demo")
logger.info("started")`,
            quiz: [
                {
                    type: 'code',
                    question: "配置日志输出为 INFO:demo:started",
                    initialCode: `import logging
logger = logging.getLogger("demo")`,
                    expectedOutput: "INFO:demo:started",
                    validationType: 'output',
                    standardCode: `import logging
logging.basicConfig(level=logging.INFO, format="%(levelname)s:%(name)s:%(message)s")
logger = logging.getLogger("demo")
logger.info("started")`,
                    explanation: "设置 basicConfig 与命名日志器；按格式输出。"
                },
                {
                    type: 'choice',
                    question: "读取环境变量推荐使用？",
                    options: ["os.getenv", "Path.open", "logging.getLogger", "process.env"],
                    correctAnswer: "os.getenv"
                }
            ]
        }
        ,
        {
            id: 'advanced-06-deps-venv-lite',
            title: "依赖与虚拟环境最小集：venv、requirements、pip",
            learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">工程健壮性：依赖与虚拟环境轻量版</h3>
          
          <div class="space-y-8">
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">1. 依赖安装：npm install ↔ pip -r</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>npm install
yarn install
pnpm install</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>pip install -r requirements.txt</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 依赖列表由 <code>requirements.txt</code> 管理；与前端包管理器概念对应。
                </p>
            </section>
            
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded text-xs font-bold">Core</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">2. 虚拟环境：nvm/node_modules ↔ venv 分离</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code># 项目内依赖隔离：node_modules
# 版本管理：nvm use 18</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code># 创建与使用（示意命令）
python -m venv venv
# macOS/Linux: source venv/bin/activate
# Windows: venv\\Scripts\\activate</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 用 <code>venv</code> 隔离依赖与解释器；与前端项目内依赖隔离心智一致。
                </p>
            </section>
          </div>
        `,
            concepts: [
                { id: 'adv_deps_req', label: 'requirements.txt', type: 'package', desc: '依赖列表与版本钉住。', refJs: 'package.json' },
                { id: 'adv_deps_venv', label: 'venv 隔离', type: 'package', desc: '项目级 Python/依赖隔离。', refJs: 'node_modules/nvm' },
                { id: 'adv_deps_pip', label: 'pip 安装', type: 'package', desc: 'pip install -r requirements.txt。', refJs: 'npm/pnpm/yarn' }
            ],
            code: `print("python -m venv venv")
print("pip install -r requirements.txt")`,
            quiz: [
                {
                    type: 'code',
                    question: "打印依赖安装命令行字符串",
                    initialCode: `cmd = "pip install -r requirements.txt"
print("Run:", cmd)`,
                    expectedOutput: "Run: pip install -r requirements.txt",
                    validationType: 'output',
                    standardCode: `cmd = "pip install -r requirements.txt"
print(f"Run: {cmd}")`,
                    explanation: "以字符串形式构造并输出命令，避免实际执行。"
                },
                {
                    type: 'choice',
                    question: "创建虚拟环境的推荐命令是？",
                    options: ["python -m venv venv", "pip venv create", "conda install venv", "node -m venv venv"],
                    correctAnswer: "python -m venv venv"
                }
            ]
        }
        ,
        {
            id: 'advanced-07-cli-lite',
            title: "CLI 最小集：argparse、入口 main、帮助",
            learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">工程健壮性：命令行轻量版</h3>
          
          <div class="space-y-8">
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">1. 参数解析：process.argv/yargs ↔ argparse</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>// const argv = require('yargs').argv
// console.log(argv.name || 'world')</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>import argparse
p = argparse.ArgumentParser()
p.add_argument('--name', default='world')
args = p.parse_args([])
print("Hello, " + args.name)</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> <code>argparse</code> 定义参数、默认值与帮助；与 yargs 心智类似。
                </p>
            </section>
          </div>
        `,
            concepts: [
                { id: 'adv_cli_argparse', label: 'argparse', type: 'cli', desc: '参数定义与解析。', refJs: 'yargs' },
                { id: 'adv_cli_entry', label: '入口 main', type: 'cli', desc: 'main() 作为程序入口。', refJs: 'Node 入口函数' },
                { id: 'adv_cli_help', label: '帮助', type: 'cli', desc: '自动生成 -h/--help 使用说明。', refJs: 'yargs help' }
            ],
            code: `import argparse
p = argparse.ArgumentParser()
p.add_argument('--name', default='world')
args = p.parse_args([])
print("Hello, " + args.name)`,
            quiz: [
                {
                    type: 'code',
                    question: "使用 argparse 打印 Hello, world",
                    initialCode: `import argparse
p = argparse.ArgumentParser()
p.add_argument('--name', default='world')`,
                    expectedOutput: "Hello, world",
                    validationType: 'output',
                    standardCode: `import argparse
p = argparse.ArgumentParser()
p.add_argument('--name', default='world')
args = p.parse_args([])
print(f"Hello, {args.name}")`,
                    explanation: "用默认值并传入空参数列表，避免依赖外部 argv。"
                },
                {
                    type: 'choice',
                    question: "显示帮助的常用参数是？",
                    options: ["-h/--help", "--version", "--verbose", "--dry-run"],
                    correctAnswer: "-h/--help"
                }
            ]
        },
        {
            id: 'advanced-09-config-layering-lite',
            title: "配置分层最佳实践：环境变量→默认→文件覆盖",
            learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">工程健壮性：配置分层最佳实践</h3>
          
          <div class="space-y-8">
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded text-xs font-bold">VS</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">1. 分层心智：process.env/Object.assign ↔ os.getenv/字典合并</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>const defaults = { host: 'localhost', port: 8080 }
const file = { port: 9090 }
const cfg = { ...defaults, ...file }
if (process.env.PORT) cfg.port = Number(process.env.PORT)</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>import os, json
defaults = {"host": "localhost", "port": 8080}
file = json.loads('{"port": 9090}')
cfg = {**defaults, **file}
port = os.getenv("PORT")
if port: cfg["port"] = int(port)</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 默认 → 文件覆盖 → 环境变量最高优先级；以可读性与可控性为准。
                </p>
            </section>
            
            <section>
                <div class="flex items-center gap-2 mb-3">
                    <span class="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded text-xs font-bold">Core</span>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200">2. 加载顺序与安全：类型转换与默认值</h4>
                </div>
                <div class="grid grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <div class="bg-slate-50 dark:bg-[#1e1e1e] p-3 border-r border-slate-200 dark:border-slate-700">
                        <div class="text-xs text-slate-400 mb-1 font-mono">JavaScript</div>
                        <pre class="text-sm font-mono text-slate-600 dark:text-slate-300"><code>const port = Number(process.env.PORT || file.port || defaults.port)</code></pre>
                    </div>
                    <div class="bg-indigo-50/50 dark:bg-indigo-900/10 p-3">
                        <div class="text-xs text-indigo-400 mb-1 font-mono">Python</div>
                        <pre class="text-sm font-mono text-slate-800 dark:text-white"><code>port = int(os.getenv("PORT") or file.get("port") or defaults["port"])</code></pre>
                    </div>
                </div>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 p-2 rounded">
                    <strong>💡 结论：</strong> 明确类型转换与默认值；避免字符串端口造成隐式错误。
                </p>
            </section>
          </div>
        `,
            concepts: [
                { id: 'adv_cfg_layer_env', label: '环境优先', type: 'config', desc: '环境变量覆盖文件与默认。', refJs: 'process.env 覆盖' },
                { id: 'adv_cfg_layer_default', label: '默认回退', type: 'config', desc: '无配置时使用默认值。', refJs: 'defaults' },
                { id: 'adv_cfg_layer_file', label: '文件覆盖', type: 'config', desc: '文件配置覆盖默认。', refJs: 'Object.assign' }
            ],
            code: `import os, json
defaults = {"host": "localhost", "port": 8080}
file = json.loads('{"port": 9090}')
cfg = {**defaults, **file}
p = int(os.getenv("PORT") or cfg["port"])
print(f"{cfg['host']}:{p}")`,
            quiz: [
                {
                    type: 'code',
                    question: "合并默认与文件配置并打印 localhost:9090",
                    initialCode: `import json
defaults = {"host": "localhost", "port": 8080}
file = json.loads('{"port": 9090}')`,
                    expectedOutput: "localhost:9090",
                    validationType: 'output',
                    standardCode: `import json
defaults = {"host": "localhost", "port": 8080}
file = json.loads('{"port": 9090}')
cfg = {**defaults, **file}
print(f"{cfg['host']}:{cfg['port']}")`,
                    explanation: "字典解包进行覆盖，打印合并后的主机与端口。"
                },
                {
                    type: 'choice',
                    question: "工程中配置优先顺序推荐是？",
                    options: ["环境变量 > 文件 > 默认", "文件 > 环境变量 > 默认", "默认 > 文件 > 环境变量", "随机"],
                    correctAnswer: "环境变量 > 文件 > 默认"
                }
            ]
        }
    ].sort((a, b) => {
      const num = (x) => {
        if (x.id === 'advanced-placeholder') return -Infinity;
        const m = x.id.match(/^advanced-(\d+)-/);
        return m ? parseInt(m[1], 10) : 999;
      };
      return num(a) - num(b);
    })
}
