import { Request, Response } from "express";
import { sqliteUserRepository } from "../Repository/sqliteUserRepository";
import { deposit } from "../Model/deposit";
import { withdraw } from "../Model/withdraw";

export async function depositHttp(req: Request, res: Response) {
  try {
    const userId = parseInt(req.params.userId);
    const { amount } = req.body;
    const balance = await deposit(userId, amount, sqliteUserRepository);
    res.json({ message: `Deposited ${amount}`, balance });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
}

export async function withdrawHttp(req: Request, res: Response) {
  try {
    const userId = parseInt(req.params.userId);
    const { amount } = req.body;
    const balance = await withdraw(userId, amount, sqliteUserRepository);
    res.json({ message: `Withdrawn ${amount}`, balance });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
}
