# 📚 Book Library App (Prototype)

## Project Overview
This is a fully responsive **full-stack application prototype** for a Book Library.

### Main Features
- Explore a catalog of books.
- View details of a selected book (via click or keyboard navigation).
- Add or remove books from your reading list.

---

## Key Technologies/Tools Used

### **Front-End**
- React
- Redux
- React Router
- SCSS
- Axios
- React Testing Library
- Jest
- Vitest
- Vite

### **Back-End**
- Node.js
- Express.js
- RESTful API
- CORS middleware
- JSON

### **Other**
- **Design:** Figma
- **Version Control:** Git and GitHub
- **Containerization:** Docker

---

## Local Setup (Without Docker)

1. **Clone the repository**
   ```bash
   git clone https://github.com/chiragxp/BookLibraryPrototype.git

2. **Backend Setup**
    ```bash
    cd backend
    npm install
    npm start

Runs on: http://localhost:3001

3. **Frontend Setup**
    ```bash
    cd frontend
    npm install
    npm run dev

Runs on: http://localhost:5173/

4. **Open in browser**

Visit http://localhost:5173/ in your browser to view the app.

## Docker Setup

1. Install Docker Desktop.

2. From project root:
    ```bash
    docker compose up -d --build

3. Access frontend at http://localhost:3000, backend API at http://localhost:3001/api/v1/books.

4. Stop:
    ```bash
    docker compose down

## Running Tests

- In frontend:
    ```bash
    npm test

(runs Vitest/RTL tests for components like BookList and ReadingList)

## CI/CD

- A basic GitHub Actions workflow added (.github/workflows/ci.yml) it runs frontend tests on pushes/PRs to main and develop.
