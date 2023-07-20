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
      path: "/menu",
      method: "post",
      func: [UserController.getMenuByRole]
    }
  ]
};

const userRouter: ServerRoute = {
  path: "/user",
  router: registerRouter(route)
};

export default userRouter;
