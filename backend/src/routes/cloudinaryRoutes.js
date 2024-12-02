import express from 'express';
import { generateSignature } from '../controllers/cloudinaryController'; // Ajusta la ruta del controlador

const router = express.Router();

// Ruta para generar la firma de Cloudinary
router.post('/generate-signature', generateSignature);

export default router;
