import UserController from "../controller/UserController";
import { registerRouter } from "./helper";
import { Route, ServerRoute } from "./types";

const route: Route = {
  routes: [
    {
      path: "/login",
      method: "post",
      func: [UserController.login]
    },
    {
      path: "/info",
      method: "get",
      func: [UserController.getUserInfoById]
    }
  ]
};

const userRouter: ServerRoute = {
  path: "/user",
  router: registerRouter(route)
};

export default userRouter;
