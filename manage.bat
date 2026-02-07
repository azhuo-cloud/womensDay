@echo off
chcp 65001 >nul
title 妇女节视频生成服务管理

:menu
cls
echo =====================================
echo 🌸 妇女节视频生成服务管理 🌸
echo =====================================
echo.
echo 1. 启动服务
echo 2. 停止服务
echo 3. 重启服务
echo 4. 查看服务状态
echo 5. 配置API密钥
echo 6. 打开应用
echo 0. 退出
echo.
echo =====================================
set /p choice=请选择操作 (0-6):

if "%choice%"=="1" goto start
if "%choice%"=="2" goto stop
if "%choice%"=="3" goto restart
if "%choice%"=="4" goto status
if "%choice%"=="5" goto config
if "%choice%"=="6" goto open
if "%choice%"=="0" goto exit
goto menu

:start
cls
echo =====================================
echo 正在启动服务...
echo =====================================
tasklist | findstr /i "node.exe" >nul
if %errorlevel%==0 (
    echo [!] 检测到Node进程正在运行
    echo [*] 正在停止现有进程...
    taskkill /F /IM node.exe >nul 2>&1
    timeout /t 2 /nobreak >nul
)

echo [*] 启动服务器...
start /B node server.js > server.log 2>&1
timeout /t 3 /nobreak >nul

tasklist | findstr /i "node.exe" >nul
if %errorlevel%==0 (
    echo [✓] 服务启动成功！
    echo [ℹ] 访问地址: http://localhost:3000
    type server.log
) else (
    echo [✗] 服务启动失败
    echo [ℹ] 请查看 server.log 获取详细信息
)

echo.
pause
goto menu

:stop
cls
echo =====================================
echo 正在停止服务...
echo =====================================
tasklist | findstr /i "node.exe" >nul
if %errorlevel%==0 (
    taskkill /F /IM node.exe >nul 2>&1
    echo [✓] 服务已停止
) else (
    echo [ℹ] 未检测到运行中的服务
)

echo.
pause
goto menu

:restart
cls
echo =====================================
echo 正在重启服务...
echo =====================================
taskkill /F /IM node.exe >nul 2>&1
timeout /t 2 /nobreak >nul
goto start

:status
cls
echo =====================================
echo 服务状态
echo =====================================
tasklist | findstr /i "node.exe" >nul
if %errorlevel%==0 (
    echo [✓] 服务正在运行
    echo [ℹ] 访问地址: http://localhost:3000

    echo.
    echo 当前运行的Node进程：
    tasklist | findstr /i "node.exe"
) else (
    echo [✗] 服务未运行
)

echo.
pause
goto menu

:config
cls
echo =====================================
echo 配置API密钥
echo =====================================
echo.

if exist .env (
    echo 当前配置：
    type .env | findstr "ZHIPU_API_KEY"
    echo.
)

echo [*] 请按以下步骤配置API密钥：
echo.
echo 1. 访问：https://open.bigmodel.cn/
echo 2. 注册/登录账号
echo 3. 在控制台创建 API Key
echo 4. 复制密钥（格式：sk-xxxxxxxxxxxx）
echo 5. 编辑 .env 文件，替换 your_api_key_here
echo.

set /p open=是否打开注册页面？(y/n):
if /i "%open%"=="y" start https://open.bigmodel.cn/

set /p edit=是否现在编辑 .env 文件？(y/n):
if /i "%edit%"=="y" notepad .env

echo.
pause
goto menu

:open
cls
echo =====================================
echo 正在打开应用...
echo =====================================
start http://localhost:3000
pause
goto menu

:exit
cls
echo 感谢使用！
echo.
pause
exit