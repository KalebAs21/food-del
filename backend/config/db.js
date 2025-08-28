import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/myDatabase", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("✅ Connected to Local MongoDB");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
};
