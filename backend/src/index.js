import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import bodyParser from 'body-parser';
import connectDB from './database/connectdb.js';
import AuthsRoutes from './routes/auths.router.js';
import UsersRoutes from './routes/users.router.js';
import PostsRoutes from "./routes/post.router.js";
import TimelineRoute from "./routes/timeline.router.js";

const app = express();
const PORT = process.env.PORT || 5000;
connectDB();
app.use(cors({ origin: '*' })); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '10mb' }));

// API routes
app.use('/auths', AuthsRoutes);
app.use('/users', UsersRoutes);
app.use('/posts', PostsRoutes);
app.use('/timeline', TimelineRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})