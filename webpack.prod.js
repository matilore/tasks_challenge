const path = require('path')
const common = require('./webpack.common')
const { merge } = require('webpack-merge')

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].[contenthash].js'
  }
})
