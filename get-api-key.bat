@echo off
chcp 65001 >nul
echo =====================================
echo 🌸 获取智谱AI API密钥指南 🌸
echo =====================================
echo.
echo 1. 访问智谱AI官网注册账号：
echo    https://open.bigmodel.cn/
echo.
echo 2. 登录后进入控制台
echo.
echo 3. 在 "API Keys" 页面创建新的 API Key
echo.
echo 4. 复制生成的密钥（格式如：sk-xxxxxxxxxxxx）
echo.
echo 5. 将密钥粘贴到 .env 文件中
echo.
echo =====================================
echo 按任意键打开注册页面...
echo =====================================
pause

start https://open.bigmodel.cn/

echo.
echo =====================================
echo 注册并获取API密钥后，请按以下步骤操作：
echo =====================================
echo.
echo 1. 打开 D:\opencode\.env 文件
echo 2. 将 your_api_key_here 替换为你的实际密钥
echo 3. 保存文件
echo 4. 重启服务器
echo.
echo =====================================
pause