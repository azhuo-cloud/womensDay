@echo off
chcp 65001 >nul
title 推送到 GitHub

echo =====================================
echo 📤 推送代码到 GitHub
echo =====================================
echo.

:: 检查是否已初始化 Git
if not exist .git (
    echo [INFO] 初始化 Git 仓库...
    git init
    echo [SUCCESS] Git 仓库已初始化
) else (
    echo [INFO] Git 仓库已存在
)

echo.
echo [STEP 1/5] 添加文件到暂存区...
git add .
if %errorlevel% neq 0 (
    echo [ERROR] 添加文件失败
    pause
    exit /b
)
echo [SUCCESS] 文件已添加

echo.
echo [STEP 2/5] 提交更改...
set commit_msg=%1
if "%commit_msg%"=="" set commit_msg=Update code
git commit -m "%commit_msg%"
if %errorlevel% neq 0 (
    echo [WARN] 没有新的更改需要提交
) else (
    echo [SUCCESS] 更改已提交
)

echo.
set remote_url=%2
if "%remote_url%"=="" (
    echo [INFO] 请输入你的 GitHub 仓库地址：
    echo       格式：https://github.com/用户名/仓库名.git
    echo.
    set /p remote_url=仓库地址：
)

if "%remote_url%"=="" (
    echo [ERROR] 仓库地址不能为空
    pause
    exit /b
)

echo.
echo [STEP 3/5] 添加远程仓库...
git remote remove origin >nul 2>&1
git remote add origin %remote_url%
if %errorlevel% neq 0 (
    echo [ERROR] 添加远程仓库失败
    pause
    exit /b
)
echo [SUCCESS] 远程仓库已添加

echo.
echo [STEP 4/5] 设置主分支...
git branch -M main
echo [SUCCESS] 主分支已设置

echo.
echo [STEP 5/5] 推送代码到 GitHub...
echo [INFO] 可能需要输入 GitHub 用户名和密码/令牌...
echo.
git push -u origin main
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] 推送失败！
    echo.
    echo 可能的原因：
    echo 1. 仓库地址不正确
    echo 2. GitHub 密码/令牌错误
    echo 3. 网络连接问题
    echo.
    echo 解决方法：
    echo 1. 检查仓库地址是否正确
    echo 2. 使用 GitHub Personal Access Token 而非密码
    echo 3. 检查网络连接
    echo.
    pause
    exit /b
)

echo.
echo =====================================
echo 🎉 代码已成功推送到 GitHub！
echo =====================================
echo.
echo 下一步：
echo 1. 访问 Render: https://render.com/
echo 2. 连接你的 GitHub 仓库
echo 3. 配置环境变量（ZHIPU_API_KEY）
echo 4. 点击 Deploy
echo.
echo =====================================
pause