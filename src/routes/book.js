const bookRouter = require('express').Router();

const { authenticate } = require('routes/middleware/auth');
const booksController = require('controller/books');

bookRouter
  .get('/list', authenticate, booksController.listAllBooks)
  .get('/', authenticate, booksController.getBook)
  .post('/', authenticate, booksController.addBook)
  .put('/', authenticate, booksController.updateBook)
  .delete('/', authenticate, booksController.deleteBook);

module.exports = bookRouter;
