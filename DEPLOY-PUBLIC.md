# 🚀 快速部署到公网指南

## 🎯 三种部署方案（推荐顺序）

1. **Render** ⭐ 最推荐 - 免费、简单、稳定
2. **Vercel** - 快速、免费、适合前端
3. **Railway** - 简单、免费

---

## 🏆 方案1：Render 部署（最推荐）

### 为什么选择 Render？

✅ **完全免费** - 750小时/月（足够使用）  
✅ **超简单** - 三步完成部署  
✅ **自动HTTPS** - 安全连接  
✅ **持续部署** - 代码更新自动部署  
✅ **内置日志** - 方便调试  

### 准备工作

#### 1. 注册账号

1. 访问：https://render.com/
2. 点击右上角 "Sign Up"
3. 使用 GitHub 账号登录（推荐）
4. 完成邮箱验证

#### 2. 准备代码

确保你的代码在 **GitHub 仓库** 中：

```bash
cd D:\opencode

# 初始化 Git 仓库（如果还没有）
git init
git add .
git commit -m "Initial commit"

# 连接到 GitHub
git remote add origin https://github.com/你的用户名/你的仓库名.git

# 推送代码
git branch -M main
git push -u origin main
```

### 开始部署

#### 步骤1：创建 Web Service

1. 登录 Render 控制台
2. 点击右上角 **"New +"**
3. 选择 **"Web Service"**

#### 步骤2：连接 GitHub 仓库

1. 在 "Connect a repository" 部分找到你的仓库
2. 如果找不到，点击 "Configure account" 授权
3. 点击 **"Connect"** 连接你的仓库

#### 步骤3：配置服务

填写以下信息：

**Name（服务名称）**
```
womens-day-video
```

**Region（地区）**
```
选择离你最近的区域（如 Singapore）
```

**Branch（分支）**
```
main
```

**Runtime（运行环境）**
```
Node
```

**Build Command（构建命令）**
```
npm install
```

**Start Command（启动命令）**
```
node server.js
```

**Instance Type（实例类型）**
```
Free
```

#### 步骤4：添加环境变量

滚动到 **"Environment Variables"** 部分，点击 **"Add"** 添加：

```
变量名: ZHIPU_API_KEY
值: 你的智谱AI API密钥（如：sk.xxxxxxxxxxxxx）
```

**重要：**
- API 密钥格式：`sk.xxxxxxxxxxxxx`
- 确保密钥正确且有效
- 这个密钥不会被公开

#### 步骤5：部署

1. 检查所有配置是否正确
2. 点击右下角的 **"Deploy Web Service"**
3. 等待 2-3 分钟

### 获取公网地址

部署完成后，你会看到：

```
🎉 Live App: https://womens-day-video.onrender.com
```

这就是你的公网地址！分享给同事即可访问。

### 访问应用

**主页面：** `https://womens-day-video.onrender.com`

**健康检查：** `https://womens-day-video.onrender.com/health`

---

## 🌟 方案2：Vercel 部署

### 为什么选择 Vercel？

✅ **部署速度快** - 几秒钟完成  
✅ **免费额度** - 适合个人使用  
✅ **自动HTTPS** - 内置SSL证书  
✅ **全球CDN** - 访问速度快  
✅ **域名绑定** - 支持自定义域名  

### 准备工作

#### 1. 安装 Vercel CLI

```bash
npm install -g vercel
```

#### 2. 登录

```bash
vercel login
```
按照提示登录（推荐用 GitHub 账号）

### 开始部署

#### 步骤1：进入项目目录

```bash
cd D:\opencode
```

#### 步骤2：部署

```bash
vercel
```

按照提示操作：

1. **Set up and deploy "D:\opencode"?** `Y`
2. **Which scope do you want to deploy to?** 选择你的账号
3. **Link to existing project?** `N`
4. **What's your project's name?** 输入项目名（如：womens-day-video）
5. **In which directory is your code located?** `./`
6. **Want to modify these settings?** `N`

#### 步骤3：添加环境变量

部署完成后，在浏览器打开：https://vercel.com

1. 进入你的项目
2. 点击 **"Settings"**
3. 点击 **"Environment Variables"**
4. 添加：

```
Name: ZHIPU_API_KEY
Value: 你的智谱AI API密钥
```

5. 点击 **"Save"**
6. 点击 **"Redeploy"** 重新部署

#### 步骤4：生产环境部署

```bash
vercel --prod
```

### 获取公网地址

部署完成后，终端会显示：

```
🎉 Production: https://womens-day-video.vercel.app
```

---

## 🚀 方案3：Railway 部署

### 为什么选择 Railway？

✅ **界面友好** - 操作简单  
✅ **免费额度** - 适合测试  
✅ **一键部署** - 从 GitHub 部署  
✅ **实时日志** - 方便调试  

### 开始部署

#### 步骤1：注册账号

1. 访问：https://railway.app/
2. 点击 "Start a New Project"
3. 使用 GitHub 账号登录

#### 步骤2：部署项目

1. 点击 **"Deploy from GitHub repo"**
2. 找到你的仓库并点击
3. Railway 会自动检测 Node.js 项目
4. 确认配置后点击 **"Deploy Now"**

#### 步骤3：添加环境变量

1. 进入项目设置
2. 点击 **"Variables"** 标签
3. 添加：

```
ZHIPU_API_KEY = 你的智谱AI API密钥
```

4. 保存后会自动重新部署

### 获取公网地址

在项目页面会显示你的公网地址：

```
https://your-project.railway.app
```

---

## 📋 部署前检查清单

### ✅ 代码准备

- [ ] 代码已推送到 GitHub
- [ ] `.env` 文件在 `.gitignore` 中（不会提交）
- [ ] API 密钥正确配置

### ✅ 账号准备

- [ ] Render/Vercel/Railway 账号已注册
- [ ] 账号已登录
- [ ] GitHub 已授权

### ✅ 配置检查

- [ ] 构建命令：`npm install`
- [ ] 启动命令：`node server.js`
- [ ] 环境变量：`ZHIPU_API_KEY` 已添加
- [ ] 实例类型：Free（免费）

---

## 🔧 部署后配置

### 1. 测试访问

打开你的公网地址，确认：
- [ ] 页面可以正常打开
- [ ] 可以上传照片
- [ ] 可以生成视频
- [ ] 视频可以正常播放和下载

### 2. 查看日志

**Render:**
1. 进入项目页面
2. 点击 "Logs" 标签
3. 查看实时日志

**Vercel:**
1. 进入项目页面
2. 点击 "Logs" 标签
3. 查看部署和访问日志

### 3. 更新代码

**Render:** 自动部署
- 推送代码到 GitHub
- Render 自动检测并重新部署

**Vercel:** 手动部署
```bash
vercel --prod
```

**Railway:** 自动部署
- 推送代码到 GitHub
- Railway 自动检测并重新部署

---

## 🌐 自定义域名（可选）

### Render 域名绑定

1. 进入项目设置
2. 点击 "Domains" 标签
3. 添加你的域名（如：womensday.yourcompany.com）
4. 按照 Render 提示配置 DNS 记录

### Vercel 域名绑定

1. 进入项目设置
2. 点击 "Domains" 标签
3. 添加你的域名
4. 按照 Vercel 提示配置 DNS 记录

---

## 💰 成本说明

### Render

- **免费版**：
  - 750 小时/月（足够个人使用）
  - 0.1 CPU
  - 512MB RAM
  - 10GB 存储

- **费用**：$0/月

### Vercel

- **免费版**：
  - 100GB 带宽/月
  - 无限部署
  - 自动HTTPS

- **费用**：$0/月

### Railway

- **免费版**：
  - $5 免费额度/月
  - 足够小型项目使用

- **费用**：$0/月

---

## 📞 常见问题

### Q1: 部署失败怎么办？

**A:**
1. 检查 GitHub 仓库是否正确连接
2. 查看 Build Log 查看错误信息
3. 确认 `package.json` 配置正确
4. 确认启动命令是 `node server.js`

### Q2: 环境变量怎么配置？

**A:**
在部署平台的 "Environment Variables" 部分添加：
- 变量名：`ZHIPU_API_KEY`
- 值：你的智谱AI API密钥

### Q3: 视频生成失败怎么办？

**A:**
1. 检查环境变量中的 API 密钥是否正确
2. 查看部署平台的日志
3. 确认 API 密钥有足够的额度

### Q4: 如何更新代码？

**A:**
- **Render**: 推送代码到 GitHub，自动部署
- **Vercel**: 运行 `vercel --prod`
- **Railway**: 推送代码到 GitHub，自动部署

### Q5: 访问速度慢怎么办？

**A:**
1. 选择离用户最近的 Region（Render）
2. 使用 CDN（Vercel 内置）
3. 考虑升级到付费版

### Q6: 免费版够用吗？

**A:**
对于公司内部使用（几十人到几百人），免费版完全够用：
- Render: 750小时/月（几乎24小时在线）
- Vercel: 100GB带宽/月（足够）
- Railway: $5额度/月（足够）

---

## 🎯 推荐选择

### 最推荐：Render ✅

**理由：**
- 最简单（连接 GitHub 一键部署）
- 最稳定（运行时间长）
- 最适合（Node.js 后端）
- 完全免费

### 快速测试：Vercel ⚡

**理由：**
- 部署速度最快
- 适合快速迭代
- 前端优化好

---

## 🚀 立即开始

### 最快部署方式（Render，3分钟）

1. 注册 Render 账号：https://render.com/
2. 连接 GitHub 仓库
3. 配置环境变量（ZHIPU_API_KEY）
4. 点击 Deploy

**3分钟后，你就能分享公网地址给同事了！**

---

## 📱 分享给同事

部署成功后，你可以：

1. **复制公网地址**
   ```
   https://womens-day-video.onrender.com
   ```

2. **分享方式**
   - 在企业微信群发送
   - 在部门公告发布
   - 发送邮件通知
   - 在公司内网发布

3. **使用说明**
   - 打开链接
   - 上传照片
   - 选择风格
   - 生成视频（2-5分钟）
   - 下载分享

---

**开始部署吧！3分钟后就能分享给同事了！** 🚀