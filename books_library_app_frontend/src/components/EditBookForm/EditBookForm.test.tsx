/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent } from "@testing-library/react";
import EditBookForm from "./EditBookForm";
import { Book } from "../../types/book-types";

jest.mock("../../api/books/updateBook", () => ({
  updateBook: jest.fn(),
}));

jest.mock("swr", () => ({
  mutate: jest.fn(),
}));

const mockBook: Book = {
  id: 1,
  title: "Test Book",
  author: "Test Author",
  genre: "Test Genre",
  description: "Test Description",
};

describe("EditBookForm", () => {
  it("renders correctly and matches snapshot", () => {
    const { container } = render(
      <EditBookForm book={mockBook} mutate={jest.fn()} />
    );
    expect(container).toMatchSnapshot();
  });

  it("renders the edit dialog when the Edit button is clicked", () => {
    const { getByText, getByLabelText } = render(
      <EditBookForm book={mockBook} mutate={jest.fn()} />
    );

    // Ensure the "Edit" button is rendered
    const editButton = getByText(/edit/i);
    expect(editButton).toBeInTheDocument();

    // Simulate clicking the edit button
    fireEvent.click(editButton);

    // Check that the dialog with the form fields is rendered
    expect(getByLabelText(/Title/i)).toBeInTheDocument();
    expect(getByLabelText(/Author/i)).toBeInTheDocument();
    expect(getByLabelText(/Genre/i)).toBeInTheDocument();
    expect(getByLabelText(/Description/i)).toBeInTheDocument();
  });
});
