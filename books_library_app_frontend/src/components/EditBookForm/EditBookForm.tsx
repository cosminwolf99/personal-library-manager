import React, { useState } from "react";
import { useFormik } from "formik";
import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { KeyedMutator } from "swr";
import { Book } from "../../types/book-types";
import { updateBook } from "../../api/books/updateBook";

interface EditBookFormProps {
  book: Book;
  mutate: KeyedMutator<Book[]>;
}

const EditBookForm: React.FC<EditBookFormProps> = ({ book, mutate }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      title: book.title,
      author: book.author,
      genre: book.genre,
      description: book.description,
    },
    onSubmit: async (values) => {
      await updateBook({ ...book, ...values });
      mutate();
      handleClose();
    },
  });

  return (
    <>
      <Button onClick={handleClickOpen} color="primary">
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Book</DialogTitle>
        <DialogContent>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="title"
              name="title"
              label="Title"
              value={formik.values.title}
              onChange={formik.handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              id="author"
              name="author"
              label="Author"
              value={formik.values.author}
              onChange={formik.handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              id="genre"
              name="genre"
              label="Genre"
              value={formik.values.genre}
              onChange={formik.handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              id="description"
              name="description"
              label="Description"
              value={formik.values.description}
              onChange={formik.handleChange}
              margin="normal"
              multiline
              rows={4}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={() => formik.handleSubmit()} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EditBookForm;
