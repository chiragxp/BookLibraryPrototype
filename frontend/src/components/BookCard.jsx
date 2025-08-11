import { Link } from "react-router-dom";

const BookCard = ({ book, showDescription = false, children }) => {
  return (
    <article className="book-card" aria-labelledby={`book-title-${book.id}`}>
      <Link to={`/book/${book.id}`} id={`book-title-${book.id}`}>
        {book.title}
      </Link>
      <p>by {book.author}</p>
      {showDescription && <p>{book.description}</p>}
      {children}
    </article>
  );
};

export default BookCard;
