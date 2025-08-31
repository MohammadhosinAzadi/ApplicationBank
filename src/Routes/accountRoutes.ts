import { Router } from "express";
import { openAccountHttp, deleteAccountHttp, balanceInquiryHttp } from "../Controller-http/accountHttpController";

const router = Router();

router.post("/open", openAccountHttp);
router.delete("/:userId", deleteAccountHttp);
router.get("/:userId/balance", balanceInquiryHttp);

export default router;
