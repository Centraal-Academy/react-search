const config = require('./webpack.config')

config.devServer = {
  compress: true,
  port: 9000,
  open: true,
  watchOptions: {
    ignored: /node_modules/
  }
}

module.exports = config
