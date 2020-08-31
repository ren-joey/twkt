module.exports = {
    runtimeCompiler: true,
    // 在專案開發中如果呼叫 API 時會 pass 給這個 proxy 網址
    // 這邊就用前面以 Valet 建立的網站網址
    devServer: {
        // public: '0.0.0.0:4000',
        // port: 4000,
        disableHostCheck: true,
        overlay: {
            // warnings: true,
            errors: true
        },
        proxy: {
            '/api': {
                // target: 'http://192.168.64.4',
                // target: 'http://218.161.122.79',
                target: 'http://127.0.0.1',
                secure: false,
                changeOrigin: true
            }
        }
    },

    // 建置前端靜態檔案時要擺放的目錄
    // 在 package.json 也要調整 "build" 這個 script
    outputDir: '../public',

    pluginOptions: {
        i18n: {
            locale: 'zh-TW',
            fallbackLocale: 'zh-TW',
            localeDir: 'locales',
            enableInSFC: true
        }
    },

    // 開發階段修改 index.html 來讓 js/css 可以作用
    // 上線階段則會修改 Laravel 的樣版
    indexPath: process.env.NODE_ENV === 'production'
        ? '../resources/views/index.blade.php'
        : 'index.html',

    transpileDependencies: [
        'vuetify'
    ]
};
