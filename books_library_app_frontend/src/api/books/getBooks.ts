import axios from "axios";
import API_URL from "../../constants/URLs";
import { Book } from "../../types/book-types";

export const getBooks = async (): Promise<Book[]> => {
  const response = await axios.get(`${API_URL}/books`);
  return response.data;
};
