import express from "express"
import { createPost, getPost, editPost, deletePost } from "../controllers/post.controller.js";
import { protectRoute } from "../middleware/protectRoute.js"

const postsRoutes = express.Router()

postsRoutes.post("/", protectRoute, createPost);
postsRoutes.get("/:postId", protectRoute, getPost);
postsRoutes.put("/:postId", protectRoute, editPost);
postsRoutes.delete("/:postId", protectRoute, deletePost);

export default postsRoutes;