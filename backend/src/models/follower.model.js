import mongoose from "mongoose";

const followerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // User who is being followed
  followerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true } // User who follows userId
}, { timestamps: true });

const Follower = mongoose.model('Follower', followerSchema);

export default Follower;