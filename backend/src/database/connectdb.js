import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // mongodb connect
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.log(`Error connecting to MongoDB: ${error}`)
  }
}

export default connectDB;