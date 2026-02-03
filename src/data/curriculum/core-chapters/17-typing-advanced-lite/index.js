export default {
  id: 'core-17-typing-advanced-lite',
  title: "类型系统进阶最小集：TypedDict / Union / Literal / Narrowing",
  learnContent: `
          <h3 class="text-xl font-bold mb-6 text-slate-800 dark:text-white">TypedDict/Union/Literal 与类型收窄</h3>
          <div class="space-y-8">
            <section>
              <div class="flex items-center gap-2 mb-3">
                <span class="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded text-xs font-bold">Summary</span>
                <h4 class="font-bold text-slate-700 dark:text-slate-200">核心概念</h4>
              </div>
              <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                <li>TypedDict：为 dict 指定固定键与类型（类似 TS interface）。</li>
                <li>Union：联合类型，值可能为多种类型之一。</li>
                <li>Literal：字面量类型，限制到具体可选值。</li>
                <li>Narrowing：通过分支与检查（isinstance/比较）收窄联合类型。</li>
              </ul>
            </section>
            <section>
              <div class="flex items-center gap-2 mb-3">
                <span class="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded text-xs font-bold">Practice</span>
                <h4 class="font-bold text-slate-700 dark:text-slate-200">工程常见用法</h4>
              </div>
              <ul class="text-sm text-slate-600 dark:text-slate-300 list-disc pl-6">
                <li>API 响应对象：TypedDict 约束字段（如 id/name）。</li>
                <li>函数入参：Union 表达多形输入（如 int | str）。</li>
                <li>枚举风格：Literal 限定有限字符串集合（如 "info"|"warn"|"error"）。</li>
              </ul>
            </section>
          </div>
        `,
  concepts: [
    { id: 'core_typeddict', label: 'TypedDict', type: 'syntax', desc: '为 dict 指定键与类型' },
    { id: 'core_union', label: 'Union', type: 'syntax', desc: '联合类型' },
    { id: 'core_literal', label: 'Literal', type: 'syntax', desc: '字面量类型' },
    { id: 'core_narrowing', label: 'Narrowing', type: 'syntax', desc: '类型收窄' }
  ],
  code: `from typing import TypedDict, Union, Literal
class User(TypedDict):
    id: int
    name: str
def to_str(x: Union[int, str]) -> str:
    if isinstance(x, int):
        return str(x)
    return x
def log(level: Literal["info","warn","error"]) -> None:
    print(level)
u: User = {"id": 1, "name": "alice"}
print(u["name"])
print(to_str(42))
log("info")`,
  quiz: [
    {
      type: 'code',
      question: "使用 TypedDict 创建用户并打印 name 与 id",
      initialCode: `from typing import TypedDict
class User(TypedDict):
    id: int
    name: str
u: User = {"id": 1, "name": "alice"}
print(f"{u['name']}:{u['id']}")`,
      expectedOutput: "alice:1",
      validationType: 'output',
      standardCode: `from typing import TypedDict
class User(TypedDict):
    id: int
    name: str
u: User = {"id": 1, "name": "alice"}
print(f"{u['name']}:{u['id']}")`
    },
    {
      type: 'code',
      question: "Union 收窄：int 翻倍为字符串，str 转大写",
      initialCode: `from typing import Union
def to_str(x: Union[int, str]) -> str:
    if isinstance(x, int):
        return str(x * 2)
    return x.upper()
print(to_str(3))
print(to_str("hi"))`,
      expectedOutput: "6\nHI",
      validationType: 'output',
      standardCode: `from typing import Union
def to_str(x: Union[int, str]) -> str:
    if isinstance(x, int):
        return str(x * 2)
    return x.upper()
print(to_str(3))
print(to_str("hi"))`
    },
    {
      type: 'code',
      question: "Literal 收窄：仅接收 'ok' 或 'fail'",
      initialCode: `from typing import Literal
def status(s: Literal["ok","fail"]) -> None:
    if s == "ok":
        print("OK")
    else:
        print("FAIL")
status("fail")`,
      expectedOutput: "FAIL",
      validationType: 'output',
      standardCode: `from typing import Literal
def status(s: Literal["ok","fail"]) -> None:
    if s == "ok":
        print("OK")
    else:
        print("FAIL")
status("fail")`
    },
    {
      type: 'choice',
      question: "限制字符串仅为有限集合应优先使用？",
      options: ["Literal", "Union[str,int]", "TypedDict", "list[str]"],
      correctAnswer: "Literal"
    }
  ]
}
