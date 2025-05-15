import "dotenv/config";
import mongoose from "mongoose";

const { MONGO_URL } = process.env;

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Conectou essa bomba");
  } catch (error) {
    console.log("DEU ERRADO, num conectou nao", error);
  }
};
