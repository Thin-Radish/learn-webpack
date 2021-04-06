const path = require('path')

module.exports = {
  entry: './src/main.js' ,
  output: {
    // path: path.join(__dirname,'dist'),
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js',
    // publicPath:只要涉及到url的都会拼接一个“dist/”
    publicPath: 'dist/'
  },
  
  module: {

    rules: [
      {
        test: /\.css$/,
        use: [ 'css-loader' ]
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
      }
    ]
  }
}