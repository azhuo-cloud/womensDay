// 风格配置文件
// 可以在这里修改各种风格的提示词

const stylePrompts = {
    // 浪漫花瓣风格
    petals: {
        prompt: 'A beautiful woman surrounded by falling cherry blossom petals, romantic and elegant atmosphere, soft pink petals drifting down gracefully, cinematic lighting, high quality, 4K',
        name: '浪漫花瓣',
        icon: '🌸',
        description: '粉色的樱花花瓣缓缓飘落，营造浪漫氛围'
    },

    // 星光璀璨风格
    lights: {
        prompt: 'A stunning portrait with magical sparkling lights and glowing particles around, dreamy and ethereal atmosphere, starlight effect, bokeh, cinematic, high quality, 4K',
        name: '星光璀璨',
        icon: '💫',
        description: '梦幻的星光和光晕点缀，展现独特魅力'
    },

    // 魔法闪光风格
    sparkles: {
        prompt: 'A gorgeous portrait with magical sparkles and glittering particles swirling around, enchanting and fantastical atmosphere, fairy dust effect, shimmering lights, cinematic, high quality, 4K',
        name: '魔法闪光',
        icon: '✨',
        description: '魔法粒子闪烁环绕，创造奇幻效果'
    },

    // === 可选的额外风格 ===

    // 萤火虫风格
    fireflies: {
        prompt: 'A beautiful woman surrounded by glowing fireflies in a night scene, magical and romantic atmosphere, warm golden lights flickering gently, cinematic lighting, high quality, 4K',
        name: '萤火虫',
        icon: '🌟',
        description: '温暖的萤火虫在夜空中闪烁'
    },

    // 飘雪风格
    snow: {
        prompt: 'A stunning portrait with snowflakes gently falling around, winter wonderland atmosphere, white snowflakes drifting down softly, cinematic lighting, high quality, 4K',
        name: '飘雪',
        icon: '❄️',
        description: '洁白的雪花轻轻飘落'
    },

    // 水波纹风格
    water: {
        prompt: 'An elegant lady with gentle water ripples reflecting around her, serene and peaceful atmosphere, soft blue light reflections, water distortion effect, cinematic lighting, high quality, 4K',
        name: '水波纹',
        icon: '💧',
        description: '宁静的水波纹围绕'
    },


};

// 如果在浏览器中使用，导出到 window
if (typeof window !== 'undefined') {
    window.stylePrompts = stylePrompts;
}

// 如果在 Node.js 中使用，导出为模块
if (typeof module !== 'undefined' && module.exports) {
    module.exports = stylePrompts;
}