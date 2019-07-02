module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://39.97.33.178',
        changeOrigin: true //是否更改反向代理的地址
      }
    }
  }
}
