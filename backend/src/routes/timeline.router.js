import express from "express"
import { getTimeline } from "../controllers/timeline.controller.js";
import { protectRoute } from "../middleware/protectRoute.js"

const timelineRoute = express.Router()

timelineRoute.get("/", protectRoute, getTimeline);

export default timelineRoute;