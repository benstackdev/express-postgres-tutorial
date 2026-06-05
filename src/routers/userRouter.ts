import { Router } from "express";
import { createUsernamePost, usernamesGet } from "../controllers/userController.js";

const router = Router();

router.get("/", usernamesGet);
router.get("/new", (req, res) => res.render("newUser", { title: "Enter username" }));
router.post("/new", createUsernamePost);

export default router;