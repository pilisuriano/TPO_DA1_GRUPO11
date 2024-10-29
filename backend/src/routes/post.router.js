import express from "express"
import { createPost, getPost, editPost, deletePost } from "../controllers/post.controller.js";
import { protectRoute } from "../middleware/protectRoute.js"

const postsRoutes = express.Router()

postsRoutes.post("/", createPost);
postsRoutes.get("/:postId", getPost);
postsRoutes.put("/:postId", editPost);
postsRoutes.delete("/:postId", deletePost)
