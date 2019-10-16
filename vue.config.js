const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  configureWebpack: {
    plugins: [
      new CopyPlugin([
        { from: 'src/yandex_0a368d18a7498ff0.html', to: './' },
      ]),
    ],
  }
};
