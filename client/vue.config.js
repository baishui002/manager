module.exports = {
    outputDir: 'dist',
    assetsDir: 'static',
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8000/api',
                secure: false,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
        }
    },
}