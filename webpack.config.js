const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = function(env) {
  return {
    entry:{
      index:'./src/index.js'
    },
    output:{
      path: path.join(__dirname, 'build'),
      filename:'[name].js',
      publicPath: '/',
      // libraryTarget: 'umd'
    },
    module:{
      rules:[
        {test: /\.(art)$/, loader:'art-template-loader'},
      ]
    },
    externals:{
      'velocity-animate': 'window.Velocity'
    },
    plugins:[
      new htmlWebpackPlugin({
        title: 'art-demo',
        template: './src/index.art'
      })
    ]
  }
}