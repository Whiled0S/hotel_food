module.exports = {
  configureWebpack: {
    devServer: {
      proxy: {
        '/api/rpc': {
          target: 'https://quar.beskhlebnyy.ru',
          changeOrigin: true
        },
        '/_projects/site': {
          target: 'https://quar.beskhlebnyy.ru'
        },
        '/uploads/products/images': {
          target: 'https://quar.beskhlebnyy.ru'
        }
      }
    }
  }
};
