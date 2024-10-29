import User from "../models/user.model.js"
import Follower from "../models/follower.model.js";

export const searchUser = async (req, res) => {
  try {

    const { name, limit = 10, page = 1 } = req.query;
    if (!name) {
      return res.status(400).json({ error: "The 'name' parameter is required" });
    }

    // Criterio de busqueda por `fullName` o `nickname`
    const searchCriteria = {
      $or: [
        { fullName: { $regex: name, $options: "i" } },
        { nickname: { $regex: name, $options: "i" } }
      ]
    };

    // Convertir `limit` y `page` en enteros
    const limitInt = parseInt(limit, 10);
    const pageInt = parseInt(page, 10);
    const skip = (pageInt - 1) * limitInt;

    // Consultar usuarios y contar el total de resultados
    const users = await User.find(searchCriteria)
      .select("_id fullName nickname profileImage") // Seleccionar solo los campos necesarios
      .limit(limitInt)
      .skip(skip);

    const total = await User.countDocuments(searchCriteria);
    const hasMore = total > pageInt * limitInt;

    // Formato de respuesta
    res.status(200).json({
      users,
      total,
      hasMore
    });

  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export const getMe = async (req, res) => {
  try {
    const userId = req.user._id; // El ID del usuario obtenido del JWT
    const user = await User.findById(userId).select('-password -email -createdAt');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// TODO
export const updateMe = async (req, res) => {
  try {
    const { fullName, gender, profileImage, coverImage, description } = req.body


  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export const deleteMe = async (req, res) => {
  try {

  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export const getOtherUserProfile = async (req, res) => {
  try {

    const { userId } = req.params; // El ID del usuario obtenido de params
    const loggedInUserId = req.user._id;

    // Encontrar el perfil del usuario objetivo
    const user = await User.findById(userId).select('-password');
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    // Comprobar si el usuario autenticado sigue al usuario objetivo
    const isFollowing = await Follower.findOne({
        userId,
        followerId: loggedInUserId
    });

    res.status(200).json({
        ...user.toObject(),
        isFollowed: !!isFollowing
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Internal Server Error" });
  }
}