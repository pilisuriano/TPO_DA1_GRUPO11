import cloudinary from '../utils/cloudinaryConfig.js';
import Post from '../models/post.model.js';
import User from '../models/user.model.js'; 

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
      .populate({
        path: "comments",
        select: "userId content createdAt",
        populate: {
          path: "userId",
          select: "fullName profileImg",
        },
      })
      .populate("userId", "fullName profileImg");

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