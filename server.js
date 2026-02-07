const express = require('express');
const cors = require('cors');
const multer = require('multer');
const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// 中间件
app.use(cors());
app.use(express.json());
app.use(express.static('.'));
app.use('/generated', express.static(path.join(__dirname, 'generated')));

// 确保必要的目录存在
const UPLOAD_DIR = path.join(__dirname, 'uploads');
const GENERATED_DIR = path.join(__dirname, 'generated');
fs.ensureDirSync(UPLOAD_DIR);
fs.ensureDirSync(GENERATED_DIR);

// 配置文件上传
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, UPLOAD_DIR);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 10 * 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('只支持图片文件'));
        }
    }
});

// 智谱AI API配置
const ZHIPU_API_KEY = process.env.ZHIPU_API_KEY;
const ZHIPU_API_URL = 'https://open.bigmodel.cn/api/paas/v4/videos/generations';
const ZHIPU_RESULT_URL = 'https://open.bigmodel.cn/api/paas/v4/async-result';

// 提交视频生成任务
async function submitVideoGenerationTask(imagePath, prompt) {
    try {
        console.log('[INFO] 开始读取图片...');
        const imageBuffer = await fs.readFile(imagePath);
        const base64Image = `data:image/jpeg;base64,${imageBuffer.toString('base64')}`;
        console.log('[INFO] 图片大小:', base64Image.length, '字符');

        console.log('[INFO] 准备提交生成任务...');
        const requestBody = {
            model: 'cogvideox-3',
            image_url: base64Image,
            prompt: prompt,
            size: '1024x1024',
            fps: 30,
            duration: 5,
            quality: 'speed',
            with_audio: false
        };

        console.log('[INFO] 发送请求到智谱API:', ZHIPU_API_URL);
        console.log('[INFO] 请求模型:', requestBody.model);
        console.log('[INFO] 请求参数:', JSON.stringify(requestBody, null, 2));

        const response = await axios.post(ZHIPU_API_URL, requestBody, {
            headers: {
                'Authorization': `Bearer ${ZHIPU_API_KEY}`,
                'Content-Type': 'application/json'
            },
            timeout: 180000
        });

        console.log('[SUCCESS] 任务提交成功！');
        console.log('[INFO] 任务ID:', response.data.id);
        console.log('[INFO] 任务状态:', response.data.task_status);

        return response.data;
    } catch (error) {
        console.error('[ERROR] 提交任务失败:');
        if (error.response) {
            console.error('[ERROR] 状态码:', error.response.status);
            console.error('[ERROR] 响应数据:', JSON.stringify(error.response.data, null, 2));
        } else {
            console.error('[ERROR] 错误信息:', error.message);
        }
        throw new Error('提交视频生成任务失败: ' + (error.response?.data?.error?.message || error.message));
    }
}

// 轮询任务状态（使用正确的端点）
async function pollTaskStatus(taskId, maxAttempts = 60, interval = 5000) {
    console.log('[INFO] 开始轮询任务状态...');
    console.log('[INFO] 任务ID:', taskId);
    console.log('[INFO] 最大尝试次数:', maxAttempts);
    console.log('[INFO] 轮询间隔:', interval, 'ms');
    console.log('[INFO] 正确的查询端点:', `${ZHIPU_RESULT_URL}/${taskId}`);

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            console.log(`[POLL] 第 ${attempt}/${maxAttempts} 次轮询...`);

            // 使用正确的端点查询异步结果
            const response = await axios.get(`${ZHIPU_RESULT_URL}/${taskId}`, {
                headers: {
                    'Authorization': `Bearer ${ZHIPU_API_KEY}`
                },
                timeout: 30000
            });

            const data = response.data;
            console.log('[POLL] 响应状态码:', response.status);
            console.log('[POLL] 完整响应:', JSON.stringify(data, null, 2));

            // 检查是否有视频结果
            if (data.video_result && data.video_result.length > 0) {
                console.log('[SUCCESS] 任务完成！找到视频结果！');
                console.log('[INFO] 视频URL:', data.video_result[0].url);
                console.log('[INFO] 封面URL:', data.video_result[0].cover_image_url);
                return data;
            } else {
                console.log('[INFO] 任务仍在处理中，等待下次轮询...');
            }

        } catch (error) {
            if (error.response) {
                console.error('[ERROR] 轮询请求失败:', error.response.status);
                console.error('[ERROR] 响应数据:', JSON.stringify(error.response.data, null, 2));
            } else {
                console.error('[ERROR] 轮询错误:', error.message);
            }
        }

        // 等待下次轮询
        await new Promise(resolve => setTimeout(resolve, interval));
    }

    throw new Error('任务处理超时（超过5分钟）');
}

// API路由

app.get('/health', (req, res) => {
    res.json({ status: 'ok', message: '妇女节视频生成服务正常运行' });
});

app.post('/api/generate', upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: '请上传图片' });
        }

        if (!req.body.style || !req.body.prompt) {
            return res.status(400).json({ error: '请选择风格' });
        }

        console.log('=====================================');
        console.log('开始生成视频...');
        console.log('=====================================');
        console.log('图片路径:', req.file.path);
        console.log('图片大小:', req.file.size, '字节');
        console.log('风格:', req.body.style);
        console.log('提示词:', req.body.prompt);
        console.log('=====================================');

        // 提交视频生成任务
        console.log('[STEP 1/3] 提交视频生成任务...');
        const taskResult = await submitVideoGenerationTask(req.file.path, req.body.prompt);

        // 轮询任务状态
        console.log('[STEP 2/3] 等待任务完成...');
        const finalResult = await pollTaskStatus(taskResult.id, 60, 5000);

        // 下载视频
        console.log('[STEP 3/3] 下载生成的视频...');
        if (finalResult.video_result && finalResult.video_result[0] && finalResult.video_result[0].url) {
            const videoUrl = finalResult.video_result[0].url;
            console.log('[INFO] 视频URL:', videoUrl);

            const videoFileName = `video_${Date.now()}_${uuidv4()}.mp4`;
            const localVideoPath = path.join(GENERATED_DIR, videoFileName);

            const videoResponse = await axios({
                method: 'get',
                url: videoUrl,
                responseType: 'stream',
                timeout: 60000
            });

            const writer = fs.createWriteStream(localVideoPath);
            videoResponse.data.pipe(writer);

            await new Promise((resolve, reject) => {
                writer.on('finish', resolve);
                writer.on('error', reject);
            });

            console.log('[SUCCESS] 视频已保存到本地:', videoFileName);

            const localVideoUrl = `/generated/${videoFileName}`;

            // 清理上传的图片
            await fs.remove(req.file.path);
            console.log('[INFO] 已清理上传的图片');

            res.json({
                success: true,
                videoUrl: localVideoUrl,
                style: req.body.style,
                styleName: getStyleName(req.body.style)
            });
        } else {
            console.error('[ERROR] 结果中没有视频URL');
            console.error('[INFO] 完整结果:', JSON.stringify(finalResult, null, 2));
            throw new Error('无法获取视频URL');
        }

    } catch (error) {
        console.error('=====================================');
        console.error('视频生成错误:');
        console.error(error);
        console.error('=====================================');

        // 清理上传的文件
        if (req.file && fs.existsSync(req.file.path)) {
            await fs.remove(req.file.path);
            console.log('[INFO] 已清理上传的图片');
        }

        res.status(500).json({
            error: '视频生成失败',
            message: error.message
        });
    }
});

app.get('/api/styles', (req, res) => {
    res.json([
        {
            id: 'petals',
            name: '浪漫花瓣',
            icon: '🌸',
            description: '粉色的樱花花瓣缓缓飘落，营造浪漫氛围'
        },
        {
            id: 'lights',
            name: '星光璀璨',
            icon: '💫',
            description: '梦幻的星光和光晕点缀，展现独特魅力'
        },
        {
            id: 'sparkles',
            name: '魔法闪光',
            icon: '✨',
            description: '魔法粒子闪烁环绕，创造奇幻效果'
        }
    ]);
});

function getStyleName(styleId) {
    const styles = {
        petals: '浪漫花瓣',
        lights: '星光璀璨',
        sparkles: '魔法闪光'
    };
    return styles[styleId] || styleId;
}

setInterval(async () => {
    try {
        const now = Date.now();
        const maxAge = 24 * 60 * 60 * 1000;

        const uploads = await fs.readdir(UPLOAD_DIR);
        for (const file of uploads) {
            const filePath = path.join(UPLOAD_DIR, file);
            const stats = await fs.stat(filePath);
            if (now - stats.mtimeMs > maxAge) {
                await fs.remove(filePath);
                console.log('[CLEAN] 已清理上传文件:', file);
            }
        }

        const generated = await fs.readdir(GENERATED_DIR);
        for (const file of generated) {
            const filePath = path.join(GENERATED_DIR, file);
            const stats = await fs.stat(filePath);
            if (now - stats.mtimeMs > maxAge) {
                await fs.remove(filePath);
                console.log('[CLEAN] 已清理生成文件:', file);
            }
        }
    } catch (error) {
        console.error('[ERROR] 清理文件失败:', error);
    }
}, 24 * 60 * 60 * 1000);

app.use((error, req, res, next) => {
    console.error('[ERROR] 服务器错误:', error);

    if (error.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({ error: '文件大小超过限制（最大10MB）' });
    }

    if (error.message.includes('只支持图片文件')) {
        return res.status(400).json({ error: '只支持图片文件' });
    }

    res.status(500).json({ error: '服务器内部错误' });
});

app.listen(PORT, () => {
    console.log('=====================================');
    console.log('🌸 妇女节视频生成服务已启动 🌸');
    console.log('=====================================');
    console.log(`🚀 服务运行在: http://localhost:${PORT}`);
    console.log(`📊 健康检查: http://localhost:${PORT}/health`);
    console.log(`🎬 生成接口: http://localhost:${PORT}/api/generate`);
    console.log('=====================================');

    if (!ZHIPU_API_KEY || ZHIPU_API_KEY === 'your_api_key_here') {
        console.warn('⚠️  警告: 未设置ZHIPU_API_KEY环境变量');
        console.warn('⚠️  请在.env文件中设置你的智谱AI API密钥');
        console.warn('⚠️  获取API密钥: https://open.bigmodel.cn/');
    } else {
        console.log('✅ 智谱AI API密钥已配置');
    }

    console.log('=====================================');
    console.log('💡 已修复查询端点问题！');
    console.log('💡 现在使用正确的端点: /async-result/{id}');
    console.log('=====================================');
});

module.exports = app;