import User from "../models/user.model.js"
import Otp from "../models/otp.model.js";
import otpGenerator from "otp-generator";
import { generateToken } from "../utils/generateToken.js"
import passport from "../config/passport.js";

export const signup = async (req, res) => {
  try {
    const { email, fullName, gender, description, nickname, password } = req.body;

    const existingUser = await User.findOne({ nickname });
    if (existingUser) {
      return res.status(400).json({ error: "UserExists", message: "Usuario existente" });
    }

    const newUser = new User({
      fullName,
      nickname,
      email,
      password,
      description,
      gender
    });

    if (newUser) {
      generateToken(newUser._id);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        nickname: newUser.nickname,
        email: newUser.email,
        description: newUser.description,
        gender: newUser.gender,
        followers: newUser.followers,
        following: newUser.following,
        profileImg: newUser.profileImage,
        coverImg: newUser.coverImage,
        posts: newUser.posts,
        gamificationLevel: newUser.gamificationLevel,
        comments: newUser.comments
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }

  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: 'Authentication failed', message: "Credenciales incorrectas" });
    }

    const passwordMatch = await user.comparePassword(password);
    if (!passwordMatch) {
      return res.status(400).json({ error: 'Authentication failed', message: "Credenciales incorrectas" });
    }

    const token = generateToken(user._id)

    res.status(200).json({ token: token, userId: user._id });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export const verifyEmail = async (req, res) => {
  try {
    const { email, flow } = req.body

    // Verificar que el flow sea válido
    if (!["signup", "reset_password"].includes(flow)) {
      return res.status(400).json({ error: "Invalid flow specified" });
    }

    let user;
    if (flow === "signup") {
      user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ error: "Email already registered", message: "Email ya en uso" });
      }
    } else if (flow === "reset_password") {
      user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ error: "User not found", message: "Credenciales incorrectas" });
      }
    }

    // Generar y enviar OTP
    const otp = otpGenerator.generate(4, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });

    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // OTP expira en 10 minutos
    await Otp.deleteOne({ email });
    
    const otpPayload = { email, otp, expiresAt };
    const otpBody = await Otp.create(otpPayload);

    res.status(200).json({
      message: 'OTP sent successfully',
      ...otpPayload
    });

  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const userOtp = await Otp.findOne({ email });

    if (!userOtp || userOtp.otp !== otp) {
      return res.status(400).json({ error: "Invalid OTP or not found", message: "OTP incorrecto" });
    }

    const otpExpiry = new Date(userOtp.expiresAt);
    if (otpExpiry < new Date()) {
      // Limpiar el OTP vencido
      await Otp.deleteOne({ email });
      return res.status(400).json({ error: "Expired OTP", message: 'OTP expirado' });
    }

    // Limpiar el OTP después de verificarlo
    await Otp.deleteOne({ email });

    return res.status(200).json({ message: 'OTP verificado correctamente' });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export const resetPassword = async (req, res) => {
  try {
    const { email, newPassword, confirmPassword } = req.body;

    const user = await User.findOne({ email });
    if(!user) {
      return res.status(400).json({ error: "Invalid user data", message: "Error en el envío" });
    }

    if(newPassword !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match", message: "Las contraseñas no coinciden" });
    }

    user.password = newPassword;
    await user.save();

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Método para manejar el inicio de sesión con Google
export const googleAuth = passport.authenticate('google', { scope: ['profile', 'email'] });

export const googleAuthCallback = [
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Generar un token JWT
    const token = jwt.sign({ userId: req.user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Redirigir al usuario después de un inicio de sesión exitoso
    res.redirect(`/?token=${token}`); // Redirige a la ruta de tu componente 'home' con el token
  }
];