const booksService = require('service/books');

const { ERROR_STRINGS } = require('utils/constants');

const listAllBooks = async (_, res) => {
  const bookListResponse = await booksService.listAllBooks();

  if (bookListResponse.ok) {
    return res.success({ data: bookListResponse.data });
  }
  return res.failure({ msg: bookListResponse.msg });
}

const getBook = async (req, res) => {
  const { query: { bookId } } = req;

  if (!bookId || isNaN(bookId)) {
    return res.invalid({ msg: ERROR_STRINGS.INVALID_BOOK_ID });
  }

  const bookDetailResponse = await booksService.getBook({ bookId });

  if (bookDetailResponse.ok) {
    return res.success({ data: bookDetailResponse.data });
  }
  return res.failure({ msg: bookDetailResponse.msg });
}

const addBook = async (req, res) => {
  const { body: { bookId, title, author, summary } } = req;

  if (!bookId || isNaN(bookId)) {
    return res.invalid({ msg: ERROR_STRINGS.INVALID_BOOK_ID });
  }

  if (!title) {
    return res.invalid({ msg: ERROR_STRINGS.INVALID_TITLE });
  }

  if (!author) {
    return res.invalid({ msg: ERROR_STRINGS.INVALID_AUTHOR });
  }

  const addBookResponse = await booksService.addBook({ bookId, title, author, summary });

  if (addBookResponse.ok) {
    return res.success({ data: addBookResponse.data });
  }
  return res.failure({ msg: addBookResponse.msg });
}

const updateBook = async (req, res) => {
  const { body: { bookId, title, author, summary } } = req;

  if (!bookId || isNaN(bookId)) {
    return res.invalid({ msg: ERROR_STRINGS.INVALID_BOOK_ID });
  }

  if (!title) {
    return res.invalid({ msg: ERROR_STRINGS.INVALID_TITLE });
  }

  if (!author) {
    return res.invalid({ msg: ERROR_STRINGS.INVALID_AUTHOR });
  }

  const updateBookResponse = await booksService.updateBook({ bookId, title, author, summary });

  if (updateBookResponse.ok) {
    return res.success({ data: updateBookResponse.data });
  }
  return res.failure({ msg: updateBookResponse.msg });
}

const deleteBook = async (req, res) => {
  const { query: { bookId } } = req;

  if (!bookId || isNaN(bookId)) {
    return res.invalid({ msg: ERROR_STRINGS.INVALID_BOOK_ID });
  }

  const deleteBookResponse = await booksService.deleteBook({ bookId });

  if (deleteBookResponse.ok) {
    return res.success({ data: deleteBookResponse.data });
  }
  return res.failure({ msg: deleteBookResponse.msg });
}

module.exports = {
  listAllBooks,
  getBook,
  addBook,
  updateBook,
  deleteBook
}