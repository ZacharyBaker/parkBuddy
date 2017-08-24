const config = require('./webpack.config.js');
const webpack = require('webpack');

config.plugins.push(
  new webpack.DefinePlugin({
    "process.env": {
      "NODE_ENV": JSON.stringify("production"),
      "ZACH": JSON.stringify(process.env.ZACH),
      "VLAD": JSON.stringify(process.env.VLAD),
      "JADEN": JSON.stringify(process.env.ZACH)
    }
  })
);

config.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })
);

module.exports = config;