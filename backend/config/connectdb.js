const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

const uri =
  "mongodb+srv://raziamansuri77:raziamansuri77@ecomm.gjhky.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=ecomm";

// console.log("MONGO_URI:", process.env.MONGO); // Added console log

const connectDB = async () => {
  try {
    // const conn = await mongoose.connect(process.env.MONGO, {
    const conn = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
