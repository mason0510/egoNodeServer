//配置参数
/**
 * devServer.proxy
 * 如果你的前端应用和后端 API 服务器没有运行在同一个主机上，你需要在开发环境下将 API 请 求代理到 API 服务器
 */
module.exports = {
  assetsDir: 'assets',
  //修改打包路径
  publicPath: process.env.NODE_ENV === 'production'? './': '/',
  //反向代理
  devServer: {
    host: '127.0.0.1',          //local ip
    port: 8080,
    historyApiFallback: true,
    inline: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8989',//
        // target:process.env.VUE_APP_BASE_URL,//
        ws: true,
        changeOrigin: true,
        secure:false,
        pathRewrite:{
          '^/api':''
        }
      },
    },
  }

}
