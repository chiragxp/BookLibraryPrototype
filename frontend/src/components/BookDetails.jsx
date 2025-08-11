import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../slices/readingListSlice";
import axios from "axios";

const BookDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
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
      <div className="book-card">
        <h1>{book.title}</h1>
        <p>by {book.author}</p>
        <p>{book.description}</p>
        <button className="btn" onClick={() => dispatch(addBook(book))}>
          Add to Reading List
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
