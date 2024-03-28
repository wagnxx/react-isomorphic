// src/server.js

import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import path from "path";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import webpackConfig from "../webpack.config";

import ServerApp from "./ServerApp.js"; //



const app = express();
const compiler = webpack(webpackConfig);

// 将 public 目录下的文件作为静态资源提供
app.use(express.static(path.join(__dirname, '../public')));

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
  })
);
app.use(webpackHotMiddleware(compiler));



app.get("*", (req, res, next) => {

  const context = {};
  const html = ReactDOMServer.renderToString(
    <ServerApp location={req.url} context={context} />
  );
  // 检查是否有重定向或未匹配到路由的情况
  if (context.url) {
    console.log("context.url:::", context.url)
    res.redirect(context.url); // 如果有重定向，执行重定向操作
    return;
  }



  // 模拟从数据库获取的初始状态数据
  const initialState = {
    count: 0,
    open: false
  };

  // 将初始状态数据序列化为 JSON 字符串
  const serializedState = JSON.stringify(initialState);
  console.log("============path::::::++++++=====:::",req.url);
  // 生成 HTML 字符串并发送给客户端
  res.send(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Isomorphic2 React App</title>
        <script>window.__INITIAL_STATE__ = ${serializedState}</script>
      </head>
      <body>
        <h1>Isomorphic2</h1>
        <div id="root">${html}</div>
        <script src="/bundle.js" defer></script>
      </body>
      </html>
    `);
});

app.listen(4000, () => {
  console.log("Server is running on port 3000");
});
