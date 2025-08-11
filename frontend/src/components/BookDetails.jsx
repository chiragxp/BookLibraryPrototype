import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook, removeBook } from "../slices/readingListSlice";
import axios from "axios";
import Button from "./Button";

const BookDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);

  // Fetches reading list from Redux
  const readingList = useSelector((state) => state.readingList);

  // Checks if this book is already in the list
  const isInList = readingList.some((b) => b.id === Number(id));

  // Fetching Book by its ID from Backend via API call
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

  // Toggle functionality for add/remove button on Book Details page
  const handleToggle = () => {
    if (isInList) {
      dispatch(removeBook(Number(id)));
    } else {
      dispatch(addBook(book));
    }
  };

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
        <p>Category: {book.category}</p>
        <Button
          className={`btn ${isInList ? "remove" : ""}`}
          onClick={handleToggle}
          aria-label={
            isInList
              ? `Remove ${book.title} from reading list`
              : `Add ${book.title} to reading list`
          }
        >
          {isInList ? "Remove from Reading List" : "Add to Reading List"}
        </Button>
      </div>
    </div>
  );
};

export default BookDetails;
