import { Request, Response } from "express";
import { UserService } from "../services/userService.js"; 

async function getAllUsers(_req: Request, res: Response){
    try {
        const books = await UserService.getAllUsers();

        return res.status(200).json(books);
    } catch (error) {
        console.error("Erro no Controller getAllUsers:", error);
        return res.status(500).json({ error: "Erro interno ao buscar usuários" });
    }
}

export const userController = {
    getAllUsers
}