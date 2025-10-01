import { Request, Response } from "express";
import { openAccount } from "../Service/openAccount"
import { checkUserAndAccount } from "../Service/checkUserAndAccount";
import { validateExecuteAccount } from "../Service/validateExecuteAccount"

export async function openAccountController(req: Request, res: Response) {
  try {
    const userId = parseInt(req.params.userId);
    const initialDeposit = Number(req.body.initialDeposit);

    await checkUserAndAccount(userId);

    await validateExecuteAccount(userId, initialDeposit)

    const newBalance = await openAccount(userId, initialDeposit);

    res.status(201).json({ message: "Account opened", newBalance });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
}