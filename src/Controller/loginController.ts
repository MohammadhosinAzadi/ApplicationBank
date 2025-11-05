import { loginUser } from "../Service/loginUser";
import { Request, Response } from "express";
import { sendSuccess, sendError } from "./Response/response";
import { HttpStatus } from "../Controller/Response/httpStatus";

export async function loginController(req: Request, res: Response) {
  try {
    const { phone, password } = req.body
    const userData = await loginUser(phone, password)
    res.cookie("token", userData.token, {
      httpOnly: true,  
      secure: false,       
      sameSite: "lax",      
      maxAge: 1000 * 60 * 60,  
    });
    sendSuccess(res, HttpStatus.OK, "Login successful", {
      id: userData.id,
      firstName: userData.firstName,
      lastName: userData.lastName,
      balance: userData.balance,
    });
  } catch (error : any) {
    sendError(res, HttpStatus.UNAUTHORIZED, error.message);
  }
}