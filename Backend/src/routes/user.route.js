import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  getCurrentUser,
} from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/").get(verifyJWT, getCurrentUser);
//secured routes
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/refresh-tocken").post(refreshAccessToken);

export default router;
