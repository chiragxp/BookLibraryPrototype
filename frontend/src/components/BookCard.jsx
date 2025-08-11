import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <Link to={`/book/${book.id}`}>{book.title}</Link>
      <p>by {book.author}</p>
    </div>
  );
};

export default BookCard;
