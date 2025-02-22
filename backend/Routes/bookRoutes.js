const express = require("express");
const router = express.Router();
const bookController = require("../Controllers/bookController");

// Put search route before other routes to prevent path conflicts
router.get("/search", bookController.searchBooks);

// Other routes
router.get("/", bookController.getAllBooks);
router.get("/:id", bookController.getBookById);
router.post("/", bookController.createBook);
router.put("/:id", bookController.updateBook);
router.delete("/:id", bookController.deleteBook);

module.exports = router;
