const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, '../../public/_projects/site'),
  indexPath: path.resolve(__dirname, '../../app/views/site/spa.volt'),
  configureWebpack: {
    devServer: {
      proxy: {
        '/api/rpc': {
          target: process.env.DEV_BACKEND_URL,
          changeOrigin: true
        },
        '/_projects/': {
          target: process.env.DEV_BACKEND_URL
        },
        '/uploads': {
          target: process.env.DEV_BACKEND_URL
        },
      }
    }
  }
};
