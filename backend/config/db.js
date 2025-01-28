const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

// console.log("MONGO_URI:", process.env.MONGO); // Added console log

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
