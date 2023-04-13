import { RequestHandler, Router } from "express";

interface BasicRoute {
  method: string;
  path: string;
  func: RequestHandler[];
}

export interface Route {
  middleWare?: RequestHandler[];
  routes: BasicRoute[];
}

export interface ServerRoute {
  path: string;
  router: ReturnType<typeof Router>;
}
