import express, { Application } from "express";
import path from "path";
import cookieParser from "cookie-parser"; 
import cors from "cors";
import { Routers } from "./Routes/index"

export const createApp = (): Application => {
  const app: Application = express();

  app.use(express.json());
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );
  app.use(cookieParser()); 
  app.use(express.static(path.join(process.cwd(), "public")));

  for (const { path, router } of Routers) {
    app.use(path, router);
  }
  
  return app;
};
