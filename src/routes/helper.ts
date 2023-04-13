import { Route } from "./types";
import { Router } from "express";

export function registerRouter(route: Route) {
  const { middleWare = [], routes } = route;
  const router = Router();
  middleWare.forEach((item) => router.use(item));
  routes.forEach((item) => {
    const { path, method, func } = item;
    (router as any)[method](path, func);
  });
  return router;
}
