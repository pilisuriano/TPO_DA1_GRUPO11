import User from "../models/user.model.js"
import Follower from "../models/follower.model.js";
import Post from "../models/post.model.js";
import Favorite from "../models/favorite.model.js";

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
    const userId = req.user._id;
    const updates = req.body;

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

export const deleteMe = async (req, res) => {
  try {
    const userId = req.user._id;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    // Delete all posts from User
    await Post.deleteMany({ userId });

    // Delte all Follower relations
    await Follower.deleteMany({ $or: [{ userId }, { followerId: userId }] });

    // Delete User
    await User.findByIdAndDelete(userId);

    res.status(200).json({ message: 'User deleted successfully' });
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

export const getFavoritesPosts = async (req, res) => {
  try {
    const userId = req.user._id;
    const limit = parseInt(req.query.limit) || 10;
    const page = parseInt(req.query.page) || 1;
    const skip = (page - 1) * limit;

    const favorites = await Favorite.find({ userId })
      .skip(skip)
      .limit(limit)
      .populate('postId', 'title media createdAt');

    const totalFavorites = await Favorite.countDocuments({ userId });

    res.status(200).json({
      favorites: favorites.map(fav => ({
        _id: fav.postId._id,
        title: fav.postId.title,
        media: fav.postId.media,
        createdAt: fav.postId.createdAt,
      })),
      total: totalFavorites,
      page,
      limit,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export const getFollowers = async (req, res) => {
  try {
    const { userId } = req.params;
    const limit = parseInt(req.query.limit) || 10;
    const page = parseInt(req.query.page) || 1;
    const skip = (page - 1) * limit;

    const followers = await Follower.find({ userId })
      .populate('followerId', 'fullName profileImage')
      .skip(skip)
      .limit(limit);

    const totalFollowers = await Follower.countDocuments({ userId });

    res.status(200).json({
      followers: followers.map(f => ({
        _id: f.followerId._id,
        fullName: f.followerId.fullName,
        profileImage: f.followerId.profileImage,
      })),
      total: totalFollowers,
      page,
      limit,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export const getFollowing = async (req, res) => {
  try {
    const { userId } = req.params;
    const limit = parseInt(req.query.limit) || 10;
    const page = parseInt(req.query.page) || 1;
    const skip = (page - 1) * limit;

    const following = await Follower.find({ followerId: userId })
      .populate('userId', 'fullName profileImage')
      .skip(skip)
      .limit(limit);

    const totalFollowing = await Follower.countDocuments({ followerId: userId });

    res.status(200).json({
      following: following.map(f => ({
        _id: f.userId._id,
        fullName: f.userId.fullName,
        profileImage: f.userId.profileImage,
      })),
      total: totalFollowing,
      page,
      limit,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export const followUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const loggedInUserId = req.user._id;

    if (userId === loggedInUserId.toString()) {
      return res.status(400).json({ error: 'You cannot follow yourself.' });
    }

    const existingFollow = await Follower.findOne({ userId, followerId: loggedInUserId });
    if (existingFollow) {
      return res.status(400).json({ error: 'You are already following this user.' });
    }

    // Crear una relación de seguimiento
    await Follower.create({ userId, followerId: loggedInUserId });

    // Actualizar los contadores en el esquema de User
    await User.findByIdAndUpdate(userId, { $inc: { followers: 1 } });
    await User.findByIdAndUpdate(loggedInUserId, { $inc: { following: 1 } });

    res.status(201).json({ message: 'User followed successfully.' });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export const unfollowUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const loggedInUserId = req.user._id;

    if (userId === loggedInUserId.toString()) {
      return res.status(400).json({ error: 'You cannot unfollow yourself.' });
    }

    const existingFollow = await Follower.findOneAndDelete({ userId, followerId: loggedInUserId });
    if (!existingFollow) {
      return res.status(400).json({ error: 'You are not following this user.' });
    }

    await User.findByIdAndUpdate(userId, { $inc: { followers: -1 } });
    await User.findByIdAndUpdate(loggedInUserId, { $inc: { following: -1 } });

    res.status(200).json({ message: 'User unfollowed successfully.' });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}