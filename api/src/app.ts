import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/mongoose.config";
import postRoutes from "./routes/post.routes";

const app = express();
const PORT = process.env.PORT || 3000;

// Only allow a specific origin
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// Middleware to parse JSON bodies
app.use(express.json());

// Configure dotenv
dotenv.config();

// Post Routes
app.use("/posts", postRoutes);

async function start() {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
}

start();
