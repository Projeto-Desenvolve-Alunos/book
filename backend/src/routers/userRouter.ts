import { Router } from "express";
import {
    userController
} from "../controllers/userController.js"
// console.log("userController:", userController);


const router = Router();
router.use((req, _res, next) => {
  console.log('➡️ Entrou no userRouter:', req.method, req.originalUrl);
  next();
});


router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);

export default router;