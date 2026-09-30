import express from "express";
import { login, user } from "../controller/userController.js";
import { upload } from "../config/uploads.js";

const router = express.Router();

router.post("/register",upload.single("image"), user);

router.post("/login", login);


export default router;
