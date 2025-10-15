import { Router } from "express";
import { signUpController } from "../Controller/signUpController"
import { loginController } from "../Controller/loginController"

const router = Router();

router.post("/signup", signUpController);
router.post("/login", loginController);

export default router