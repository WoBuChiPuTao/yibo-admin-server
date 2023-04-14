import { Route } from "./types";
import { Router } from "express";

interface Fn<T extends any[] = any[], R = any> {
  (...args: T): R;
}

export function registerRouter(route: Route, fn?: Fn) {
  const { middleWare = [], routes } = route;
  const router = Router();
  fn && fn(router);
  middleWare.forEach((item) => router.use(item));
  routes.forEach((item) => {
    const { path, method, func } = item;
    (router as any)[method](path, ...func);
  });
  return router;
}
