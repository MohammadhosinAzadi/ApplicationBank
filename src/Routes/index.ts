import userRoutes from "../Routes/userRoutes";
import accountRoutes from "../Routes/accountRoutes";
import transactionRoutes from "../Routes/transactionRoutes";
import { Router } from "express";

interface RouteConfig {
    path: string;
    router: Router;
}
  
export const Routers: RouteConfig[] = [
    { path: "/users", router: userRoutes },
    { path: "/accounts", router: accountRoutes },
    { path: "/transactions", router: transactionRoutes },
];
  