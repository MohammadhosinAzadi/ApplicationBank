import { Request, Response } from "express";
import { executeWithdraw } from "../Service/executeWithdraw";
import { sendSuccess, sendError } from "../Controller/Response/response";
import { HttpStatus } from "../Controller/Response/httpStatus";

export async function withdrawController(req: Request, res: Response) {
  try {

    const userId = parseInt(req.params.userId);
    const amount = Number(req.body.amount);
    const newBalance = await executeWithdraw(userId, amount);
    sendSuccess(res, HttpStatus.OK, `Withdrawn ${amount}`, { newBalance })

  } catch (err: any) {
    sendError(res, HttpStatus.BAD_REQUEST, err.message)
  }
}
