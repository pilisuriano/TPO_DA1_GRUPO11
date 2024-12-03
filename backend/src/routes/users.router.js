import express from "express";
import { searchUser, getMe, updateMe, deleteMe, getOtherUserProfile, getOtroUsuario, getFavoritesPosts, getFollowers, getFollowing, followUser, unfollowUser } from "../controllers/user.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const usersRoutes = express.Router();


usersRoutes.get("/", protectRoute, searchUser);
usersRoutes.get("/me", protectRoute, getMe);
usersRoutes.put("/me", protectRoute, updateMe);
usersRoutes.delete("/me", protectRoute, deleteMe);
usersRoutes.get("/me/favorites", protectRoute, getFavoritesPosts)
usersRoutes.get("/:userId", protectRoute, getOtherUserProfile);
usersRoutes.get("/:userId", protectRoute, getOtroUsuario);
usersRoutes.get("/:userId/followers", protectRoute, getFollowers)
usersRoutes.get("/:userId/following", protectRoute, getFollowing)
usersRoutes.post("/:userId/follow", protectRoute, followUser)
usersRoutes.delete("/:userId/unfollow", protectRoute, unfollowUser)

export default usersRoutes;