import axios from "axios";
import { Book } from "../../types/book-types";
import API_URL from "../../constants/URLs";

export const addBook = async (book: Omit<Book, "id">): Promise<Book> => {
  const response = await axios.post(`${API_URL}/books`, book);
  return response.data;
};
