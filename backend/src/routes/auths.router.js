import express from "express"
import { login, signup, logout, verifyEmail, verifyOtp, resetPassword } from "../controllers/auth.controller.js"

const authsRoutes = express.Router()

authsRoutes.post("/login", login)
authsRoutes.post("/signup", signup)
authsRoutes.post("/verify-email", verifyEmail)
authsRoutes.post("/verify-otp", verifyOtp)
authsRoutes.post("/reset-password", resetPassword)
/*
  TODO req: token
*/
authsRoutes.post("/logout", logout)

export default authsRoutes;