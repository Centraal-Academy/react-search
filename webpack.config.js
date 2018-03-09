const HtmlWebPackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

const keys = require('./keys')

const config = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'env'],
            plugins: ['transform-object-rest-spread']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: './index.html'
    }),
    new CopyWebpackPlugin([
      {from: 'src/manifest.json'},
      {from: 'src/sw.js'},
      {from: 'src/firebase-messaging-sw.js'}
    ]),
    new webpack.DefinePlugin(keys)
  ]
}

module.exports = config
