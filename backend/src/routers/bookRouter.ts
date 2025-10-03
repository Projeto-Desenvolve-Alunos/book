import { Router } from "express";
import {
    bookController
} from "../controllers/bookController.js"

const router = Router();

router.get("/", bookController.getAllBooks);

export default router;
