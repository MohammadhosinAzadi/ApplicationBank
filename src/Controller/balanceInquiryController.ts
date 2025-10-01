import { Request, Response } from "express";
import { getBalance } from "../Service/getBalance";

export async function balanceInquiryController(req: Request, res: Response) {
  try {
    const userId = parseInt(req.params.userId);
    const balance = await getBalance(userId);

    res.json({ balance });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
}
