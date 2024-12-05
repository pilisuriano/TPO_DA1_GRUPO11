import cloudinary from '../utils/cloudinaryConfig.js';
import Post from '../models/post.model.js';
import User from '../models/user.model.js'; 
import Like from '../models/like.model.js';
import Favorite from '../models/favorite.model.js';
import Comment from '../models/comment.model.js';

export const createPost = async (req, res) => {

  try {
    const userId = req.user._id;
    const { title, location, images } = req.body;
    const mediaUrls = [];

    if (!images || images.length === 0) {
     return res.status(400).json({ error: "No files uploaded" });
    }

    const uploadPromises = images.map(async (base64Image) => {
      try {
        const result = await cloudinary.uploader.upload(base64Image, {
          resource_type: 'auto',
          folder: 'posts'
        });
        return { url: result.secure_url, type: result.resource_type };
      } catch (error) {
        throw error
      }
    });

    const results = await Promise.all(uploadPromises);
    console.log(results)
    mediaUrls.push(...results);

    const newPost = {
      userId,
      title,
      media: mediaUrls,
    };
    
    if (location && location.placeName && location.coordinates) {
      newPost.location = {
        placeName: location.placeName,
        coordinates: {
          latitude: location.coordinates.latitude,
          longitude: location.coordinates.longitude,
        },
        placeId: location.placeId,
      };
    }

    const savedPost = await Post.create(newPost);
    console.log("Saved Post:", savedPost);
    
    await User.findByIdAndUpdate(
      userId,
      { $push: { posts: savedPost._id } },
      { new: true }
    ).populate('posts');

    res.status(201).json({ newPost: savedPost });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getPost = async (req, res) => {
  try {
    const { postId } = req.params;

    const post = await Post.findById(postId)
      .populate("userId", "fullName profileImg")
      .populate({
        path: "comments",
        select: "userId text createdAt",
        options: { sort: { createdAt: -1 } },
        populate: {
          path: "userId",
          select: "fullName profileImg",
        },
      })

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export const editPost = async (req, res) => {
  try {
    const { postId } = req.params;
    const { title, media, location } = req.body;

    // Buscar el post por ID y actualizarlo con los nuevos datos
    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      {
        title,
        media,
        location,
      },
      { new: true, runValidators: true } // Devolver el documento actualizado y ejecutar validadores
    );

    if (!updatedPost) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.status(200).json(updatedPost);
  } catch (error) {
    console.error("Error updating post:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// TODO
/*export const editPost = async (req, res) => {
  try {

  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}*/

export const deletePost = async (req, res) => {
    try {
      const { postId } = req.params;
      const userId = req.user._id;

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    if (post.userId.toString() !== userId.toString()) {
      return res.status(403).json({ error: "Unauthorized" });
    }

    await Post.findByIdAndDelete(postId);

    await User.findByIdAndUpdate(userId, { $pull: { posts: postId } });

    res.status(200).json({ message: `Post with ID: ${postId} deleted` });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export const addComment = async (req, res) => {
  try {
    const { postId } = req.params;
    const { text } = req.body;
    const userId = req.user._id;

    if (!text || text.trim().length === 0) {
      return res.status(400).json({ message: 'Content is required' });
    }

    const newComment = new Comment({
      userId,
      postId,
      text
    });

    await newComment.save();
    await Post.findByIdAndUpdate(postId, {
      $push: { comments: newComment._id }
    });

    res.status(201).json({
      message: 'Comment added successfully',
      comment: {
        _id: newComment._id,
        userId,
        postId,
        text: newComment.text,
        createdAt: newComment.createdAt
      }
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export const addFavorite = async (req, res) => {
  try {
    const { postId } = req.params;
    const userId = req.user._id;

    const existingFavorite = await Favorite.findOne({ postId, userId });
    if (existingFavorite) {
      return res.status(400).json({ message: 'You have already added this post to favorites' });
    }

    const newFavorite = new Favorite({
      postId,
      userId
    });
    await newFavorite.save();
    await Post.findByIdAndUpdate(postId, { $inc: { favorites: 1 } });

    return res.status(200).json({ message: 'Post added to favorites successfully' });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export const deleteFavorite = async (req, res) => {
  try {
    const { postId } = req.params;
    const userId = req.user._id;
    
    const existingFavorite = await Favorite.findOne({ postId, userId });
    if (!existingFavorite) {
      return res.status(400).json({ message: 'You have not added this post to favorites' });
    }
    await Favorite.deleteOne({ postId, userId });
    await Post.findByIdAndUpdate(postId, { $inc: { favorites: -1 } });

    return res.status(200).json({ message: 'Favorite removed successfully' });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export const addLike = async (req, res) => {
  try {
    const { postId } = req.params;
    const userId = req.user._id;

    const existingLike = await Like.findOne({ postId, userId });
    if (existingLike) {
      return res.status(400).json({ message: 'You have already liked this post' });
    }

    const newLike = new Like({ postId, userId });
    await newLike.save();

    await Post.findByIdAndUpdate(postId, { $inc: { likes: 1 } });

    return res.status(200).json({ message: 'Like added successfully' });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export const removeLike = async (req, res) => {
  try {
    const { postId } = req.params;
    const userId = req.user._id;

    const existingLike = await Like.findOne({ postId, userId });
    if (!existingLike) {
      return res.status(400).json({ message: 'You have not liked this post' });
    }

    await Like.deleteOne({ postId, userId });
    await Post.findByIdAndUpdate(postId, { $inc: { likes: -1 } });

    return res.status(200).json({ message: 'Like removed successfully' });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}