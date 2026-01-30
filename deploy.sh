#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 1. 生成静态文件
pnpm build

# 2. 进入生成的文件夹
cd dist

# 3. 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

# 4. 初始化 Git 仓库并提交
git init
git add -A
git commit -m 'deploy: packaging project artifacts'

# 5. 推送到 GitHub Pages 分支 (gh-pages)
# 强制推送到远程仓库的 gh-pages 分支
git push -f https://github.com/102899/pythonLean.git main:gh-pages

cd -
