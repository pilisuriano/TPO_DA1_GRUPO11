import User from "../models/user.model.js"
import Follower from "../models/follower.model.js";

export const searchUser = async (req, res) => {
  try {

    const { name, limit = 10, page = 1 } = req.query;
    if (!name) {
      return res.status(400).json({ error: "The 'name' parameter is required" });
    }

    const searchCriteria = {
      $or: [
        { fullName: { $regex: name, $options: "i" } },
        { nickname: { $regex: name, $options: "i" } }
      ]
    };

    const limitInt = parseInt(limit, 10);
    const pageInt = parseInt(page, 10);
    const skip = (pageInt - 1) * limitInt;

    const users = await User.find(searchCriteria)
      .select("_id fullName nickname profileImage")
      .limit(limitInt)
      .skip(skip);

    const total = await User.countDocuments(searchCriteria);
    const hasMore = total > pageInt * limitInt;

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
    const userId = req.user._id;
    const user = await User.findById(userId)
      .populate('posts')  // Esto incluirá las publicaciones del usuario
      .select('-password -email -createdAt');  // Excluye los campos no deseados
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export const updateMe = async (req, res) => {
  try {
    const userId = req.user._id; // Suponiendo que el ID del usuario está disponible en req.user._id
    const updates = req.body; // Los datos actualizados se envían en el cuerpo de la solicitud

    // Opcional: Validar los datos de actualización aquí

    const updatedUser = await User.findByIdAndUpdate(userId, updates, { new: true, runValidators: true });

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
};

// TODO
/*export const updateMe = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }*/

export const deleteMe = async (req, res) => {
  try {

  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export const getOtherUserProfile = async (req, res) => {
  try {
    const { userId } = req.params;
    const loggedInUserId = req.user._id;

    // Encontrar el perfil del usuario objetivo
    const user = await User.findById(userId).select('-password');
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    // Compruebo si el usuario autenticado sigue al usuario objetivo
    const isFollowing = await Follower.findOne({
        userId,
        followerId: loggedInUserId
    });

    res.status(200).json({
        ...user.toObject(),
        isFollowed: !!isFollowing
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}