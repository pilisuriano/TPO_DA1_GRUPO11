import express from "express"
import { createPost, getPost, editPost, deletePost } from "../controllers/post.controller.js";
import { protectRoute } from "../middleware/protectRoute.js"
import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const postsRoutes = express.Router()

postsRoutes.post("/", protectRoute, upload.array('media'), createPost);
postsRoutes.get("/:postId", protectRoute, getPost);
postsRoutes.put("/:postId", protectRoute, editPost);
postsRoutes.delete("/:postId", protectRoute, deletePost);

export default postsRoutes;