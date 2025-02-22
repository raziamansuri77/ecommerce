const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/connectdb");
const authRoutes = require("./Routes/authRoutes");
const bookRoutes = require("./Routes/bookRoutes");

connectDB();
const app = express();
require("dotenv").config();
const authenticate = require("./middleware/authMiddleware");
const errorHandler = require("./middleware/errorHandler");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;
// Routes
app.use("/api/v1", authRoutes);
app.use("/api/v1/books", bookRoutes);

// Get user profile - PROTECTED ROUTE
app.get("/api/v1/user/:userId", authenticate, async (req, res) => {
  try {
    res.json(req.user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.use(errorHandler);

app.use((err, req, res, next) => {
  console.error("Global error handler:", err);
  res
    .status(500)
    .json({ error: "Internal server error", details: err.message });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
