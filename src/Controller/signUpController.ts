import { Request, Response } from "express";
import { createNewUser } from "../Service/createNewUser";
import { sendSuccess, sendError } from "../Controller/Response/response";
import { HttpStatus } from "../Controller/Response/httpStatus";

export async function signUpController(req: Request, res: Response) {
  try {

    const { firstName, lastName, phone, password, initialDeposit } = req.body;
    const userId = await createNewUser(firstName, lastName, phone, password, initialDeposit);
    sendSuccess(res, HttpStatus.CREATED, "User registered", { userId })
    
  } catch (err: any) {
    sendError(res, HttpStatus.BAD_REQUEST, err.message)
  }
}
