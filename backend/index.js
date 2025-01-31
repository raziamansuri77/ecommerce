const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/connectdb");
const authRoutes = require("./Routes/authRoutes");

connectDB();
const app = express();
require("dotenv").config();
const authenticate = require("./middleware/authMiddleware");
const errorHandler = require("./middleware/errorHandler"); // Import the error handler

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;

// Use authentication routes
app.use("/api/v1", authRoutes);

// Get user profile - PROTECTED ROUTE
app.get("/api/v1/user/:userId", authenticate, async (req, res) => {
  try {
    // The authenticate middleware already fetched the user
    res.json(req.user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Handle 404 errors
app.use(errorHandler);

// Global error handler
app.use((err, req, res, next) => {
  console.error("Global error handler:", err);
  res
    .status(500)
    .json({ error: "Internal server error", details: err.message });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
