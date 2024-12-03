import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String },
  location: {
    placeName: { type: String },
    coordinates: {
      latitude: { type: String },
      longitude: { type: String }
    },
    placeId: { type: String }
  },
  media: [{
    url: { type: String},
    type: { type: String, enum: ['image', 'video']}
  }],
  createdAt: { type: Date, default: Date.now },
  likes: { type: Number, default: 0 },
  favorites: { type: Number, default: 0 },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);

export default Post;
