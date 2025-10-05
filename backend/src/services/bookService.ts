import prisma from "../prisma.js"; 

async function getAllBooks() {
    const books = await prisma.livro.findMany(); 
    return books;
}

async function getBookById(id:string) {
    const book = await prisma.livro.findUnique({
        where: {id}
    });
    return book;
}

async function addBook(data: {
  title: string;
  author: string;
  genre?: string;
  year?: number;
  pages?: number;
  rating?: number;
  synopsis?: string;
  cover?: string;
  usuarioId: number;
}) {
  const book = await prisma.livro.create({
    data: {
      title: data.title,
      author: data.author,
      genre: data.genre,
      year: data.year,
      pages: data.pages,
      rating: data.rating,
      synopsis: data.synopsis,
      cover: data.cover,
      usuarioId: data.usuarioId,

      status: "QUERO_LER",
      currentPage: 0,
      notes: "",
    },
  });

  return book;
}

async function updateBook(id: string, data: {
  title: string;
  author: string;
  genre?: string;
  year?: number;
  pages?: number;
  rating?: number;
  synopsis?: string;
  cover?: string;
  usuarioId: number;

  status: "QUERO_LER",
  currentPage: 0,
  notes: "",
}) {
  const updatedBook = await prisma.livro.update({
    where: { id },
    data,
  });

  return updatedBook;
}

async function deleteBook(id: string) {
  const book = await prisma.livro.findUnique({
    where: { id },
  });

  if (!book) {
    return null; // livro não encontrado
  }

  await prisma.livro.delete({
    where: { id },
  });

  return book; // retorna o livro deletado (opcional)
}


export const BookService = {
    getAllBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBook
};