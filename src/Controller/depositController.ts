import { Request, Response } from "express";
import { sqliteUserRepository } from "../Repository/sqliteUserRepository";
import { validateDeposit } from "../Validation/Lojic-Validation/validateDeposit";

export async function depositController(req: Request, res: Response) {
  try {
    const { phone, amount } = req.body;
    const depositAmount = Number(amount);

    const user = await sqliteUserRepository.getUserByPhone(phone);
    if (!user) throw new Error("User with this phone not found");

    validateDeposit(depositAmount, user.balance);

    await sqliteUserRepository.setBalance(user.id, depositAmount);
    const newBalance = await sqliteUserRepository.getBalance(user.id);

    res.json({ message: `Deposited ${depositAmount}`, newBalance });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
}
