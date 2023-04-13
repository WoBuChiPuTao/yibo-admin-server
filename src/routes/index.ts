import express from "express";
import { ServerRoute } from "./types";
import userRouter from "./user";

const serverRoutes: ServerRoute[] = [
  userRouter
];

export function setupRoutes(server: ReturnType<typeof express>) {
  serverRoutes.forEach((item) => server.use(item.path, item.router));
}
