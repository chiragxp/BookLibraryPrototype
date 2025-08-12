import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import BookCard from "./BookCard";

const BookList = () => {
  const [books, setBooks] = useState([]);

  // API call to fetch all Books
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/v1/books")
      .then((res) => setBooks(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="book-list-container">
      <div className="top-right">
        <Link
          to="/reading-list"
          className="nav-link"
          aria-label="View your saved reading list"
        >
          My Reading List
        </Link>
      </div>

      <h1>📚 BooksHub</h1>
      <div className="book-list">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};
export default BookList;
