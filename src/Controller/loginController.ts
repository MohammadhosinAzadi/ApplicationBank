// import { Request, Response } from "express";
// import { sqliteUserRepository } from "../Repository/sqliteUserRepository";
// import { validateExistingPhone } from "../Validation/Lojic-Validation/validateExistingPhone"

// export async function loginController(req: Request, res: Response) {
//     try {
//       const { phone } = req.body;
  
//       const userId = await sqliteUserRepository.getUserIdByPhone(phone);
//       await validateExistingPhone(userId)
  
//       res.json({ message: "Login successful", userId });

//     } catch (err: any) {
//       res.status(400).json({ error: err.message });
//     }
//   }