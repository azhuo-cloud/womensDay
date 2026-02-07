const axios = require('axios');
require('dotenv').config();

const ZHIPU_API_KEY = process.env.ZHIPU_API_KEY;

console.log('=====================================');
console.log('智谱AI API连接测试');
console.log('=====================================\n');

// 检查API密钥
console.log('1. 检查API密钥配置...');
if (!ZHIPU_API_KEY || ZHIPU_API_KEY === 'your_api_key_here') {
    console.log('[✗] API密钥未配置');
    console.log('[ℹ] 请在.env文件中设置 ZHIPU_API_KEY');
    process.exit(1);
}
console.log('[✓] API密钥已配置');
console.log('[ℹ] 密钥格式:', ZHIPU_API_KEY.substring(0, 7) + '...\n');

// 测试视频生成API
console.log('2. 测试视频生成API连接...');
const API_URL = 'https://open.bigmodel.cn/api/paas/v4/videos/generations';

console.log('[ℹ] API端点:', API_URL);

const testRequest = {
    model: 'cogvideox-3',
    prompt: 'A beautiful woman with flowers',
    size: '512x512',
    num_frames: 24,
    guidance_scale: 7.5,
    num_inference_steps: 25
};

console.log('[ℹ] 测试请求参数:', JSON.stringify(testRequest, null, 2));

axios.post(API_URL, testRequest, {
    headers: {
        'Authorization': `Bearer ${ZHIPU_API_KEY}`,
        'Content-Type': 'application/json'
    },
    timeout: 30000
}).then(response => {
    console.log('\n[✓] API连接成功！');
    console.log('[ℹ] 响应状态:', response.status);
    console.log('[ℹ] 响应数据:', JSON.stringify(response.data, null, 2));
    console.log('\n=====================================');
    console.log('API连接测试通过！');
    console.log('=====================================');
}).catch(error => {
    console.log('\n[✗] API连接失败！');
    if (error.response) {
        console.log('[ℹ] 错误状态码:', error.response.status);
        console.log('[ℹ] 错误响应:', JSON.stringify(error.response.data, null, 2));

        // 根据错误类型给出建议
        console.log('\n可能的原因：');
        if (error.response.status === 401) {
            console.log('  - API密钥无效或已过期');
            console.log('  - 解决方案：检查并更新API密钥');
        } else if (error.response.status === 403) {
            console.log('  - API密钥没有权限访问此接口');
            console.log('  - 解决方案：确认API密钥权限');
        } else if (error.response.status === 404) {
            console.log('  - API端点不存在');
            console.log('  - 解决方案：检查API端点地址');
        } else if (error.response.status === 500) {
            console.log('  - 智谱AI服务器内部错误');
            console.log('  - 解决方案：稍后重试或联系智谱AI客服');
        } else if (error.response.status === 429) {
            console.log('  - 请求过于频繁');
            console.log('  - 解决方案：稍后重试');
        }
    } else if (error.code === 'ECONNREFUSED') {
        console.log('[ℹ] 网络连接被拒绝');
        console.log('[ℹ] 解决方案：检查网络连接和防火墙设置');
    } else if (error.code === 'ETIMEDOUT') {
        console.log('[ℹ] 请求超时');
        console.log('[ℹ] 解决方案：检查网络连接或稍后重试');
    } else {
        console.log('[ℹ] 错误信息:', error.message);
    }

    console.log('\n=====================================');
    console.log('API连接测试失败！');
    console.log('=====================================');
}).finally(() => {
    console.log('\n测试完成。');
});