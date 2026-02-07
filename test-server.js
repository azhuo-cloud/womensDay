const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// 静态文件服务
app.use(express.static(__dirname));

// 主页路由
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 测试路由
app.get('/test', (req, res) => {
    res.json({ status: 'ok', message: '服务器正常运行' });
});

// 启动服务器
app.listen(PORT, () => {
    console.log('=====================================');
    console.log('🌸 测试服务器已启动 🌸');
    console.log('=====================================');
    console.log(`🚀 访问地址: http://localhost:${PORT}`);
    console.log(`📋 测试接口: http://localhost:${PORT}/test`);
    console.log('=====================================');
});

console.log('正在启动服务器...');