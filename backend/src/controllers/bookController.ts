import { Request, Response } from "express";
import { BookService } from "../services/bookService.js"; 

async function getAllBooks(_req: Request, res: Response): Promise<Response> {
    try {

        const books = await BookService.getAllBooks();

        return res.status(200).json(books);
    } catch (error) {
        console.error("Erro no Controller getAllBooks:", error);
        return res.status(500).json({ error: "Erro interno ao buscar livros" });
    }
}

export const bookController = {
    getAllBooks,
};