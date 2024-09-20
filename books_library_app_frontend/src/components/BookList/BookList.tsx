import React from "react";
import useSWR from "swr";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { Book } from "../../types/book-types";
import { getBooks } from "../../api/books/getBooks";
import { deleteBook } from "../../api/books/deleteBook";
import EditBookForm from "../EditBookForm/EditBookForm";

const BookList: React.FC = () => {
  const { data: books, error, mutate } = useSWR<Book[]>("/books", getBooks);

  if (error) return <div>Failed to load books</div>;
  if (!books) return <div>Loading...</div>;

  const handleDelete = async (id: number) => {
    await deleteBook(id);
    mutate();
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>Genre</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((book) => (
            <TableRow key={book.id}>
              <TableCell>{book.title}</TableCell>
              <TableCell>{book.author}</TableCell>
              <TableCell>{book.genre}</TableCell>
              <TableCell>{book.description}</TableCell>
              <TableCell>
                <EditBookForm book={book} mutate={mutate} />
                <Button onClick={() => handleDelete(book.id)} color="secondary">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BookList;
