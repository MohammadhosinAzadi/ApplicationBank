import { Request, Response } from "express";
import { getBalance } from "../Service/getBalance";
import { sendSuccess, sendError } from "../Controller/Response/response";
import { HttpStatus } from "../Controller/Response/httpStatus";

export async function balanceInquiryController(req: Request, res: Response) {
  try {

    const userId = parseInt(req.params.userId);
    const balance = await getBalance(userId);
    sendSuccess(res, HttpStatus.OK, "Balance retrieved successfully", {balance})

  } catch (err: any) {
    sendError(res, HttpStatus.BAD_REQUEST, err.message)
  }
}
