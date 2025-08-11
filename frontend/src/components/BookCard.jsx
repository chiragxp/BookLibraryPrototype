import { Link } from "react-router-dom";

const BookCard = ({ book, showDescription = false, children }) => {
  return (
    <Link to={`/book/${book.id}`} className="book-card-link">
      <article className="book-card" aria-labelledby={`book-title-${book.id}`}>
        <h4 id={`book-title-${book.id}`}>{book.title}</h4>
        <p>by {book.author}</p>
        {showDescription && <p>{book.description}</p>}
        {children}
      </article>
    </Link>
  );
};

export default BookCard;
