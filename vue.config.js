module.exports = {
  configureWebpack: {
    devServer: {
      proxy: {
        '/api/rpc': {
          target: 'https://quar.beskhlebnyy.ru',
          changeOrigin: true
        }
      }
    }
  }
};
