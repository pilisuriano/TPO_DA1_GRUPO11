import mongoose from 'mongoose';
import Follower from '../models/follower.model.js';
import Post from '../models/post.model.js';
import Like from '../models/like.model.js';
import Favorite from '../models/favorite.model.js';

export const getTimeline = async (req, res) => {
  try {

    const { limit, page, after_timestamp, after_postId, before_timestamp, before_postId } = req.query;

    const queryLimit = (!after_timestamp && !before_timestamp && !after_postId && !before_postId) ? parseInt(limit) || 10 : null;
    const queryPage = (!after_timestamp && !before_timestamp && !after_postId && !before_postId) ? parseInt(page) || 1 : null;

    const userId = req.user._id;

    // Encuentra los usuarios que el usuario actual sigue
    const following = await Follower.find({ followerId: userId }).select('userId');
    const followingIds = following.map(follow => follow.userId);

    const query = { userId: { $in: [...followingIds, userId] } };

    // Cargar nuevos posts
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
      .limit(parseInt(queryLimit))
      .skip((queryPage - 1) * queryLimit)
      .populate('userId', 'fullName profileImage')
      .lean();

    // Obtengo likes y favoritos del usuario
    const likedPosts = await Like.find({ userId }).select('postId');
    const favoritePosts = await Favorite.find({ userId }).select('postId');

    const likedPostIds = new Set(likedPosts.map(like => like.postId.toString()));
    const favoritePostIds = new Set(favoritePosts.map(favorite => favorite.postId.toString()));

    const postsWithFlags = posts.map(post => ({
      ...post,
      isLiked: likedPostIds.has(post._id.toString()),
      isFavorite: favoritePostIds.has(post._id.toString()),
      type: "post"
    }));

    // Obtengo ads
    const adsResponse = await fetch(process.env.URL_ENDPOINT_ADS);
    const ads = await adsResponse.json();
    const adsWithType = ads.map(ad => ({
      ...ad,
      _id: new mongoose.Types.ObjectId(),
      type: "ad"
    }));

    // Juntar posts y ads
    const combinedTimeline = [];
    let adIndex = 0;
    for (let i = 0; i < postsWithFlags.length; i++) {
      combinedTimeline.push(postsWithFlags[i]);
      if ((i + 1) % 3 === 0 && adIndex < adsWithType.length) {
        combinedTimeline.push(adsWithType[adIndex]);
        adIndex++;
      }
    }

    const totalPosts = await Post.countDocuments(query);
    const hasMore = (queryPage * queryLimit) < totalPosts;

    return res.status(200).json({
      posts: combinedTimeline,
      totalPosts,
      hasMore
    });

  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}