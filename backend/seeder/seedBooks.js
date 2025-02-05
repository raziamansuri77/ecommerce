const mongoose = require("mongoose");
const Book = require("../Models/Book");
const BookData = require("../data/BookData.json");
require("dotenv").config();

const seedBooks = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    // Add debug logging
    console.log("Book model:", Book);
    console.log("Number of books to seed:", BookData.length);

    // Clear existing books
    const deleteResult = await Book.deleteMany({});
    console.log("Cleared existing books:", deleteResult);

    // Insert books in batches to handle large datasets
    const result = await Book.create(BookData);
    console.log(`Successfully seeded ${result.length} books`);

    await mongoose.connection.close();
  } catch (error) {
    console.error("Error details:", error);
    process.exit(1);
  }
};

seedBooks();
