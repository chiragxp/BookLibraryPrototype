const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");

app.use(express.json()); // Middleware to parse JSON
app.use(cors()); // To Allow cross-origin requests (e.g., from React on port 3000)

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// API endpoint
app.use("/api/v1/books", require("./routes/books"));

// 404 Error handling
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});
