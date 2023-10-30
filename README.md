# Node.js Books API

Welcome to the Awesome Node.js BrewApp Assignment repository! 📚🚀

## Table of Contents
- [API Endpoints](#api-endpoints)
- [Setup and Local Development](#setup-and-local-development)
- [Decisions and Assumptions](#decisions-and-assumptions)

## API Endpoints
This Node.js project provides APIs to manage a book list. You can perform the following operations:

### 1. Get Book List
- **Endpoint**: `/book/list`
- **Method**: GET
- **Description**: Get the list of all books.
- **Usage**: Retrieve the list of books by sending a GET request to `/book/list`.

### 2. Get a Book
- **Endpoint**: `/book`
- **Method**: GET
- **Description**: Get a book from Book ID.
- **Usage**: Retrieve a book info by sending a GET request to `/book` with the book's ID in the query param..

### 3. Add a New Book
- **Endpoint**: `/book`
- **Method**: POST
- **Description**: Add a new book to the list.
- **Usage**: To add a new book, send a POST request to `/book` with the book details (bookId, title, author, summary) in the request body.

### 4. Update a Book
- **Endpoint**: `/book`
- **Method**: PUT
- **Description**: Update an existing book by providing its ID.
- **Usage**: Send a PUT request to `/book` with the book ID and the updated book details in the request body.

### 5. Delete a Book
- **Endpoint**: `/book?bookId=`
- **Method**: DELETE
- **Description**: Delete a book from the list using its ID.
- **Usage**: To delete a book, send a DELETE request to `/book?bookId=` with the book's ID in the query param.

## Setup and Local Development
To set up and run this application locally, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Tanmay3610/BrewAssignment.git
   ```

2. **Install Dependencies**
   ```bash
   cd BrewAssignment
   npm install
   ```

3. **Configure Environment Variables**
   - Create a `.env` file in the project root and specify all required environment variables that are mentioned in `.env.example`.

4. **Start the Application**
   ```bash
   npm start
   ```

5. **Access the API**
   - The API will be accessible at `http://localhost:<Port mentioned in .env>`. You can use tools like Postman to interact with the endpoints.

6. **Enjoy! 🎉**

## Decisions and Assumptions
During the development process, following decisions and assumptions were made:

- Summary is taken as optional field when adding the book
- Deleted books are soft-deleted, preserving the records in case they may be useful in the future.
- This API assumes that the user provides a custom identifier for books rather than using a default MongoDB ObjectId.
- To access these endpoints, include your access token in the Authorization header of your HTTP requests.

## Deployment Process
- Logged in to the Render account.
- Chose the Git repository where the Node.js Book API code is hosted.
- Under the "Environment" section, added the environment variables from .env file.
- In the "Build" and "Start" section, specified i.e. "yarn" and "npm start" respectively.
- Tested the APIs by sending requests to the provided URL through postman.

Base URL of hosted Service is: `https://brew-app-assignment-node.onrender.com`


Happy coding! 🚀📚🔥