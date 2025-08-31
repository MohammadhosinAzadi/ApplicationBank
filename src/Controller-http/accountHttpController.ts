import { Request, Response } from "express";
import { sqliteUserRepository } from "../Repository/sqliteUserRepository";
import { memorySessionManager } from "../Session/memorySessionManager";
import { openAccount } from "../Model/openAccount";
import { deleteAccount } from "../Model/deleteAccount";
import { balanceInquiry } from "../Model/balanceInquiry";

export async function openAccountHttp(req: Request, res: Response) {
  try {
    const { initialDeposit } = req.body;
    const userId = memorySessionManager.getUser();
    if (!userId) throw new Error("User not logged in");
    const accountId = await openAccount(userId, initialDeposit, sqliteUserRepository);
    res.status(201).json({ message: "Account opened", accountId });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
}

export async function deleteAccountHttp(req: Request, res: Response) {
  try {
    const userId = parseInt(req.params.userId);
    await deleteAccount(userId, sqliteUserRepository);
    res.json({ message: "Account deleted" });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
}

export async function balanceInquiryHttp(req: Request, res: Response) {
  try {
    const userId = parseInt(req.params.userId);
    const balance = await balanceInquiry(userId, sqliteUserRepository);
    res.json({ balance });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
}
