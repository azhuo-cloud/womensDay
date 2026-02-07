# 🎨 风格提示词配置指南

## 📍 提示词位置

三种风格的视频提示词保存在 `index.html` 文件中：

**文件路径：** `D:\opencode\index.html`
**位置：** 第 504-517 行（JavaScript 部分）

```javascript
const styles = {
    petals: {
        prompt: 'A beautiful woman surrounded by falling cherry blossom petals, romantic and elegant atmosphere, soft pink petals drifting down gracefully, cinematic lighting, high quality, 4K',
        name: '浪漫花瓣'
    },
    lights: {
        prompt: 'A stunning portrait with magical sparkling lights and glowing particles around, dreamy and ethereal atmosphere, starlight effect, bokeh, cinematic, high quality, 4K',
        name: '星光璀璨'
    },
    sparkles: {
        prompt: 'A gorgeous portrait with magical sparkles and glittering particles swirling around, enchanting and fantastical atmosphere, fairy dust effect, shimmering lights, cinematic, high quality, 4K',
        name: '魔法闪光'
    }
};
```

## 🔧 如何手工调整

### 方法1：直接编辑 index.html（推荐）

#### 步骤1：打开文件
1. 使用 VS Code 或其他代码编辑器打开 `D:\opencode\index.html`
2. 或者直接用记事本打开

#### 步骤2：找到提示词位置
- 搜索关键词：`const styles = {`
- 或者搜索：`浪漫花瓣`

#### 步骤3：修改提示词
找到对应的风格，修改 `prompt` 字段的值：

```javascript
// 修改前
petals: {
    prompt: 'A beautiful woman surrounded by falling cherry blossom petals...',
    name: '浪漫花瓣'
},

// 修改后（例如改成中文）
petals: {
    prompt: '一位美丽的女性被飘落的樱花花瓣包围，浪漫优雅的氛围，柔和的粉色花瓣优雅地飘落，电影级光照，高质量，4K',
    name: '浪漫花瓣'
},
```

#### 步骤4：保存文件
- 按 `Ctrl + S` 保存
- 或点击文件 → 保存

#### 步骤5：刷新浏览器
- 在浏览器中按 `F5` 刷新页面
- 新的提示词就会生效

### 方法2：添加自定义风格

你可以添加第四种、第五种风格：

```javascript
const styles = {
    // 保留原有三种风格
    petals: {
        prompt: 'A beautiful woman surrounded by falling cherry blossom petals...',
        name: '浪漫花瓣'
    },
    lights: {
        prompt: 'A stunning portrait with magical sparkling lights...',
        name: '星光璀璨'
    },
    sparkles: {
        prompt: 'A gorgeous portrait with magical sparkles...',
        name: '魔法闪光'
    },

    // 添加新风格
    fireflies: {
        prompt: 'A beautiful woman surrounded by glowing fireflies in a night scene, magical and romantic atmosphere, warm golden lights flickering, cinematic lighting, high quality, 4K',
        name: '萤火虫'
    },

    snow: {
        prompt: 'A stunning portrait with snowflakes gently falling around, winter wonderland atmosphere, white snowflakes drifting down, cinematic lighting, high quality, 4K',
        name: '飘雪'
    }
};
```

**注意：** 添加新风格后，还需要在 HTML 中添加对应的风格卡片！

## 📝 提示词编写技巧

### 基本结构
一个好的提示词应该包含：

1. **主体描述** - 你想生成什么
2. **场景氛围** - 整体感觉和情绪
3. **特效细节** - 具体的视觉元素
4. **质量参数** - 质量要求

### 示例模板

```
[主体描述], [场景氛围], [特效细节], [质量参数]
```

### 实用关键词

#### 主体类
- `A beautiful woman` - 美丽女性
- `A stunning portrait` - 震人肖像
- `An elegant lady` - 优雅女士

#### 氛围类
- `romantic and elegant` - 浪漫优雅
- `dreamy and ethereal` - 梦幻空灵
- `magical and enchanting` - 魔法迷人
- `warm and cozy` - 温馨舒适

#### 特效类
- `falling petals` - 飘落的花瓣
- `sparkling lights` - 闪烁的光
- `glowing particles` - 发光的粒子
- `drifting snowflakes` - 飘落的雪花
- `swirling fireflies` - 旋转的萤火虫
- `bokeh` - 散景（光斑效果）

#### 质量类
- `cinematic lighting` - 电影级光照
- `high quality` - 高质量
- `4K` - 4K分辨率
- `8K` - 8K分辨率
- `detailed` - 细节丰富
- `sharp` - 清晰锐利

### 常见风格示例

#### 🌸 浪漫花瓣风格
```
A beautiful woman surrounded by falling cherry blossom petals,
romantic and elegant atmosphere, soft pink petals drifting down gracefully,
cinematic lighting, high quality, 4K
```

#### 💫 星光璀璨风格
```
A stunning portrait with magical sparkling lights and glowing particles around,
dreamy and ethereal atmosphere, starlight effect, bokeh,
cinematic lighting, high quality, 4K
```

#### ✨ 魔法闪光风格
```
A gorgeous portrait with magical sparkles and glittering particles swirling around,
enchanting and fantastical atmosphere, fairy dust effect, shimmering lights,
cinematic lighting, high quality, 4K
```

#### 🌊 水波纹风格
```
A beautiful woman with gentle water ripples reflecting around her,
serene and peaceful atmosphere, soft blue light reflections, water distortion effect,
cinematic lighting, high quality, 4K
```

#### 🔥 火焰效果风格
```
A stunning portrait with gentle flames dancing around,
powerful and dynamic atmosphere, warm orange and red glow, fire sparks,
cinematic lighting, high quality, 4K
```

#### 🍃 落叶效果风格
```
An elegant lady surrounded by falling autumn leaves,
nostalgic and warm atmosphere, golden and brown leaves drifting,
sunlight filtering through, cinematic lighting, high quality, 4K
```

## 🎯 高级技巧

### 1. 控制特效强度
添加强度描述词：
- `soft` - 柔和
- `gentle` - 轻柔
- `intense` - 强烈
- `dramatic` - 戏剧性

示例：
```
soft pink petals drifting down (柔和飘落)
vs
intense swirling petals (强烈旋转)
```

### 2. 添加颜色描述
```
soft pink petals (粉色花瓣)
golden sunlight (金色阳光)
blue moonlight (蓝色月光)
warm orange glow (暖橙色光辉)
```

### 3. 添加动态描述
```
drifting down gracefully (优雅地飘落)
swirling around (旋转环绕)
flickering softly (柔和闪烁)
dancing elegantly (优雅舞动)
```

### 4. 中英文混合
智谱AI支持中英文混合提示词：

```javascript
prompt: '一位美丽的女性被飘落的樱花花瓣包围，
romantic and elegant atmosphere,
柔和的粉色花瓣优雅地飘落，
cinematic lighting, high quality, 4K'
```

## 🔍 测试提示词

修改提示词后，建议：

1. **保存文件**
   - `Ctrl + S`

2. **刷新浏览器**
   - `F5` 或 `Ctrl + R`

3. **上传测试图片**
   - 选择一张简单的图片测试

4. **生成视频**
   - 观察效果是否符合预期

5. **调整优化**
   - 根据效果继续微调

## ⚠️ 注意事项

### 提示词长度限制
- 建议控制在 200-300 字符
- 过长的提示词可能被截断
- 智谱AI文档说明：最多 512 个字符

### 图片质量影响
- 上传的图片质量会影响生成效果
- 建议使用清晰、光线良好的照片
- 人物居中、构图清晰的照片效果更好

### 模型能力限制
- CogVideoX-3 有其创作边界
- 某些复杂的场景可能无法完美呈现
- 建议从简单的效果开始尝试

## 🚀 快速开始

### 修改现有风格

1. 打开 `D:\opencode\index.html`
2. 找到 `const styles = {`
3. 修改对应风格的 `prompt`
4. 保存并刷新浏览器

### 添加新风格

1. 打开 `D:\opencode\index.html`
2. 找到 `const styles = {`
3. 在 `styles` 对象中添加新风格
4. 保存并刷新浏览器

**重要：** 添加新风格后，需要在 HTML 中添加对应的风格卡片（在 `.style-grid` 部分）！

## 📞 获取帮助

如果遇到问题：

1. 查看智谱AI官方文档
2. 测试不同的提示词组合
3. 查看生成视频的效果
4. 逐步调整优化

---

**开始创作你独特的风格吧！** 🎨✨