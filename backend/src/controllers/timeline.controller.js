import Post from '../models/post.model.js';
import Follower from '../models/follower.model.js';

export const getTimeline = async (req, res) => {
  try {

    const { limit = 10, page = 1, after_timestamp, after_postId, before_timestamp, before_postId } = req.query;

    // ID del usuario autenticado
    const userId = req.userId;

    // Encuentra los usuarios que el usuario actual sigue
    const following = await Follower.find({ followerId: userId }).select('userId');
    const followingIds = following.map(follow => follow.userId);

    // Solo carga posts de usuarios seguidos
    const query = { userId: { $in: followingIds } };

    // const query = {};

    // Cargar nuevos posts
    // TODO solo cargar posts de personas a las que sigo!!
    if (after_timestamp) {
      query.createdAt = { $gt: new Date(after_timestamp) };
    }
    if (after_postId) {
      // Se carga solo después del ID del post
      const afterPost = await Post.findById(after_postId);
      if (afterPost) {
        query._id = { $gt: afterPost._id };
      }
    }

    // Cargar posts más antiguos (antes del último post)
    if (before_timestamp) {
      query.createdAt = { $lt: new Date(before_timestamp) };
    }
    if (before_postId) {
      const beforePost = await Post.findById(before_postId);
      if (beforePost) {
        query._id = { $lt: beforePost._id };
      }
    }

    const posts = await Post.find(query)
      .sort({ createdAt: -1 })
      .limit(parseInt(limit))
      .skip((page - 1) * limit)
      .populate('userId', 'fullName profileImage')
      .lean();

    // Añado valores isLiked y isFavorite a cada post, por ahora por defecto en false
    const postsWithFlags = posts.map(post => ({
      ...post,
      isLiked: false,
      isFavorite: false
    }));

    const totalPosts = await Post.countDocuments(query);
    const hasMore = (page * limit) < totalPosts;

    return res.status(200).json({
      posts: postsWithFlags,
      totalPosts,
      hasMore
    });

  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}