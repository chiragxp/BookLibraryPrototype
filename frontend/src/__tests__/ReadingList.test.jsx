import { describe, it, expect } from "vitest";
import { screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { renderWithProviders } from "./reduxRenderProvider";
import ReadingList from "../components/ReadingList";
import "@testing-library/jest-dom/vitest";

describe("ReadingList Component", () => {
  it("adds and removes a book from the list", () => {
    // Preloading state with a book
    const preloadedState = {
      readingList: [{ id: 1, title: "Test Book", author: "Test Author" }],
    };

    renderWithProviders(
      <MemoryRouter>
        <ReadingList />
      </MemoryRouter>,
      { preloadedState }
    );

    // Ensuring book is rendered
    expect(screen.getByText(/Test Book by Test Author/)).toBeInTheDocument();

    // Simulating remove click button
    fireEvent.click(screen.getByText("Remove"));

    // Ensuring book is removed
    expect(
      screen.queryByText(/Test Book by Test Author/)
    ).not.toBeInTheDocument();
  });
});
