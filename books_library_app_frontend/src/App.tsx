import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import AddBookForm from './components/AddBookForm/AddBookForm';
import BookList from './components/BookList/BookList';

const theme = createTheme();

const  App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md">
        <h1>Personal Library Manager</h1>
        <AddBookForm />
        <BookList />
      </Container>
    </ThemeProvider>
  );
}

export default App;