const express = require("express");
const router = express.Router();
const { registerUser } = require("../Controllers/authController");

router.post("/register", registerUser);
// router.post("/login", loginUser);

module.exports = router;
