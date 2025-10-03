/*
  Warnings:

  - You are about to drop the `Livro` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "StatusLeitura" AS ENUM ('QUERO_LER', 'LENDO', 'LIDO', 'PAUSADO', 'ABANDONADO');

-- DropForeignKey
ALTER TABLE "public"."Livro" DROP CONSTRAINT "Livro_usuarioId_fkey";

-- DropTable
DROP TABLE "public"."Livro";

-- CreateTable
CREATE TABLE "livros" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "genre" TEXT,
    "year" INTEGER,
    "pages" INTEGER,
    "rating" INTEGER,
    "synopsis" TEXT,
    "cover" TEXT,
    "status" "StatusLeitura",
    "currentPage" INTEGER,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "usuarioId" INTEGER NOT NULL,

    CONSTRAINT "livros_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "livros" ADD CONSTRAINT "livros_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
