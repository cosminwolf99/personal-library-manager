import axios from "axios";
import API_URL from "../../constants/URLs";

export const deleteBook = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/books/${id}`);
};
