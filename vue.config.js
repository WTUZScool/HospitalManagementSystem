module.exports = {
  devServer: {
    open: true, // 配置自动启动浏览器
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8080/',//接口
        changeOrigin: true,//是否跨域
        ws: true,
        secure: false,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },//配置多个代理
}