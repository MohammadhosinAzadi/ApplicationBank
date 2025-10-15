import { Router } from "express";
import { depositController } from "../Controller/depositController"
import { withdrawController } from "../Controller/withdrawController"
import { authenticateToken } from "../Middleware/authMiddleware";


const routes = Router();

routes.post("/:userId/deposit", authenticateToken, depositController);
routes.post("/:userId/withdraw", authenticateToken, withdrawController);

export default routes;
