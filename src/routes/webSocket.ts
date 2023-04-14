import ws, { WebsocketRequestHandler } from "express-ws";
import { Route, ServerRoute } from "./types";
import { registerRouter } from "./helper";

const route = {
  routes: [
    {
      path: "/ws",
      method: "ws",
      func: [
        function (ws, req) {
          ws.on("message", function (msg) {
            if (msg.toString() !== "ping") {
              const data = JSON.stringify({
                time: new Date().getTime(),
                res: `收到：${msg}`
              });
              ws.send(data);
            }
            console.log(msg);
          });

          ws.on("close", function (code, reason) {
            console.log(
              "websocket closed code: " + code + "   reason:" + reason
            );
          });
        }
      ] as WebsocketRequestHandler[]
    }
  ]
};

const serverRouter: ServerRoute = {
  path: "/",
  router: registerRouter(route as unknown as Route, (router) => {
    ws(router);
  })
};

export default serverRouter;
