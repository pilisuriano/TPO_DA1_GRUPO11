import mongoose from "mongoose";
import bcrypt from 'bcrypt';

// User Schema
const userSchema = new mongoose.Schema({
  fullName: { type: String }, // Nombre completo del usuario
  nickname: { type: String, unique: true }, // Nickname
  email: { type: String, required: true, unique: true }, // Email único
  password: { type: String, required: true }, // Contraseña encriptada
  profileImage: { type: String }, // URL de imagen de perfil
  coverImage: { type: String }, // URL de imagen de portada
  description: { type: String }, // Descripción del perfil
  gender: { type: String }, // Género del usuario
  followers: { type: Number, default: 0 }, // Número de seguidores
  following: { type: Number, default: 0 }, // Número de usuarios que sigue
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' , default: [] }], // Referencia a las publicaciones
  gamificationLevel: { type: Number, default: 1 }, // Nivel de gamificación
  comments: { type: Number, default: 0 }, // Número de comentarios realizados
}, { timestamps: true });

// Middleware para encriptar la contraseña antes de guardar
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Método para comparar contraseñas
userSchema.methods.comparePassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

export default User;
