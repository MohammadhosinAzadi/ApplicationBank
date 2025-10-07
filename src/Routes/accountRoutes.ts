import { Router } from "express";
import { deleteAccountController } from "../Controller/deleteAccountController"
import { balanceInquiryController } from "../Controller/balanceInquiryController"


const router = Router();

router.delete("/:userId", deleteAccountController);
router.get("/:userId/balance", balanceInquiryController);

export default router;
