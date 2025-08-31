import { Router } from "express";
import { depositHttp, withdrawHttp } from "../Controller-http/transactionHttpController";

const router = Router();

router.post("/:userId/deposit", depositHttp);
router.post("/:userId/withdraw", withdrawHttp);

export default router;
