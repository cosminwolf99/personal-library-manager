import axios from "axios";
import { Book } from "../../types/book-types";
import API_URL from "../../constants/URLs";

export const updateBook = async (book: Book): Promise<Book> => {
  const response = await axios.put(`${API_URL}/books/${book.id}`, book);
  return response.data;
};
