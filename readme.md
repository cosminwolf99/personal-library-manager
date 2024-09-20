earl# Personal Library Manager

This is a Personal Library Manager application built with React.js, TypeScript, SWR, axios, formik, and MUI 5. It allows users to manage their personal book collection by adding, viewing, updating, and deleting books.

## Features

- View a list of books in a responsive table format
- Add new books with title, author, genre, and description
- Edit existing book details
- Delete books from the collection
- Responsive design that works well on different screen sizes

## Technologies Used

- React.js: A JavaScript library for building user interfaces
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript
- SWR: A React Hooks library for data fetching and caching
- axios: A promise-based HTTP client for making API requests
- formik: A small library that helps with form handling in React
- Material-UI (MUI 5): A popular React UI framework for faster and easier web development

## Setup and Running the Application

1. Clone the repository.
2. Set up and start the mock server:
 cd books_library_app_mock_server in a terminal, then npm install and lastly  npm start  => The server will run on http://localhost:3001
4. In a new terminal window, set up and start the frontend application: cd ../books_library_app_frontend in a terminal, then  npm install and lastly  npm start => The application will run on http://localhost:3000

## Usage

1. View Books: The main page displays a list of all books in your library.
2. Add a Book: Fill out the form at the top of the page with the book's details and click "Add Book".
3. Edit a Book: Click the "Edit" button next to a book in the list, modify the details in the popup form, and click "Save".
4. Delete a Book: Click the "Delete" button next to a book in the list to remove it from your library.

## API Endpoints

The mock server provides the following endpoints:

- GET /books: Retrieve all books
- POST /books: Add a new book
- PUT /books/:id: Update a book by ID
- DELETE /books/:id: Delete a book by ID
