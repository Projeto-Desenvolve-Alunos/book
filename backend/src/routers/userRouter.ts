import { Router } from "express";
import {
    userController
} from "../controllers/userController.js"
// console.log("userController:", userController);


const router = Router();

router.get("/", userController.getAllUsers);

export default router;