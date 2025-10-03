# 📚 Projeto Livros

Este é um projeto simples para gerenciamento de livros, contendo **backend** (Node.js + Express + TypeScript + Prisma + PostgreSQL) e **frontend** (React/Next.js).  
Ao rodar o projeto localmente, você já terá 1 usuário e 5 livros cadastrados no banco.

---

## 🚀 Tecnologias
- Node.js + TypeScript  
- Express  
- Prisma ORM  
- PostgreSQL  
- Next.js,

---

## 📥 Clonando o projeto

```bash
git clone https://github.com/Projeto-Desenvolve-Alunos/book.git
```
ou 

```bash
git clone git@github.com:Projeto-Desenvolve-Alunos/book.git
```

## 📂 Configuração do Backend

 1. Instale as dependências:

 ```bash
    backend
    npm install
```

2. Configure o banco de dados PostgreSQL:

- Acesse o Postgres erode o seguinte comando:
 ```CREATE DATABASE bookShelf;```

3. Configure o arquivo .env dentro da pasta backend/ com a conexão correta:

```
DATABASE_URL="postgresql://postgres:sua_senha@localhost:5432/bookShelf"
```
4. Execute as migrations para criar as tabelas:

```bash
npx prisma migrate dev
```
5. Popule o banco com os dados iniciais (usuário + 5 livros):

```bash
npx prisma db seed
```

6. Inicie o servidor backend:

```bash
npm run dev
```