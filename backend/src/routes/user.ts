import { loginUser, signupUser, userProfile } from "../controllers/user";
import express from "express";
import { authGuard } from "../middlewares/auth";

const router = express.Router();

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.get("/profile", authGuard, userProfile);

export default router;
