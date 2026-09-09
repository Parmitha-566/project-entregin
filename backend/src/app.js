require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const {
  notFound,
  errorHandler
} = require("./middleware/errorMiddleware");

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Root Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to ENTREGIN API",
    tagline: "Right Scheme. Right Partner. Right Path."
  });
});

// Health Check Route
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "ENTREGIN Backend is running",
    timestamp: new Date().toISOString()
  });
});

// 404 Middleware
app.use(notFound);

// Global Error Handler
app.use(errorHandler);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 ENTREGIN Backend running on port ${PORT}`);
});