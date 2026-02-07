# 🌸 妇女节照片生成视频应用

一个基于智谱CogVideoX-3模型的妇女节主题照片生成视频应用，用户可以上传照片，选择节日风格，AI自动生成精美的节日视频。

## ✨ 功能特性

### 🎨 三种精美风格
- **浪漫花瓣** 🌸 - 粉色樱花花瓣缓缓飘落，营造浪漫氛围
- **星光璀璨** 💫 - 梦幻星光和光晕点缀，展现独特魅力
- **魔法闪光** ✨ - 魔法粒子闪烁环绕，创造奇幻效果

### 🚀 核心功能
- 一键上传照片
- 智能风格选择
- AI视频生成
- 视频在线预览
- 下载分享功能

### 💡 技术亮点
- 集成智谱CogVideoX-3最新模型
- 响应式设计，支持移动端
- 美观的UI/UX设计
- 快速部署，一键公网访问
- 自动文件清理

## 📸 使用场景

- **个人纪念**: 为女性朋友制作节日祝福视频
- **团队活动**: 公司妇女节团队活动
- **礼品制作**: 个性化节日礼物
- **社交媒体**: 制作精美的节日内容

## 🛠️ 技术栈

### 前端
- HTML5 + CSS3
- Vanilla JavaScript
- 响应式设计
- 拖拽上传

### 后端
- Node.js + Express
- Multer (文件上传)
- Axios (HTTP请求)
- 智谱AI API集成

### 部署
- Render / Vercel / Railway
- 环境变量配置
- 自动化部署

## 🚀 快速开始

### 本地运行

1. **克隆项目**
   ```bash
   git clone <your-repo-url>
   cd <project-directory>
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **配置环境变量**
   ```bash
   cp .env.example .env
   # 编辑 .env 文件，填入你的智谱AI API密钥
   ```

4. **启动服务**
   ```bash
   npm start
   ```

5. **访问应用**
   - 打开浏览器访问: http://localhost:3000

### 快速部署到公网

详细部署指南请查看 [DEPLOY.md](DEPLOY.md)

支持的部署平台：
- **Render** (推荐) - https://render.com/
- **Vercel** - https://vercel.com/
- **Railway** - https://railway.app/

## 📋 获取智谱AI API密钥

1. 注册智谱AI账号: https://open.bigmodel.cn/
2. 进入控制台，创建 API Key
3. 复制密钥，格式如：`sk-xxxxxxxxxxxx`
4. 将密钥配置到环境变量 `ZHIPU_API_KEY`

## 📂 项目结构

```
├── index.html              # 前端页面
├── server.js               # 后端服务器
├── package.json            # 项目依赖
├── .env.example            # 环境变量模板
├── .gitignore              # Git忽略文件
├── vercel.json             # Vercel部署配置
├── README.md               # 项目说明
├── DEPLOY.md               # 部署指南
├── uploads/                # 上传文件目录（自动创建）
└── generated/              # 生成视频目录（自动创建）
```

## 🔧 配置说明

### 环境变量

在 `.env` 文件中配置：

```env
# 智谱AI API密钥（必需）
ZHIPU_API_KEY=your_api_key_here

# 服务器端口（可选，默认3000）
PORT=3000

# 节点环境（可选）
NODE_ENV=production
```

### 风格配置

可以在 `server.js` 中修改风格提示词：

```javascript
const styles = {
    petals: {
        prompt: 'A beautiful woman surrounded by falling cherry blossom petals...',
    },
    // ... 其他风格
};
```

## 📊 API 接口

### 健康检查
```
GET /health
```

### 生成视频
```
POST /api/generate
Content-Type: multipart/form-data

Body:
- image: 图片文件
- style: 风格ID (petals/lights/sparkles)
- prompt: 提示词
```

### 获取风格列表
```
GET /api/styles
```

## 🎯 使用流程

1. **上传照片**
   - 点击上传区域或拖拽照片
   - 支持JPG、PNG格式
   - 建议尺寸1024x1024

2. **选择风格**
   - 浏览三种风格选项
   - 点击选择喜欢的风格

3. **生成视频**
   - 点击"生成视频"按钮
   - 等待AI处理（通常30-60秒）
   - 视频生成完成后自动显示

4. **下载分享**
   - 点击下载按钮保存视频
   - 或使用分享功能分享链接

## ⚙️ 性能优化

- 自动清理24小时前的文件
- 支持异步处理
- 限流保护（可扩展）
- CDN加速（可配置）

## 🔒 安全建议

- 不要将 `.env` 文件提交到版本控制
- 使用环境变量管理敏感信息
- 定期轮换API密钥
- 添加访问限制（可选）

## 💰 成本估算

### 免费方案
- **Render**: 750小时/月（足够个人使用）
- **Vercel**: 免费额度
- **智谱AI**: 新用户免费额度

### 付费方案
- **智谱API**: 按视频生成次数和时长计费
- 具体价格请查看智谱AI官网

## 📞 技术支持

### 常见问题

1. **视频生成失败**
   - 检查API密钥是否正确
   - 查看服务器日志
   - 确认图片格式和大小

2. **部署后无法访问**
   - 检查部署状态
   - 查看环境变量配置
   - 确认服务已启动

3. **生成速度慢**
   - 取决于智谱API响应时间
   - 可以调整API参数优化

### 联系方式

如有问题，请提交 Issue 或联系开发团队。

## 🙏 致谢

- 智谱AI CogVideoX-3模型
- Render/Vercel 部署平台
- 开源社区

## 📄 许可证

MIT License

## 🌟 特色亮点

- **节日主题**: 专为妇女节设计，温馨浪漫
- **智能AI**: 采用最新CogVideoX-3模型
- **操作简单**: 三步完成视频生成
- **快速部署**: 支持多个云平台，一键上线
- **美观界面**: 精心设计的UI/UX体验
- **响应式**: 完美支持手机和电脑

---

**🌸 妇女节快乐！用AI为女性朋友们创造美好回忆！ 🌸**

---

**公司科技社出品 | 用科技传递温暖**