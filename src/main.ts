import express from "express";
import { setupRoutes } from "./routes";

const hostname = "localhost";
const port = 3000;

const server = express();

// 解决跨域
server.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

server.get("/", (request, response) => {
  response.send("hello");
});

// 加载路由
setupRoutes(server);

server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
