import { Routes, Route } from "react-router-dom";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import ReadingList from "./components/ReadingList";

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/reading-list" element={<ReadingList />} />
        </Routes>
      </main>
    </div>
  );
}
export default App;
