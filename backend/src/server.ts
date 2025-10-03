import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bookRouter from "./routers/bookRouter.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/ping", (_req, res) => {
  res.json({ message: "Servidor funcionando 🚀" });
});

app.use("/books", bookRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
