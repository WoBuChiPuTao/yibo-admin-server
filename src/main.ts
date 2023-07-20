import express from "express";
import { setupRoutes } from "./routes";
import expressWs from "express-ws";
import { json, urlencoded } from "body-parser";

const port = 3300;

const server = express();
// 注册webSocket服务
expressWs(server);

// 处理application/json内容格式的请求体
server.use(json());
// 处理application/x-www-form-urlencoded内容格式的请求体
server.use(urlencoded({ extended: false }));

// 解决跨域
server.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

// 全局中间件
server.use((req, res, next) => {
  const token = req.headers.auth;
  if (req.url !== "/user/login" && token !== "666666") {
    res.status(401).send("token错误");
    return;
  }
  next();
});

// 加载路由
setupRoutes(server);

server.listen(port, () => {
  console.log(`Server running at port:${port}/`);
});
