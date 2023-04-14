import express from "express";
import { setupRoutes } from "./routes";
import expressWs from "express-ws";

const port = 3300;

const server = express();
// 注册webSocket服务
expressWs(server);

// 解决跨域
server.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

server.get("/", (request, response) => {
  response.send("hello");
});

// 加载路由
setupRoutes(server);

server.listen(port, () => {
  console.log(`Server running at port:${port}/`);
});
