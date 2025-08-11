const express = require("express");
const router = express.Router();
const books = require("../data/booksCatalog"); // Importing Books Data

// Endpoint to get List of Books
router.get("/", (req, res) => res.json(books));

// Endpoint to get book by its ID
router.get("/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find((b) => b.id === bookId);

  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ error: "Book not found" });
  }
});

module.exports = router;
