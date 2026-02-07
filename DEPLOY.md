# 妇女节照片生成视频应用 - 部署指南

## 🚀 快速部署到公网

### 方案一：使用 Render 部署（推荐）

Render 是一个免费且简单的云平台，非常适合快速部署 Node.js 应用。

#### 步骤：

1. **准备工作**
   - 注册 Render 账号：https://render.com/
   - 注册智谱AI账号并获取API密钥：https://open.bigmodel.cn/

2. **准备代码**
   ```bash
   # 确保所有文件都已提交到 Git
   git add .
   git commit -m "妇女节视频生成应用"
   ```

3. **推送到 GitHub**
   - 创建新的 GitHub 仓库
   - 推送代码：
     ```bash
     git remote add origin https://github.com/你的用户名/仓库名.git
     git branch -M main
     git push -u origin main
     ```

4. **在 Render 部署**
   - 登录 Render 控制台
   - 点击 "New +"
   - 选择 "Web Service"
   - 连接你的 GitHub 仓库
   - 配置：
     - **Name**: womens-day-video（自定义）
     - **Runtime**: Node
     - **Build Command**: `npm install`
     - **Start Command**: `node server.js`
   - 添加环境变量：
     - 在 "Environment Variables" 部分添加：
       - `ZHIPU_API_KEY`: 你的智谱AI API密钥
       - `PORT`: 3000（Render会自动设置，但可以指定）
   - 点击 "Deploy Web Service"

5. **等待部署完成**
   - 部署通常需要 2-3 分钟
   - 完成后会获得一个公网 URL，如：https://womens-day-video.onrender.com

6. **测试应用**
   - 访问你的 Render URL
   - 上传照片测试视频生成功能

### 方案二：使用 Vercel 部署

Vercel 是另一个优秀的部署平台，特别适合前端应用。

#### 步骤：

1. **安装 Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **配置 vercel.json**
   （已在项目中创建）

3. **部署**
   ```bash
   vercel
   ```
   - 按提示登录 Vercel 账号
   - 设置项目名称
   - 添加环境变量 `ZHIPU_API_KEY`

4. **部署到生产环境**
   ```bash
   vercel --prod
   ```

### 方案三：使用 Railway 部署

Railway 是一个简单易用的部署平台。

#### 步骤：

1. **注册 Railway**: https://railway.app/

2. **从 GitHub 部署**
   - 点击 "New Project"
   - "Deploy from GitHub repo"
   - 选择你的仓库
   - 添加环境变量 `ZHIPU_API_KEY`
   - 点击 "Deploy"

3. **获取公网地址**
   - Railway 会自动生成公网 URL
   - 也可以绑定自定义域名

## 🔧 本地开发

### 环境准备

1. **安装 Node.js** (版本 14+)
   - 下载：https://nodejs.org/

2. **克隆或下载代码**
   ```bash
   cd D:\opencode
   ```

3. **安装依赖**
   ```bash
   npm install
   ```

4. **配置环境变量**
   - 复制 `.env.example` 到 `.env`
   - 编辑 `.env` 文件，添加你的智谱API密钥：
     ```bash
     copy .env.example .env
     # 然后编辑 .env 文件
     ```

5. **启动服务**
   ```bash
   npm start
   ```
   或使用开发模式（支持热重载）：
   ```bash
   npm run dev
   ```

6. **访问应用**
   - 打开浏览器访问: http://localhost:3000

## 📋 获取智谱AI API密钥

1. **注册智谱AI账号**
   - 访问：https://open.bigmodel.cn/
   - 点击 "立即体验" 或 "注册"

2. **获取API密钥**
   - 登录后进入控制台
   - 在 "API Keys" 页面创建新的 API Key
   - 复制密钥（格式如：`sk-xxxxxxxxxxxx`）

3. **充值（可选）**
   - 新账号通常有免费额度
   - 根据使用需求可以充值

## 🌐 访问部署的应用

### 域名说明

- **Render**: 自动生成 `.onrender.com` 域名
- **Vercel**: 自动生成 `.vercel.app` 域名
- **Railway**: 自动生成 `.railway.app` 域名

### 自定义域名

所有平台都支持绑定自定义域名：
1. 在你的域名注册商处添加 CNAME 记录
2. 在部署平台配置自定义域名

## 📊 使用统计和监控

### Render 内置监控
- 自动监控 CPU、内存、网络
- 日志查看
- 部署历史

### 添加监控（可选）
可以考虑集成：
- **Sentry**: 错误监控
- **Google Analytics**: 访问统计
- **UptimeRobot**: 服务可用性监控

## 🔒 安全建议

1. **API密钥安全**
   - 不要将 `.env` 文件提交到 Git
   - 在部署平台通过环境变量配置密钥
   - 定期轮换 API 密钥

2. **限流保护**
   - 可以添加速率限制中间件
   - 防止滥用

3. **文件清理**
   - 代码中已包含自动清理功能（24小时）
   - 可根据需要调整清理频率

## 💰 成本估算

### Render（免费版）
- **限制**: 750小时/月（足够个人使用）
- **CPU**: 0.1 CPU
- **内存**: 512MB RAM
- **存储**: 10GB
- **费用**: $0/月

### 智谱AI API
- **免费额度**: 新用户有免费调用次数
- **计费**: 按视频生成次数和时长计费
- **参考**: 具体价格请查看智谱AI官网

## 📞 技术支持

如果遇到问题：
1. 查看部署平台的日志
2. 检查环境变量是否正确配置
3. 确认智谱AI API密钥有效
4. 查看浏览器控制台错误信息

## 🎉 部署成功后

1. **分享链接**
   - 将部署后的 URL 分享给公司员工
   - 可以在微信群、企业微信中分享

2. **收集反馈**
   - 观察使用情况
   - 收集用户反馈
   - 根据反馈优化

3. **数据备份**
   - 定期备份生成的视频文件
   - 记录使用统计数据

祝你部署顺利，妇女节快乐！🌸