import { Router } from "express";
import { signUpHttp, loginHttp } from "../Controller-http/userHttpController";

const router = Router();

router.post("/signup", signUpHttp);
router.post("/login", loginHttp);

export default router;
