import { Router } from "express";
import { deleteAccountController } from "../Controller/deleteAccountController"
import { balanceInquiryController } from "../Controller/balanceInquiryController"
import { authenticateToken } from "../Middleware/authMiddleware";

const router = Router();

router.delete("/:userId", authenticateToken, deleteAccountController);
router.get("/:userId/balance", authenticateToken, balanceInquiryController);

export default router;
