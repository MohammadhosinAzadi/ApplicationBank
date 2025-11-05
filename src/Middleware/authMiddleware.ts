import { Request, Response, NextFunction } from "express";
import { sendError } from "../Controller/Response/response";
import { HttpStatus } from "../Controller/Response/httpStatus";
import jwt from "jsonwebtoken";

const JWT_SECRET = "YOUR_SECRET_KEY";

export function authenticateToken(req: Request, res: Response, next: NextFunction) {
    const token = req.cookies?.token;
    if (!token) {
        return sendError(res, HttpStatus.UNAUTHORIZED, "No token provided");
    }
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        (req as any).user = decoded;
        next();
    } catch (err) {
        return sendError(res, HttpStatus.FORBIDDEN, "Invalid token");
    }
}

