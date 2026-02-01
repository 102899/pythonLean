export const workspaces = {
  'enterprise-lite': {
    id: 'enterprise-lite',
    files: {
      'requirements.txt': 'fastapi\n',
      'app/main.py': '# 入口 main：统一启动与健康检查示例\n# 说明：此文件用于代码实操展示，提供心智模型而非完整服务\n\n\ndef envelope(code, message, data):\n    # 统一响应包：code/message/data\n    return {"code": code, "message": message, "data": data}\n\n\ndef list_envelope(items, page, size):\n    # 列表响应契约：list/total/page/size\n    return envelope(200, "ok", {"list": items, "total": len(items), "page": page, "size": size})\n\n\ndef health():\n    # 健康检查：仅表示存活\n    return envelope(200, "ok", {"service": "healthy"})\n\n\ndef readiness(db_ok, cache_ok):\n    # 就绪检查：依赖全部可用才为 up\n    status = "up" if db_ok and cache_ok else "down"\n    return envelope(200, "ok", {"health": "up", "ready": status})\n\n\ndef main():\n    # 本地与生产行为一致的统一入口\n    print(health())\n\nif __name__ == "__main__":\n    main()\n',
      'app/config/loader.py': '# 配置 Loader：负责来源组合与类型转换\n\ndef load_defaults():\n    # 默认值集中管理\n    return {"host": "localhost", "port": 8080}\n\n\ndef load_file_text(text):\n    # 从文件文本（JSON）读取配置\n    import json\n    return json.loads(text)\n\n\ndef apply_env(cfg):\n    # 环境变量优先覆盖并做类型转换\n    import os\n    p = os.getenv("PORT")\n    if p:\n        cfg["port"] = int(p)\n    return cfg\n\n\ndef get_secret(key, fallback="none"):\n    # 密钥读取：环境变量优先，提供回退\n    import os\n    return os.getenv(key, fallback)\n',
      'app/config/validator.py': '# 配置 Validator：负责字段与类型边界\n\ndef validate(cfg):\n    # host 必须为 str；port 必须为 int\n    if not isinstance(cfg.get("host"), str):\n        raise ValueError("host")\n    if not isinstance(cfg.get("port"), int):\n        raise ValueError("port")\n    return cfg\n',
      'app/logging/structured.py': '# 结构化日志：单行 JSON，字段 ts/level/service/msg\nimport json, time\n\n\ndef log_line(level, service, msg):\n    entry = {\n        "ts": int(time.time() * 1000),\n        "level": level,\n        "service": service,\n        "msg": msg,\n    }\n    print(json.dumps(entry))\n\n\ndef log_info(service, msg):\n    log_line("info", service, msg)\n\n\ndef log_with_trace(level, service, msg, trace):\n    entry = {\n        "ts": int(time.time() * 1000),\n        "level": level,\n        "service": service,\n        "msg": msg,\n        "trace": trace,\n    }\n    print(json.dumps(entry))\n',
      'app/cli/entry.py': '# CLI 参数解析：与入口集成\n\ndef parse_args(args):\n    import argparse\n    p = argparse.ArgumentParser()\n    p.add_argument("--port", type=int, help="服务端口")\n    p.add_argument("--host", type=str, help="服务主机")\n    return p.parse_args(args)\n',
      'app/service/__init__.py': '# 业务服务模块：订单/库存/并发/认证与授权最小集\nfrom threading import Lock\n\n# --- 基础示例 ---\ndef ping():\n    \"\"\"健康探测示例：返回 pong\"\"\"\n    return \"pong\"\n\n# --- 参数校验 ---\ndef validate(payload):\n    \"\"\"最小参数校验：字段存在、类型与边界\"\"\"\n    if not isinstance(payload.get(\"sku\"), str):\n        return False\n    q = payload.get(\"qty\")\n    if not isinstance(q, int) or q <= 0:\n        return False\n    return True\n\n# --- 订单与库存 ---\ndef create_order(items, stock_map):\n    \"\"\"创建订单：先输入校验，再库存校验，最后统计数量\"\"\"\n    total = 0\n    for sku, qty in items:\n        if not isinstance(sku, str) or not isinstance(qty, int):\n            return (False, \"Error: input\")\n        if stock_map.get(sku, 0) < qty:\n            return (False, \"Error: stock\")\n        total += qty\n    return (True, f\"Created: {total}\")\n\n# --- 幂等创建 ---\ndef create_order_idem(items, stock_map, key, seen):\n    \"\"\"按幂等键检测重复；重复返回 Dup，新增创建成功\"\"\"\n    if key in seen:\n        return (False, \"Dup\")\n    ok, msg = create_order(items, stock_map)\n    if ok:\n        seen.add(key)\n    return (ok, msg)\n\n# --- 并发库存预留 ---\nlock = Lock()\nstock = {\"A\": 10}\n\n\ndef reserve(sku, qty):\n    \"\"\"以锁保护库存更新：成功返回 True，否则 False\"\"\"\n    with lock:\n        if stock.get(sku, 0) >= qty:\n            stock[sku] -= qty\n            return True\n        return False\n\n# --- 分页（先过滤→排序→分页） ---\ndef paginate(data, page, size, predicate=None):\n    \"\"\"分页：先过滤，再排序，最后按页切片\"\"\"\n    arr = list(data)\n    if predicate:\n        arr = [x for x in arr if predicate(x)]\n    arr = sorted(arr)\n    start = (page - 1) * size\n    end = start + size\n    return arr[start:end]\n\n# --- 重试与回退 ---\ndef retry(fn, max_attempts):\n    \"\"\"有限次重试：成功返回 (True, attempts)，失败返回 (False, attempts)\"\"\"\n    count = 0\n    while count < max_attempts:\n        try:\n            fn()\n            return (True, count + 1)\n        except Exception:\n            count += 1\n    return (False, count)\n\n# --- 认证与授权 ---\ndef check_token(token):\n    \"\"\"最小认证：令牌存在且形态满足（演示用）\"\"\"\n    return isinstance(token, str) and len(token) >= 8\n\n\ndef authorize(role, required):\n    \"\"\"最小授权：管理员放行或与所需角色一致\"\"\"\n    return role == \"admin\" or role == required\n'
    ,
      'app/auth/security.py': '# 认证与授权模块：令牌校验与角色边界\n\ndef check_token(token):\n    \"\"\"最小认证：令牌存在且形态满足（演示用）\"\"\"\n    return isinstance(token, str) and len(token) >= 8\n\n\ndef authorize(role, required):\n    \"\"\"最小授权：管理员放行或与所需角色一致\"\"\"\n    return role == \"admin\" or role == required\n',
      'app/service/orders.py': '# 订单与库存模块：输入→库存→结果\n\ndef create_order(items, stock_map):\n    \"\"\"创建订单：输入校验、库存校验、统计数量\"\"\"\n    total = 0\n    for sku, qty in items:\n        if not isinstance(sku, str) or not isinstance(qty, int):\n            return (False, \"Error: input\")\n        if stock_map.get(sku, 0) < qty:\n            return (False, \"Error: stock\")\n        total += qty\n    return (True, f\"Created: {total}\")\n',
      'app/service/idempotency.py': '# 幂等模块：基于幂等键避免重复创建\n\ndef create_order_idem(items, stock_map, key, seen):\n    \"\"\"幂等：重复返回 Dup；新建则创建成功\"\"\"\n    if key in seen:\n        return (False, \"Dup\")\n    total = 0\n    for sku, qty in items:\n        if not isinstance(sku, str) or not isinstance(qty, int):\n            return (False, \"Error: input\")\n        if stock_map.get(sku, 0) < qty:\n            return (False, \"Error: stock\")\n        total += qty\n    seen.add(key)\n    return (True, f\"Created: {total}\")\n',
      'app/service/retry.py': '# 重试模块：有限次重试与结果语义\n\ndef retry(fn, max_attempts):\n    \"\"\"成功返回 (True, attempts)，失败返回 (False, attempts)\"\"\"\n    count = 0\n    while count < max_attempts:\n        try:\n            fn()\n            return (True, count + 1)\n        except Exception:\n            count += 1\n    return (False, count)\n',
      'app/service/pagination.py': '# 分页模块：先过滤、再排序、最后分页\n\ndef paginate(data, page, size, predicate=None):\n    \"\"\"分页：predicate 过滤；升序排序；page/size 切片\"\"\"\n    arr = list(data)\n    if predicate:\n        arr = [x for x in arr if predicate(x)]\n    arr = sorted(arr)\n    start = (page - 1) * size\n    end = start + size\n    return arr[start:end]\n',
      'app/service/concurrency.py': '# 并发库存预留模块：以锁保护共享状态\nfrom threading import Lock\n\nlock = Lock()\nstock = {\"A\": 10}\n\n\ndef reserve(sku, qty):\n    \"\"\"预留库存：加锁后校验并更新\"\"\"\n    with lock:\n        if stock.get(sku, 0) >= qty:\n            stock[sku] -= qty\n            return True\n        return False\n',
      'app/logging/sampling.py': '# 日志采样模块：每 N 取 1（示例）\n\ndef sample(n, arr):\n    \"\"\"返回采样后的数组：用于理解采样心智\"\"\"\n    out = []\n    for i, x in enumerate(arr):\n        if i % n == 0:\n            out.append(x)\n    return out\n',
      'app/common/response.py': '# 响应契约模块：统一 envelope 与列表响应\n\ndef envelope(code, message, data):\n    \"\"\"统一响应包：code/message/data\"\"\"\n    return {\"code\": code, \"message\": message, \"data\": data}\n\n\ndef list_envelope(items, page, size):\n    \"\"\"列表契约：list/total/page/size\"\"\"\n    return envelope(200, \"ok\", {\"list\": items, \"total\": len(items), \"page\": page, \"size\": size})\n',
      'app/util/health.py': '# 健康与就绪模块：区分存活与就绪\n\ndef readiness(db_ok, cache_ok):\n    \"\"\"依赖全部可用才就绪 up；否则 down\"\"\"\n    status = \"up\" if db_ok and cache_ok else \"down\"\n    return {\"health\": \"up\", \"ready\": status}\n',
      'app/util/lifecycle.py': '# 服务生命周期模块：信号与退出码\n\ndef exit_code(signal_name):\n    \"\"\"根据信号名称返回退出码：SIGINT/SIGTERM 为 0，其它为 1\"\"\"\n    if signal_name in (\"SIGINT\", \"SIGTERM\"):\n        return 0\n    return 1\n',
      'app/service/inventory.py': '# 库存查询模块：读取数量\n\ndef get_qty(stock_map, sku):\n    \"\"\"返回给定 sku 的库存数量，默认 0\"\"\"\n    return int(stock_map.get(sku, 0))\n',
      'app/db/sqlite_demo.py': `# SQLite 演示模块：建表/写入/查询与模式版本
import sqlite3

def init_items(conn):
    """建表并写入两行，返回行数"""
    cur = conn.cursor()
    cur.execute("create table if not exists items(sku text, qty int)")
    cur.execute("insert into items values('A',1)")
    cur.execute("insert into items values('B',2)")
    cur.execute("select count(*) from items")
    return cur.fetchone()[0]

def migrate_version(conn, new_ver):
    """更新模式版本并返回当前版本"""
    cur = conn.cursor()
    cur.execute("create table if not exists meta(k text, v int)")
    cur.execute("insert into meta values('schema_version',1)")
    cur.execute("update meta set v=? where k='schema_version'", (new_ver,))
    cur.execute("select v from meta where k='schema_version'")
    return cur.fetchone()[0]
`
    }
  }
}
