import { Request, Response } from "express";
import { deleteAccount } from "../Service/deleteAccount";

export async function deleteAccountController(req: Request, res: Response) {
  try {
    const userId = parseInt(req.params.userId);

    await deleteAccount(userId);

    res.json({ message: "Account deleted" });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
}
