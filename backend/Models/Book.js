const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    id: Number,
    img: String,
    name: String,
    author: String,
    prize: String,
    discount: String,
    review: String,
    discountAmount: String,
    description: String,
  },
  { timestamps: true }
);

// Make sure model is exported correctly
const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
