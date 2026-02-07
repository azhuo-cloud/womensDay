@echo off
chcp 65001 >nul
title 启动妇女节视频生成服务

echo =====================================
echo 🌸 妇女节视频生成服务 🌸
echo =====================================
echo.

:: 检查是否有Node进程在运行
tasklist | findstr /i "node.exe" >nul
if %errorlevel%==0 (
    echo [!] 检测到Node进程正在运行
    echo [*] 正在停止现有进程...
    taskkill /F /IM node.exe >nul 2>&1
    timeout /t 2 /nobreak >nul
    echo [✓] 旧进程已停止
    echo.
)

:: 检查API密钥配置
findstr /C:"your_api_key_here" .env >nul
if %errorlevel%==0 (
    echo =====================================
    echo ⚠️  警告：API密钥未配置！
    echo =====================================
    echo.
    echo 当前API密钥为默认值，视频生成功能将无法使用。
    echo.
    echo [*] 请按以下步骤配置：
    echo    1. 访问：https://open.bigmodel.cn/
    echo    2. 注册/登录并获取API Key
    echo    3. 编辑 .env 文件，填入你的密钥
    echo.
    set /p continue=是否继续启动服务？(y/n):
    if /i not "%continue%"=="y" (
        echo 已取消启动
        pause
        exit /b
    )
    echo.
)

:: 启动服务器
echo [*] 正在启动服务器...
echo.
node server.js

:: 如果服务器退出，显示信息
echo.
echo =====================================
echo 服务器已停止
echo =====================================
echo.
echo 如需重新启动，请再次运行此脚本
echo 或使用 manage.bat 进行服务管理
echo.
pause