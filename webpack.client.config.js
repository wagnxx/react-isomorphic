const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    client: './src/client.js', // 主入口文件
    app: './src/components/App.js' // App.js 单独作为一个入口
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist') // 输出到 public 目录
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          // options: {
          //   presets: ['@babel/preset-env', '@babel/preset-react']
          // }
        }
      }
    ]
  },
  // 其他配置...
};
