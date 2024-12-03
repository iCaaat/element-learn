const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
      ? '/element-learn/' // 这里填入你的仓库名，例如 'todolist'
      : '/'
})
