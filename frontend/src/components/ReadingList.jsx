import { useSelector, useDispatch } from "react-redux";
import { removeBook } from "../slices/readingListSlice";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const ReadingList = () => {
  const readingList = useSelector((state) => state.readingList);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <Button
        className="btn go-back-btn"
        onClick={() => navigate("/")}
        ariaLabel="Go back to book list"
      >
        Go Back
      </Button>
      <h1>Reading List</h1>
      {readingList.length === 0 ? (
        <p className="empty-message">Your reading list is empty.</p>
      ) : (
        readingList.map((book) => (
          <div key={book.id} className="reading-list-item">
            <span>
              {book.title} by {book.author}
            </span>
            <Button
              className="btn remove"
              onClick={() => dispatch(removeBook(book.id))}
              aria-label={`Remove ${book.title} from reading list`}
            >
              Remove
            </Button>
          </div>
        ))
      )}
    </div>
  );
};
export default ReadingList;
