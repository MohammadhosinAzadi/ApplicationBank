import { Router } from "express";
import { deleteAccountController } from "../Controller/deleteAccountController"
import { balanceInquiryController } from "../Controller/balanceInquiryController"
import { openAccountController } from "../Controller/openAccountController"

const router = Router();

router.post("/open/:userId", openAccountController);
router.delete("/:userId", deleteAccountController);
router.get("/:userId/balance", balanceInquiryController);

export default router;
