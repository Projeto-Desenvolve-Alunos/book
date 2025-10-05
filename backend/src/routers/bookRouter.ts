import { Router } from "express";
import {
    bookController
} from "../controllers/bookController.js"
// console.log("bookController:", bookController);

const router = Router();

router.get("/", bookController.getAllBooks);
router.get("/book/:id", bookController.getBookById);
router.post("/create", bookController.addBook);
router.put("/book/:id", bookController.updateBook);
router.delete("/book/:id", bookController.deleteBook);

export default router;
