const express = require("express")
const { Router } = express
const authsRoutes = new Router()

authsRoutes.post("/login", (req, res) => {
  res.send("Connected to '/auths/login'")
})

authsRoutes.post("/verify-email", (req, res) => {
  res.send("Connected to '/auths/verify-email'")
})

authsRoutes.post("/signup", (req, res) => {
  res.send("Connected to '/auths/signup'")
})

authsRoutes.post("/verify-otp", (req, res) => {
  res.send("Connected to '/auths/verify-otp'")
})

authsRoutes.post("/reset-password", (req, res) => {
  res.send("Connected to '/auths/reset-password'")
})

authsRoutes.post("/logout", (req, res) => {
  res.send("Connected to '/auths/logout'")
})

module.exports = authsRoutes