import { useSelector, useDispatch } from "react-redux";
import { removeBook } from "../slices/readingListSlice";

const ReadingList = () => {
  const readingList = useSelector((state) => state.readingList);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Reading List</h1>
      {readingList.map((book) => (
        <div key={book.id} className="reading-list-item">
          <span>
            {book.title} by {book.author}
          </span>
          <button
            className="btn remove"
            onClick={() => dispatch(removeBook(book.id))}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};
export default ReadingList;
