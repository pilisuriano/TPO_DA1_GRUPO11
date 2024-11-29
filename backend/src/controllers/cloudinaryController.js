//import cloudinary from '../utils/cloudinaryConfig';
import crypto from 'crypto';
import dotenv from 'dotenv';

dotenv.config();

// Genera la firma de autenticación para solicitudes a Cloudinary
export const generateSignature = (req, res) => {
    const timestamp = Math.round(new Date().getTime() / 1000);
    const paramsToSign = `timestamp=${timestamp}&upload_preset=ml_default`;

    const signature = crypto
        .createHash('sha1')
        .update(paramsToSign + process.env.CLOUDINARY_API_SECRET)
        .digest('hex');

    res.json({ signature, timestamp });
};
