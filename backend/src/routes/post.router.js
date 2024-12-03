import express from "express"
import { createPost, getPost, editPost, deletePost, addComment, addFavorite, deleteFavorite, addLike, removeLike } from "../controllers/post.controller.js";
import { protectRoute } from "../middleware/protectRoute.js"

const postsRoutes = express.Router()

postsRoutes.post("/", protectRoute, createPost);
postsRoutes.get("/:postId", protectRoute, getPost);
postsRoutes.put("/:postId", protectRoute, editPost);
postsRoutes.delete("/:postId", protectRoute, deletePost);
postsRoutes.post("/:postId/comment", protectRoute, addComment);
postsRoutes.post("/:postId/favorite", protectRoute, addFavorite);
postsRoutes.delete("/:postId/favorite", protectRoute, deleteFavorite);
postsRoutes.post("/:postId/like", protectRoute, addLike);
postsRoutes.delete("/:postId/like", protectRoute, removeLike);

export default postsRoutes;