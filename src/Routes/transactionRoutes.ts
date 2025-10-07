import { Router } from "express";
import { depositController } from "../Controller/depositController"
import { withdrawController } from "../Controller/withdrawController"

const routes = Router();

routes.post("/:userId/deposit", depositController);
routes.post("/:userId/withdraw", withdrawController);

export default routes;
