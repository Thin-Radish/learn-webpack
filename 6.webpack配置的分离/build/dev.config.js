const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig,{
  devServer:{
    contentBase: './dist',   //服务哪个文件
    inline: true             //是否实时监听
  }
})