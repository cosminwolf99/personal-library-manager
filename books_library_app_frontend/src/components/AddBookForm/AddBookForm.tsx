import React from "react";
import { useFormik } from "formik";
import { mutate } from "swr";
import { TextField, Button, Box, Typography } from "@mui/material";
import { addBook } from "../../api/books/addBook";
import validationSchema from "../../utils";

const AddBookForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      genre: "",
      description: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      await addBook(values);
      mutate("/books");
      resetForm();
    },
  });

  const isFormEmpty = Object.values(formik.values).every(
    (value) => value === ""
  );

  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Add New Book
      </Typography>
      <TextField
        fullWidth
        id="title"
        name="title"
        label="Title"
        value={formik.values.title}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.title && Boolean(formik.errors.title)}
        helperText={formik.touched.title && formik.errors.title}
        margin="normal"
      />
      <TextField
        fullWidth
        id="author"
        name="author"
        label="Author"
        value={formik.values.author}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.author && Boolean(formik.errors.author)}
        helperText={formik.touched.author && formik.errors.author}
        margin="normal"
      />
      <TextField
        fullWidth
        id="genre"
        name="genre"
        label="Genre"
        value={formik.values.genre}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.genre && Boolean(formik.errors.genre)}
        helperText={formik.touched.genre && formik.errors.genre}
        margin="normal"
      />
      <TextField
        fullWidth
        id="description"
        name="description"
        label="Description"
        value={formik.values.description}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.description && Boolean(formik.errors.description)}
        helperText={formik.touched.description && formik.errors.description}
        margin="normal"
        multiline
        rows={4}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={isFormEmpty || !formik.isValid || formik.isSubmitting}
      >
        Add Book
      </Button>
    </Box>
  );
};

export default AddBookForm;
