import { Request, Response } from "express";
import { executeDeposit } from "../Service/executeDeposit";
import { sendSuccess, sendError } from "../Controller/Response/response";
import { HttpStatus } from "../Controller/Response/httpStatus";

export async function depositController(req: Request, res: Response) {
  try {

    const { phone, amount } = req.body;
    const depositAmount = Number(amount);
    const newBalance = await executeDeposit(phone, depositAmount);
    sendSuccess(res, HttpStatus.OK, `Deposited ${depositAmount}`, { newBalance })

  } catch (err: any) {
    sendError(res, HttpStatus.BAD_REQUEST, err.message)
  }
}
