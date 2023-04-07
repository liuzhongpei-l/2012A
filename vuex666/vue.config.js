const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    open: true,
    host: "localhost",
    setupMiddlewares: require('./src/utils/devServerMiddleware'),
    proxy: {
      '/line': {
        target: 'https://e.huaxincem.com',
        pathRewrite: { '^/line': '' },
      },
      '/api': {
        target: 'http://localhost:8083',
        pathRewrite: { '^/api': '' },
      },
    },
  }
})
