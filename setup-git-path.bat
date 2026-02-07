@echo off
chcp 65001 >nul
title 设置 Git 环境变量

echo =====================================
echo 🔧 设置 Git 环境变量
echo =====================================
echo.

:: 检查 Git 是否已安装
if exist "C:\Program Files\Git\cmd\git.exe" (
    echo [✓] Git 已安装
    echo [INFO] Git 路径: C:\Program Files\Git\cmd
    echo.
) else (
    echo [✗] Git 未安装在默认位置
    echo [INFO] 请手动添加 Git 路径到系统环境变量
    echo.
    pause
    exit /b
)

echo [INFO] 正在配置 Git 到用户环境变量...
echo.

:: 添加 Git 到用户 PATH
setx PATH "%PATH%;C:\Program Files\Git\cmd" /M

if %errorlevel%==0 (
    echo.
    echo =====================================
    echo ✅ Git 环境变量设置成功！
    echo =====================================
    echo.
    echo [INFO] Git 已添加到系统 PATH
    echo [INFO] 路径: C:\Program Files\Git\cmd
    echo.
    echo [重要] 请重新打开命令提示符以使更改生效
    echo.
    echo 验证方法：
    echo   1. 关闭此窗口
    echo   2. 重新打开命令提示符
    echo   3. 运行: git --version
    echo.
) else (
    echo.
    echo =====================================
    echo ❌ 环境变量设置失败
    echo =====================================
    echo.
    echo 请尝试手动设置：
    echo   1. 按 Win + R，输入: sysdm.cpl
    echo   2. 点击"高级" → "环境变量"
    echo   3. 在系统变量的 Path 中添加:
    echo      C:\Program Files\Git\cmd
    echo.
)

pause