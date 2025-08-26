import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { app, server } from "./lib/socket.js";

dotenv.config();

const PORT = process.env.PORT || 5001; // Use dynamic port for Render
const __dirname = path.resolve();

// Define CORS options to use environment variable for the origin
const corsOptions = {
  origin: process.env.FRONTEND_URL, // This will be your Netlify URL
  credentials: true,
};

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions)); // Use the dynamic cors options

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// The block for serving static files has been removed, as Netlify will handle the frontend.

server.listen(PORT, () => {
  console.log("server is running on PORT:" + PORT);
  connectDB();
});
