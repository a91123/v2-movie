module.exports = {
  devServer: {
    proxy: {
      '/capi': {
        // api名字
        target: 'https://tw.rter.info', // 網址
        // ws: true,
        changeOrigin: true
      }
      //   '/foo': {
      //     target: '<other_url>'
      //   }
    }
  }
}
