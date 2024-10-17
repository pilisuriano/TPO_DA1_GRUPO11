const express = require("express")
const { Router } = express
const usersRoutes = new Router()

usersRoutes.get("/", (req, res) => {
  res.send("Connected to '/users'")
})

usersRoutes.get("/me", (req, res) => {
  res.send("Connected to '/users/me'")
})

usersRoutes.get("/:userId", (req, res) => {
  res.send("Connected to '/users/{userId}'")
})

usersRoutes.get("/:userId/posts", (req, res) => {
  res.send("Connected to '/users/{userId}/posts'")
})

usersRoutes.get("/:userId/favorites", (req, res) => {
  res.send("Connected to '/users/{userId}/favorites'")
})

usersRoutes.post("/:userId/follow", (req, res) => {
  res.send("Connected to '/users/{userId}/follow'")
})

usersRoutes.delete("/:userId/unfollow", (req, res) => {
  res.send("Connected to '/users/{userId}/unfollow'")
})


module.exports = usersRoutes