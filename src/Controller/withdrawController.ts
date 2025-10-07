import { Request, Response } from "express";
import { executeWithdraw } from "../Service/executeWithdraw";

export async function withdrawController(req: Request, res: Response) {
  try {

    const userId = parseInt(req.params.userId);
    const amount = Number(req.body.amount);

    const newBalance = await executeWithdraw(userId, amount);

    res.json({ message: `Withdrawn ${amount}`, newBalance });

  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
}
