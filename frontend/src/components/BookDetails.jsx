import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../slices/readingListSlice";
import axios from "axios";
import Button from "./Button";

const BookDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/v1/books/${id}`)
      .then((res) => setBook(res.data))
      .catch((err) => {
        console.error(err);
        setError("Book not found");
      });
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!book) return <p>Loading...</p>;

  return (
    <div>
      <Button
        className="btn go-back-btn"
        onClick={() => navigate("/")}
        ariaLabel="Go back to book list"
      >
        Go Back
      </Button>
      <div className="book-card">
        <h1>{book.title}</h1>
        <p>by {book.author}</p>
        <p>{book.description}</p>
        <Button
          className="btn"
          onClick={() => dispatch(addBook(book))}
          ariaLabel={`Add ${book.title} to reading list`}
        >
          Add to Reading List
        </Button>
      </div>
    </div>
  );
};

export default BookDetails;
