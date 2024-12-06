import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
  createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

likeSchema.index({ userId: 1, postId: 1 }, { unique: true });

const Like = mongoose.model('Like', likeSchema);

export default Like;
