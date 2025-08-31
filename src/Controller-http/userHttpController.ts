import { Request, Response } from "express";
import { sqliteUserRepository } from "../Repository/sqliteUserRepository";
import { memorySessionManager } from "../Session/memorySessionManager";
import { signUp } from "../Model/singnUp";
import { login } from "../Model/login";

export async function signUpHttp(req: Request, res: Response) {
  try {
    const { firstName, lastName, phone } = req.body;
    const userId = await signUp(firstName, lastName, phone, sqliteUserRepository);
    memorySessionManager.setUser(userId);
    res.status(201).json({ message: "User registered", userId });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
}

export async function loginHttp(req: Request, res: Response) {
  try {
    const { phone } = req.body;
    const userId = await login(phone, sqliteUserRepository);
    memorySessionManager.setUser(userId);
    res.json({ message: "Login successful", userId });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
}
