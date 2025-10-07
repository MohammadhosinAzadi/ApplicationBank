import { Request, Response } from "express";
import { createNewUser } from "../Service/createNewUser";

export async function signUpController(req: Request, res: Response) {
  try {

    const { firstName, lastName, phone , initialDeposit } = req.body;

    const userId = await createNewUser(firstName, lastName, phone, initialDeposit);
    
    res.status(201).json({ message: "User registered", userId });
  
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
}
