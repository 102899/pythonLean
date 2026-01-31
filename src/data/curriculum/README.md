# Python Curriculum Design Philosophy
# 课程设计哲学：前端开发者的 Python 进阶之路

本项目旨在帮助前端开发者利用已有的 JavaScript 知识体系，平滑迁移至 Python 世界。课程结构设计遵循 **“语法映射 -> 思维转变 -> 工程实践 -> 业务落地”** 的认知路径。

---

## 📚 模块划分逻辑

### 1. 基础篇 (Basics) —— “语法翻译”
*   **定位**：消除陌生感，建立信心。
*   **核心逻辑**：建立 JS 与 Python 的语法映射 (Mapping)。
*   **关键点**：
    *   变量声明 (`var/let` vs `name =`)
    *   基础类型 (`true` vs `True`, `null` vs `None`)
    *   字符串处理 (Template Literal vs F-String)
    *   控制流 (`if/else`, 缩进 vs 花括号)
*   **用户心声**：“哦，原来 `console.log` 就是 `print`，这很容易。”

### 2. 核心篇 (Core) —— “思维转变”
*   **定位**：掌握 Pythonic (地道) 写法。
*   **核心逻辑**：深入 Python 特有的数据结构与范式，不再只是“翻译”代码。
*   **关键点**：
    *   数据结构 (`List` vs `Array`, `Dict` vs `Object`, `Set`)
    *   推导式 (List Comprehension vs `map/filter`)
    *   面向对象编程 (Class, Self, Magic Methods)
*   **用户心声**：“原来处理列表数据，Python 用推导式比 JS 的 `map/filter` 更简洁！”

### 3. 进阶篇 (Advanced) —— “工程健壮性”
*   **定位**：编写生产级、可维护的代码。
*   **核心逻辑**：处理复杂工程场景、性能优化与异常管理。
*   **关键点**：
    *   错误处理 (`try/except/finally`)
    *   异步编程 (`asyncio` vs `Promise/async/await`)
    *   模块化与包管理 (`import`, `pip`)
    *   装饰器 (Decorator - 类似于 JS 的高阶函数/装饰器)
*   **用户心声**：“如何像处理 JS Promise 一样处理 Python 的异步任务？”

### 4. 实战篇 (Project) —— “应用落地”
*   **定位**：解决实际问题，创造价值。
*   **核心逻辑**：串联知识点，构建工具或服务，打通“全栈”任督二脉。
*   **关键点**：
    *   Web 开发 (FastAPI/Django)
    *   数据脚本与自动化 (Pandas, Scripting)
    *   跨语言协作 (JS 前端 + Python 后端)
*   **用户心声**：“我可以用 Python 快速写一个 API 或数据处理脚本了。”

---

## 📝 编写指南
*   在编写新章节时，请时刻思考：**“这个概念在 JavaScript 中对应什么？”**
*   多用**对比卡片** (Comparison Cards) 展示代码差异。
*   实操题目应紧扣当节知识点，避免引入未学的超纲概念。
