@echo off
chcp 65001 >nul
title 安装 Git for Windows

echo =====================================
echo 🔧 安装 Git for Windows
echo =====================================
echo.

if exist Git-installer.exe (
    echo [INFO] 找到 Git 安装程序
    echo [INFO] 开始安装...
    echo.
    echo 安装过程需要 1-2 分钟，请稍候...
    echo.
    
    :: 静默安装 Git
    Git-installer.exe /VERYSILENT /NORESTART /COMPONENTS="icons,ext\reg\shellhere,assoc,assoc_sh"
    
    if %errorlevel%==0 (
        echo.
        echo =====================================
        echo ✅ Git 安装成功！
        echo =====================================
        echo.
        echo [INFO] 请关闭此窗口后，重新打开命令提示符
        echo [INFO] 然后运行: git --version
        echo.
    ) else (
        echo.
        echo =====================================
        echo ❌ Git 安装失败
        echo =====================================
        echo.
        echo 请尝试手动安装：
        echo 1. 双击 Git-installer.exe
        echo 2. 按照提示完成安装
        echo.
    )
) else (
    echo =====================================
    echo ❌ 未找到 Git 安装程序
    echo =====================================
    echo.
    echo 请先运行下载脚本或手动下载：
    echo https://git-scm.com/downloads
    echo.
)

pause