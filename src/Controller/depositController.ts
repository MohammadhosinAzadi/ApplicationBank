import { Request, Response } from "express";
import { executeDeposit } from "../Service/executeDeposit";

export async function depositController(req: Request, res: Response) {
  try {
    const { phone, amount } = req.body;
    const depositAmount = Number(amount);

    const newBalance = await executeDeposit(phone, depositAmount);

    res.json({ message: `Deposited ${depositAmount}`, newBalance });
    
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
}
