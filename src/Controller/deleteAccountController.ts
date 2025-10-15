import { Request, Response } from "express";
import { deleteAccount } from "../Service/deleteAccount";
import { sendSuccess, sendError } from "../Controller/Response/response";
import { HttpStatus } from "../Controller/Response/httpStatus";

export async function deleteAccountController(req: Request, res: Response) {
  try {

    const userId = parseInt(req.params.userId);
    await deleteAccount(userId);
    sendSuccess(res, HttpStatus.OK, "Account deleted")

  } catch (err: any) {
    sendError(res, HttpStatus.BAD_REQUEST, err.message)
  }
}
