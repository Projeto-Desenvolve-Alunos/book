import prisma from "../prisma.js"; 
export const BookService = {

    async getAllBooks() {
        const books = await prisma.livro.findMany(); 

        return books;
    }
};