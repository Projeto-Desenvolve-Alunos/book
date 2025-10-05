import { Router } from "express";
import {
    userController
} from "../controllers/userController.js"
// console.log("userController:", userController);

const router = Router();

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post("/create", userController.addUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUserId);

export default router;