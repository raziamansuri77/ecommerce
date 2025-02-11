const UserModel = require("../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const Joi = require("joi");
const User = require("../Models/User");

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Register a new user
exports.registerUser = async (req, res) => {
  console.log("Registration request received:", req.body);

  const { email, password } = req.body;

  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    console.log("Validation error:", error.details[0].message);
    return res.status(400).json({ message: error.details[0].message });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("User already exists:", email);
      return res.status(400).json({ message: "User already exists" });
    }

    console.log("Hashing password for:", email);
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      email,
      password: hashedPassword,
    });

    await newUser.save();
    console.log("New user created successfully:", email);

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Database error during registration:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Login user
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({
      status: "success",
      message: "Login successful",
      token,
      userId: user._id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Login failed", details: error.message });
  }
};

// // Forgot Password - Request OTP
// exports.forgotPassword = async (req, res) => {
//   try {
//     const { email } = req.body;

//     // Find user by email
//     const user = await UserModel.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     // Generate OTP
//     const otp = crypto.randomInt(100000, 999999).toString(); // Generate a 6-digit OTP

//     // Save OTP and expiry to user document
//     user.resetPasswordOTP = otp;
//     user.resetPasswordExpires = Date.now() + 3600000; // OTP expires in 1 hour
//     await user.save();

//     // Send OTP via email
//     const subject = "Password Reset OTP";
//     const html = `<p>Your OTP for password reset is: <b>${otp}</b>. This OTP is valid for 1 hour.</p>`;
//     await sendEmail(user.email, subject, html);

//     res.status(200).json({
//       status: "success",
//       message: "OTP sent to your email address",
//     });
//   } catch (error) {
//     console.error("Forgot password error:", error);
//     res
//       .status(500)
//       .json({ error: "Failed to send OTP", details: error.message });
//   }
// };

// // Reset Password - Verify OTP and Update Password
// exports.resetPassword = async (req, res) => {
//   try {
//     const { email, otp, newPassword } = req.body;

//     // Find user by email and OTP
//     const user = await UserModel.findOne({
//       email,
//       resetPasswordOTP: otp,
//       resetPasswordExpires: { $gt: Date.now() }, // Check if OTP is not expired
//     });

//     if (!user) {
//       return res.status(400).json({ error: "Invalid OTP or OTP expired" });
//     }

//     // Hash the new password
//     const hashedPassword = await bcrypt.hash(newPassword, 10);

//     // Update password and clear OTP fields
//     user.password = hashedPassword;
//     user.resetPasswordOTP = undefined;
//     user.resetPasswordExpires = undefined;
//     await user.save();

//     res.status(200).json({
//       status: "success",
//       message: "Password reset successfully",
//     });
//   } catch (error) {
//     console.error("Reset password error:", error);
//     res
//       .status(500)
//       .json({ error: "Failed to reset password", details: error.message });
//   }
// };
