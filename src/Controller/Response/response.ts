import { Response } from "express";

export function sendSuccess(res: Response, statusCode: number, message: string, data?: any) {
    res.status(statusCode).json({message, data})
}

export function sendError(res: Response, statusCode: number, error: any) {
    res.status(statusCode).json({error})
}