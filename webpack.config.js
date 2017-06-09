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
    resolve:{
      alias:{
        '@': path.join(__dirname, 'src')
      }
    },
    module:{
      rules:[
        {
        exclude: [
          /\.html$/,
          /\.(js|jsx)$/,
          /\.less$/,
          /\.css$/,
          /\.json$/,
          /\.bmp$/,
          /\.gif$/,
          /\.jpe?g$/,
          /\.png$/,
          /\.ejs$/,
          /\.svg$/,
          /\.art$/
        ],
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[hash:8].[ext]',
        },
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'assets/[name].[hash:8].[ext]',
        },
      },
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