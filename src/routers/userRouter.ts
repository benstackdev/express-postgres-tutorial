import { Router } from "express";
import { createUsernamePost, searchUsernamesGet, usernamesGet, usernamesDelete } from "../controllers/userController.js";

const router = Router();

router.get("/", usernamesGet);
router.get("/new", (req, res) => res.render("newUser", { title: "Enter username" }));
router.post("/new", createUsernamePost);
router.get("/search", searchUsernamesGet);
router.get("/delete", usernamesDelete);

export default router;