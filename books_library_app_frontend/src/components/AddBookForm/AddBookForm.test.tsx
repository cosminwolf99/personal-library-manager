/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import AddBookForm from "./AddBookForm";

jest.mock("swr", () => ({
  mutate: jest.fn(),
}));

jest.mock("../../api/books/addBook", () => ({
  addBook: jest.fn(),
}));

describe("AddBookForm", () => {
  it("renders form fields correctly", () => {
    const { getByLabelText, getByText } = render(<AddBookForm />);

    expect(getByLabelText(/Title/i)).toBeInTheDocument();
    expect(getByLabelText(/Author/i)).toBeInTheDocument();
    expect(getByLabelText(/Genre/i)).toBeInTheDocument();
    expect(getByLabelText(/Description/i)).toBeInTheDocument();
    expect(getByText(/Add Book/i)).toBeInTheDocument();
  });
});
