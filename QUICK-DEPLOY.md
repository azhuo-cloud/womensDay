# 🚀 部署到公网 - 最简单的三步法

## 🎯 目标：让公司同事都能访问

---

## 📋 准备工作（5分钟）

### 1. 检查这些文件是否存在

打开 `D:\opencode` 目录，确认有以下文件：

✅ `index.html` - 前端页面
✅ `server.js` - 后端服务器
✅ `style-prompts.js` - 风格配置
✅ `package.json` - 项目配置
✅ `.gitignore` - Git忽略文件

### 2. 注册账号（如果还没有）

**GitHub 账号：**
- 访问：https://github.com/
- 注册或登录

**Render 账号：**
- 访问：https://render.com/
- 用 GitHub 账号登录（推荐）

### 3. 准备 API 密钥

确保你有智谱AI API密钥：
- 格式：`sk.xxxxxxxxxxxxx`
- 有效且可用

---

## 🚀 部署步骤（10分钟）

### 方法1：使用自动化脚本（最简单）⭐

#### 第1步：推送到 GitHub

1. **双击运行** `push-to-github.bat`
2. 按提示操作：
   - 输入 GitHub 仓库地址（如：`https://github.com/你的用户名/你的仓库名.git`）
   - 如果需要，输入 GitHub 用户名和密码/令牌
3. 等待推送完成

**如果遇到问题，使用方法2**

#### 第2步：在 Render 部署

1. 访问：https://dashboard.render.com/
2. 点击 **"New +"**
3. 选择 **"Web Service"**
4. 连接你的 GitHub 仓库
5. 配置：

| 配置项 | 值 |
|--------|-----|
| Name | womens-day-video |
| Region | 选择离你最近的 |
| Runtime | Node |
| Build Command | npm install |
| Start Command | node server.js |
| Instance Type | Free |

6. 添加环境变量：
   - 点击 "Add Environment Variable"
   - 输入：`ZHIPU_API_KEY`
   - 值：你的智谱AI API密钥（如：`sk.xxxxxxxxxxxxx`）
   - 点击 "Save"

7. 点击 **"Deploy Web Service"**

#### 第3步：等待部署

- 等待 2-3 分钟
- 看到 "Deploy succeeded" 表示成功

#### 第4步：获取公网地址

在项目页面会看到：
```
Live App: https://womens-day-video.onrender.com
```

**这就是你的公网地址！**

---

### 方法2：手动操作（备用）

#### 第1步：创建 GitHub 仓库

1. 访问：https://github.com/new
2. 仓库名：`womens-day-video`
3. 设为 Public 或 Private（推荐 Public）
4. 点击 "Create repository"

#### 第2步：推送代码

打开命令提示符（CMD），运行：

```bash
cd D:\opencode

# 初始化 Git
git init
git add .
git commit -m "Initial commit"

# 连接 GitHub（替换你的信息）
git remote add origin https://github.com/你的用户名/你的仓库名.git

# 设置主分支
git branch -M main

# 推送代码
git push -u origin main
```

**如果要求登录：**
- Username：你的 GitHub 用户名
- Password：你的 GitHub Personal Access Token（不是密码）

**获取 Personal Access Token：**
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. 点击 "Generate new token (classic)"
3. 勾选 "repo" 权限
4. 点击 "Generate token"
5. 复制生成的 token（只显示一次，立即复制）

#### 第3步：在 Render 部署

同方法1的第2-4步

---

## 📱 分享给同事

### 1. 复制公网地址

```
https://womens-day-video.onrender.com
```

### 2. 分享方式

**企业微信：**
```
🌸 妇女节特别企划！

科技社为大家准备了照片生成视频工具！

📱 访问地址：https://womens-day-video.onrender.com

✨ 使用方法：
1. 上传照片
2. 选择风格（浪漫花瓣/星光璀璨/魔法闪光）
3. 等待2-5分钟
4. 下载分享

祝大家妇女节快乐！🌸
```

**邮件：**
```
主题：妇女节照片生成视频工具已上线

各位同事：

科技社为大家准备了妇女节特别企划！

工具地址：https://womens-day-video.onrender.com

使用说明：
1. 上传清晰的个人照片
2. 选择喜欢的风格
3. AI自动生成视频（2-5分钟）
4. 下载并分享

祝大家妇女节快乐！

科技社
```

---

## ✅ 部署验证

部署完成后，检查：

- [ ] 公网地址可以访问
- [ ] 页面显示正常
- [ ] 可以上传照片
- [ ] 可以选择风格
- [ ] 可以生成视频
- [ ] 视频可以播放和下载

---

## 🔧 常见问题

### Q1: GitHub 推送失败

**A:**
1. 确认仓库地址正确
2. 使用 Personal Access Token 而非密码
3. 检查网络连接

### Q2: Render 部署失败

**A:**
1. 查看 Build Log
2. 确认环境变量已配置
3. 检查 `package.json` 配置

### Q3: 部署成功但无法访问

**A:**
1. 确认环境变量 ZHIPU_API_KEY 已添加
2. 检查 API 密钥是否正确
3. 查看 Render 日志

### Q4: 视频生成失败

**A:**
1. 确认 API 密钥有效
2. 检查 API 额度是否充足
3. 查看详细日志

---

## 💰 成本说明

### Render 免费额度

✅ **完全免费**
- 750 小时/月（24/7 运行）
- 0.1 CPU
- 512MB RAM
- 10GB 存储

**费用：$0/月**

### 智谱 AI API

按使用量计费，新用户有免费额度。

---

## 🎯 成功部署标志

如果你看到这些，说明部署成功：

1. ✅ Render 显示 "Deploy succeeded"
2. ✅ 点击 "Live App" 链接可以访问
3. ✅ 页面正常显示
4. ✅ 功能可以正常使用

---

## 🎉 恭喜！

**你的应用已部署到公网！**

**公网地址：** `https://womens-day-video.onrender.com`

**现在可以：**
- ✅ 分享给公司所有同事
- ✅ 让大家体验 AI 视频生成
- ✅ 收集用户反馈
- ✅ 持续优化改进

---

## 📞 需要帮助？

查看详细文档：
- **快速部署指南**：`DEPLOY-PUBLIC.md`
- **部署检查清单**：`DEPLOY-CHECKLIST.md`
- **问题排查**：`TROUBLESHOOTING-500.md`

---

**开始部署吧！10分钟后就能分享给同事了！** 🚀🌸