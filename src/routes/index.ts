import express from "express";
import { ServerRoute } from "./types";
import userRouter from "./user";
import wsRouter from "./webSocket";

const serverRoutes: ServerRoute[] = [userRouter, wsRouter];

export function setupRoutes(server: ReturnType<typeof express>) {
  serverRoutes.forEach((item) => server.use(item.path, item.router));
}
