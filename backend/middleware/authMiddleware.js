const jwt = require("jsonwebtoken");
const UserModel = require("../Models/User");

const authenticate = async (req, res, next) => {
  try {
    // Get token from header
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res
        .status(401)
        .json({ error: "Authentication required: No token provided" });
    }

    // Verify token
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // Attach user to request
      const user = await UserModel.findById(decoded.userId).select("-password");
      if (!user) {
        return res
          .status(401)
          .json({ error: "Authentication failed: User not found" });
      }
      req.user = user;
      next();
    } catch (e) {
      return res
        .status(401)
        .json({ error: "Authentication failed: Invalid token" });
    }
  } catch (error) {
    console.error("Authentication middleware error:", error);
    res.status(500).json({ error: "Internal server error in authentication" });
  }
};

module.exports = authenticate;
