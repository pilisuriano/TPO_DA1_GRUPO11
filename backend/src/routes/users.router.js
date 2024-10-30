import express from "express";
import { searchUser, getMe, updateMe, deleteMe, getOtherUserProfile } from "../controllers/user.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const usersRoutes = express.Router();


usersRoutes.get("/", protectRoute, searchUser);
usersRoutes.get("/me", protectRoute, getMe);
usersRoutes.put("/me", protectRoute, updateMe); //TODO
usersRoutes.delete("/me", protectRoute, deleteMe);
usersRoutes.get("/:userId", protectRoute, getOtherUserProfile);

// TODO

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

export default usersRoutes;