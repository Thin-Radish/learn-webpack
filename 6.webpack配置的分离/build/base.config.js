const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/main.js' ,
  output: {
    // path: path.join(__dirname,'dist'),
    path: path.resolve(__dirname,'../dist'),
    filename: 'bundle.js',
    // publicPath:只要涉及到url的都会拼接一个“dist/”
    // publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        // css-loader只负责css文件进行加载
        // style-loader 负责将样式添加到DOM中
        // 使用多个loader时，是从右向左
        test: /\.css$/,
        use: [ 'style-loader' ,'css-loader' ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'img/[name].[hash:8].[ext]'
            },
          }
        ]
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  resolve:{
    //alias别名的意思
    alias:{
      //指定vue文件 可以使用template
      "vue$": 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new VueLoaderPlugin(),      //1.运行vue-loader
    new HtmlWebpackPlugin({     //2.打包html文件
      //会把路径为index.html的内容作为模板
      template: 'index.html'
    }),
  ],
}