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

async function getUserById(req: Request, res: Response){
    try {
        const { id } = req.params;

        const idAsString = id ?? ""; 
        const idNumber = parseInt(idAsString); 

        if (isNaN(idNumber)) {
        return res.status(400).json({ message: "ID de usuário inválido. O ID deve ser um número." });
    }

        const user = await UserService.getUserById(idNumber);
        if(!user){
            return res.status(404).json({message: "Usuário não encontrado"});
        }

        return res.status(200).json(user);
    } catch (error) {
        console.error("Erro no Controller getAllusers:", error);
        return res.status(500).json({ error: "Erro interno ao buscar usuario" });
    }
}

export async function addUser(req: Request, res: Response) {
  try {
    const {
        nome,
        email,
        senha
    } = req.body;

    if (!nome || !email || !senha) {
      return res.status(400).json({ error: "Preencha todos os campos." });
    }

    const novoUsuario = await UserService.addUser({
        nome,
        email,
        senha
    });

    return res.status(201).json(novoUsuario);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
}

export const userController = {
    getAllUsers,
    getUserById,
    addUser
}