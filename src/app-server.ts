import express, { Application } from "express";
import path from "path";
import cookieParser from "cookie-parser"; 
import userRoutes from "./Routes/userRoutes";
import accountRoutes from "./Routes/accountRoutes";
import transactionRoutes from "./Routes/transactionRoutes";
import cors from "cors";

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

  app.use("/users", userRoutes);
  app.use("/accounts", accountRoutes);
  app.use("/transactions", transactionRoutes);

  return app;
};
