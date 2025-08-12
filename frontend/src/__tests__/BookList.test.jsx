import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";
import axios from "axios";
import BookList from "../components/BookList";
import "@testing-library/jest-dom/vitest";

// Mocking Axios for controlled responses
vi.mock("axios");

describe("BookList Component", () => {
  it("renders fetched books correctly", async () => {
    // Mocking API response
    const mockBooks = [
      { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
      { id: 2, title: "1984", author: "George Orwell" },
    ];
    axios.get.mockResolvedValue({ data: mockBooks });

    render(
      <MemoryRouter>
        <BookList />
      </MemoryRouter>
    );

    // Wait for async fetch and ensure books are rendered
    await waitFor(() => {
      expect(screen.getByText("The Great Gatsby")).toBeInTheDocument();
      expect(screen.getByText("by F. Scott Fitzgerald")).toBeInTheDocument();
      expect(screen.getByText("1984")).toBeInTheDocument();
    });

    // Ensure link to reading list
    expect(screen.getByText("My Reading List")).toBeInTheDocument();

    // Fire Event to Simulate clicking a book link button
    const bookLink = screen.getByText("The Great Gatsby");
    fireEvent.click(bookLink);
  });
});
