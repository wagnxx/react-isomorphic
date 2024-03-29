const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {TDK, entry} = require('./config/mpa')

const plugins = Object.keys(entry).map((entryKey) => {
  const tdk = TDK[entryKey]
  return new HtmlWebpackPlugin({
    // inject: false,
    chunks: [entryKey],
    filename: `./${entryKey}.html`,
    template: path.resolve(__dirname, "public/_index.html"),
    title: tdk.title, // 设置网页标题
    meta: {
      description: tdk.description, // 设置网页描述
      keywords: tdk.keywords, // 设置网页关键词
    },
  });
});

module.exports = {
  mode: "development",
  entry,
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"), // 输出到 dist 目录
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  // 其他配置...
  plugins: [
    new CleanWebpackPlugin(), // 添加 CleanWebpackPlugin 插件配置,
    ...plugins
  ],
};
