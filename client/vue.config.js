module.exports = {
    // outputDir: 'dist',
    outputDir: process.env.NODE_ENV === "production" && process.env.VUE_APP_FLAG === "prod" ? 'dist' : 'test',
    assetsDir: "static",
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
    devServer: {
        proxy: {
            '/api': {
                target: 'localhost:8000',
                secure: false,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
        }
    },
}