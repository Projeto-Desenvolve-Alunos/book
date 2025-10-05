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

async function getBookById(req: Request, res: Response){
    try {
        const { id } = req.params;

        if (!id || typeof id !== "string") {
            return res.status(400).json({ error: "ID não fornecido ou não encontrado" });
        }

        const book = await BookService.getBookById(id);
        if(!book){
            return res.status(404).json({message: "Livro não encontrado"});
        }

        return res.status(200).json(book);
    } catch (error) {
        console.error("Erro no Controller getAllBooks:", error);
        return res.status(500).json({ error: "Erro interno ao buscar livro" });
    }
}

async function addBook(req: Request, res: Response) {
  try {
    const {
      title,
      author,
      genre,
      year,
      pages,
      rating,
      synopsis,
      cover,
      usuarioId,
    } = req.body;

    if (!title || !author || !usuarioId) {
      return res.status(400).json({ error: "Campos obrigatórios ausentes." });
    }

    const newBook = await BookService.addBook({
        title,
        author,
        genre: genre || null,
        year: year || null,
        pages: pages || null,
        rating: rating || null,
        synopsis: synopsis || null,
        cover: cover || null,
        usuarioId,

    });

    return res.status(201).json(newBook);
  } catch (error) {
    console.error("Erro ao adicionar livro:", error);
    return res.status(500).json({ error: "Não foi possível adicionar o livro." });
  }
}

async function updateBook(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const data = req.body;

    if (!id || typeof id !== "string") {
        return res.status(400).json({ error: "ID não fornecido ou inválido" });
    }
    const updatedBook = await BookService.updateBook(id, data);

    return res.status(200).json(updatedBook);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao atualizar o livro." });
  }
}


export const bookController = {
    getAllBooks,
    getBookById,
    addBook,
    updateBook
};