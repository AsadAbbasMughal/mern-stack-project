import express from "express";
import { createTodo, getTodo  } from "../controllers/todo.controllers.js";
import { verifyToken } from "../middlewares/auth.middlewares.js";


const router = express.Router();

router.post("/create", verifyToken, createTodo);
router.get("/fetch", verifyToken, getTodo);
// router.get("/", verifyToken, getUserTodos);

export default router;
