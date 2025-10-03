import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Garante que existe um usuário
  const usuario = await prisma.usuario.upsert({
    where: { email: "jamile@example.com" },
    update: {},
    create: {
      nome: "Jamile",
      email: "jamile@example.com",
      senha: "123456",
    },
  });

  // Cria 5 livros
  await prisma.livro.createMany({
    data: [
      {
        title: "Dom Casmurro",
        author: "Machado de Assis",
        genre: "Romance",
        year: 1899,
        pages: 256,
        rating: 5,
        synopsis: "A clássica história de Bentinho e Capitu.",
        cover: "https://example.com/domcasmurro.jpg",
        usuarioId: usuario.id,
      },
      {
        title: "O Hobbit",
        author: "J. R. R. Tolkien",
        genre: "Fantasia",
        year: 1937,
        pages: 310,
        rating: 5,
        synopsis: "As aventuras de Bilbo Bolseiro na Terra Média.",
        cover: "https://example.com/hobbit.jpg",
        usuarioId: usuario.id,
      },
      {
        title: "1984",
        author: "George Orwell",
        genre: "Distopia",
        year: 1949,
        pages: 328,
        rating: 5,
        synopsis: "Um futuro sombrio de vigilância e controle.",
        cover: "https://example.com/1984.jpg",
        usuarioId: usuario.id,
      },
      {
        title: "O Pequeno Príncipe",
        author: "Antoine de Saint-Exupéry",
        genre: "Infantil",
        year: 1943,
        pages: 96,
        rating: 5,
        synopsis: "Uma fábula filosófica sobre amor e amizade.",
        cover: "https://example.com/principe.jpg",
        usuarioId: usuario.id,
      },
      {
        title: "A Revolução dos Bichos",
        author: "George Orwell",
        genre: "Sátira",
        year: 1945,
        pages: 152,
        rating: 4,
        synopsis: "Uma fazenda governada por animais rebeldes.",
        cover: "https://example.com/revolucao.jpg",
        usuarioId: usuario.id,
      },
    ],
  });

  console.log("✅ Usuário e 5 livros cadastrados!");
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
