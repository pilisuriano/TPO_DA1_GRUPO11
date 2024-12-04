import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connectDB from './database/connectdb.js';
import AuthsRoutes from './routes/auths.router.js';
import UsersRoutes from './routes/users.router.js';
import PostsRoutes from "./routes/post.router.js";
import TimelineRoute from "./routes/timeline.router.js";
import gmailRoutes from "./routes/gmail.router.js"; // Asegúrate de que la ruta sea correcta
import session from 'express-session';
import passport from '../src/config/passport.js';

const app = express();
const PORT = process.env.PORT || 5000;
connectDB();
app.use(cors({ origin: '*' })); 
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));
// API routes
app.use('/auths', AuthsRoutes);
app.use('/users', UsersRoutes);
app.use('/posts', PostsRoutes);
app.use('/timeline', TimelineRoute);
app.use('/auth', gmailRoutes); // Usar las rutas de autenticación de Google

// Configurar sesiones
app.use(session({
  secret: process.env.SESSION_SECRET, // Usar la clave secreta desde el archivo .env
  resave: false,
  saveUninitialized: false
}));

// Inicializar passport
app.use(passport.initialize());
app.use(passport.session());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})