import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import aiChatRoutes from "./routes/aiChat.js";
import OpenAI from "openai";

export const openrouter = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1", // 🔹 OpenRouter endpoint
  apiKey: process.env.OPENROUTER_API_KEY,
});

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/ai", aiChatRoutes);

// Health check
app.get("/health", (req, res) => res.json({ status: "ok" }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
