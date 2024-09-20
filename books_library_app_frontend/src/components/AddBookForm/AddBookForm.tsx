import React from "react";
import { useFormik } from "formik";
import { TextField, Button, Box } from "@mui/material";
import { mutate } from "swr";
import { addBook } from "../../api/books/addBook";

const AddBookForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      genre: "",
      description: "",
    },
    onSubmit: async (values, { resetForm }) => {
      await addBook(values);
      mutate("/books");
      resetForm();
    },
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={{ mb: 4 }}>
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
      <Button type="submit" variant="contained" color="primary">
        Add Book
      </Button>
    </Box>
  );
};

export default AddBookForm;
