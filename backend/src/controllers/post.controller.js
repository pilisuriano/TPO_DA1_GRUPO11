import cloudinary from '../utils/cloudinaryConfig.js';
import Post from '../models/post.model.js';

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
      // return new Promise((resolve, reject) => {
      //   cloudinary.uploader.upload_stream(
      //     { resource_type: 'auto', folder: 'posts' },
      //     (error, result) => {
      //       if (error) return reject(error);
      //       resolve({ url: result.secure_url, type: result.resource_type });
      //     }
      //   ).end(file.buffer);
      // });
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

    await Post.create(newPost)
    res.status(201).json({newPost});

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

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

// TODO
export const editPost = async (req, res) => {
  try {

  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export const deletePost = async (req, res) => {
  try {

  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}