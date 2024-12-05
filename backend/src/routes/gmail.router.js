import express from 'express';
import passport from 'passport';
import { googleAuth, googleAuthCallback } from '../controllers/auth.controller.js'; // Asegúrate de que la ruta sea correcta
import { protectRoute } from '../middleware/protectRoute.js'; // Importar el middleware protectRoute


const router = express.Router();

// Ruta para iniciar sesión con Google
router.get('/google', googleAuth);

// Ruta de callback de Google
router.get('auth/google/callback', googleAuthCallback);

// Ruta protegida para home
router.get('/', protectRoute, (req, res) => {
    res.status(200).json({ message: "This is the home route", user: req.user });
});
  
// Ruta protegida para perfil
router.get('/me', protectRoute, (req, res) => {
res.status(200).json({ message: "This is the perfil route", user: req.user });
});
  
// Ruta protegida para create post
router.post('/', protectRoute, (req, res) => {
res.status(200).json({ message: "This is the create post route", user: req.user });
});

export default router;