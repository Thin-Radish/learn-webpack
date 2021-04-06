const path = require('path')

module.exports = {
  entry: './src/main.js' ,
  output: {
    // path: path.join(__dirname,'dist'),
    path: path.resolve(__dirname,'dist'),   //resolve()方法可拼接两个字符串    
    filename: 'bundle.js'                   // __dirname可获取当前文件的绝对路径
  },




  module: {
    rules: [
      {
        test: /\.css$/,
        use: [  'css-loader' ]
      }
    ]
  }
}