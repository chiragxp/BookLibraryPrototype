import { Routes, Route } from "react-router-dom";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import ReadingList from "./components/ReadingList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/reading-list" element={<ReadingList />} />
      </Routes>
    </div>
  );
}
export default App;
