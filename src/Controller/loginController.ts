import { loginUser } from "../Service/loginUser";
import { Request, Response } from "express";
import { sendSuccess, sendError } from "./Response/response";
import { HttpStatus } from "../Controller/Response/httpStatus";

export async function loginController(req: Request, res: Response) {
  try {
    const { phone, password } = req.body
    const userData = await loginUser(phone, password)
    sendSuccess(res, HttpStatus.OK, "Login successful", userData);
  } catch (error : any) {
    sendError(res, HttpStatus.UNAUTHORIZED, error.message);
  }
}