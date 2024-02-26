import mongoose from "mongoose";

const mongoConnectionURI = process.env.MONGO_URL || "";

export const connectToMongoDB = () => {
  mongoose.connect(mongoConnectionURI);
};
