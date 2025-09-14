import express, { Application } from "express";
import userRoutes from "./Routes/userRoutes";
import accountRoutes from "./Routes/accountRoutes";
import transactionRoutes from "./Routes/transactionRoutes";

export const createApp = async (): Promise<Application> => {
  const app: Application = express();

  app.use(express.json());
  app.use("/users", userRoutes);
  app.use("/accounts", accountRoutes);
  app.use("/transactions", transactionRoutes);

  return app;
};
