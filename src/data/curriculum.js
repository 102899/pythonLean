
export const categories = [
  {
    id: 'basics',
    title: '基础篇',
    chapters: [
      { 
        id: 'basics-01-js-vs-python',
        title: "思维转变：JS 与 Python 的异同",
        learnContent: `
          <h3 class="text-xl font-bold mb-4 text-slate-800 dark:text-white">从 JavaScript 到 Python 的思维跃迁</h3>
          <div class="space-y-4 text-slate-600 dark:text-gray-300">
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
        code: `# 1. Hello World
print("Hello from Python!")

# 2. 变量声明 (无需 var/let/const)
name = "Frontend Dev"
age = 25
print(f"User: {name}, Age: {age}")

# 3. 代码块使用缩进 (Indentation) 而不是大括号 {}
if age > 18:
    print("Indentation determines scope in Python!")
    print("Still inside the if block.")

print("Outside the if block.")`,
        quiz: [
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
        id: 'basics-02-env-tools',
        title: "环境与工具：Node/NPM 的对应关系",
        learnContent: "<p>本节内容待补充...</p>",
        code: `# Node.js 生态 vs Python 生态对照... (省略，同前)`,
        quiz: []
      },
      { 
        id: 'basics-03-core-syntax',
        title: "核心语法：变量、类型与 F-Strings",
        code: `# 变量与类型
x = 10          # int
y = 3.14        # float
z = "Python"    # str
is_active = True # bool (注意大写 T)

# F-Strings (Template Literals in JS)
# JS: \`Hello \${z}\`
msg = f"Hello {z}, x + y = {x + y}"
print(msg)

# 类型转换
num_str = "123"
num_int = int(num_str)
print(num_int + 10)`
      }
    ]
  },
  {
    id: 'core',
    title: '核心篇',
    chapters: [
      { 
        id: 'core-01-data-structures',
        title: "数据结构：列表、字典与集合",
        code: `# 列表 (List) -> JS Arrays
fruits = ["apple", "banana", "cherry"]
fruits.append("date") # .push()
print(fruits[0])      # Index access
print(fruits)

# 字典 (Dictionary) -> JS Objects
user = {
    "name": "Alice",
    "role": "Admin",
    "level": 1
}
print(user["name"])

# 列表推导式 (List Comprehension) -> JS .map() / .filter()
numbers = [1, 2, 3, 4, 5]
# JS: numbers.map(n => n * 2)
doubled = [n * 2 for n in numbers]
# JS: numbers.filter(n => n % 2 === 0)
evens = [n for n in numbers if n % 2 == 0]

print(f"Doubled: {doubled}")
print(f"Evens: {evens}")`
      },
      { 
        id: 'core-02-functions-scope',
        title: "函数与作用域：def、lambda 与闭包",
        code: `# 函数定义 -> JS function
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Bob"))
print(greet("Charlie", greeting="Hi"))

# Lambda 表达式 -> JS Arrow Function
# JS: const add = (a, b) => a + b
add = lambda a, b: a + b
print(add(5, 3))

# 作用域 (Scope)
count = 0
def increment():
    global count # 需要声明 global 才能修改全局变量
    count += 1

increment()
print(f"Count: {count}")`
      },
      { 
        id: 'core-03-oop',
        title: "面向对象编程：类、Self 与继承",
        code: `# 类 (Class)
class Animal:
    def __init__(self, name): # Constructor
        self.name = name      # this.name = name
    
    def speak(self):
        pass

# 继承 (Inheritance)
class Dog(Animal):
    def speak(self):
        return "Woof!"

class Cat(Animal):
    def speak(self):
        return "Meow!"

dog = Dog("Buddy")
cat = Cat("Whiskers")

print(f"{dog.name} says {dog.speak()}")
print(f"{cat.name} says {cat.speak()}")`
      }
    ]
  },
  {
    id: 'advanced',
    title: '进阶篇',
    chapters: [
      { 
        id: 'advanced-01-exceptions',
        title: "错误处理与模块：try/except 与 import",
        code: `# 错误处理 -> JS try/catch
try:
    result = 10 / 0
except ZeroDivisionError as e:
    print(f"Error caught: {e}")
finally:
    print("Cleanup code here (always runs)")

# 自定义异常
def validate_age(age):
    if age < 0:
        raise ValueError("Age cannot be negative")

try:
    validate_age(-5)
except ValueError as e:
    print(e)`
      },
      { 
        id: 'advanced-02-async',
        title: "异步编程：Event Loop 与 Asyncio",
        code: `# 异步编程 -> JS async/await
import asyncio

async function_simulation():
    print("Start async task...")
    await asyncio.sleep(1) # 非阻塞等待
    print("Async task finished after 1s")
    return "Result"

async def main():
    print("Main start")
    # await function_simulation()
    # 并发执行 (类似 Promise.all)
    await asyncio.gather(
        function_simulation(),
        function_simulation()
    )
    print("Main end")

# 在 Pyodide 环境中运行 async 代码通常需要特殊处理
# 但基础语法是通用的
# print(asyncio.run(main())) # 注意：在某些 web loop 环境下可能受限`
      }
    ]
  },
  {
    id: 'project',
    title: '实战篇',
    chapters: [
      { 
        id: 'project-01-web-frameworks',
        title: "Python Web 开发：FastAPI/Django 简介",
        updatedAt: '2025-12-01',
        code: `# FastAPI 示例 (伪代码，需要服务器环境)
# 类似于 Express.js + TypeScript

# from fastapi import FastAPI
# app = FastAPI()

# @app.get("/")
# def read_root():
#     return {"Hello": "World"}

# @app.get("/items/{item_id}")
# def read_item(item_id: int):
#     return {"item_id": item_id}

# print("FastAPI 是现代、高性能的 Python Web 框架。")
# print("它利用 Python 类型提示 (Type Hints)以此来提供自动验证和文档 (Swagger UI)。")`
      },
      { 
        id: 'project-02-refactor-js',
        title: "实战项目：将 JS 应用重构为 Python",
        updatedAt: '2026-02-15', // Future date to simulate "New"
        code: `# 模拟一个简单的数据处理任务
# JS: fetch users -> filter active -> map names

users = [
    {"id": 1, "name": "Alice", "active": True},
    {"id": 2, "name": "Bob", "active": False},
    {"id": 3, "name": "Charlie", "active": True},
]

def get_active_user_names(users_list):
    # 链式操作在 Python 中通常使用 List Comprehensions
    return [u["name"] for u in users_list if u["active"]]

print("Active Users:", get_active_user_names(users))`
      }
    ]
  }
]
