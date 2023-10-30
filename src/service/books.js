const booksModel = require('models/book');

const getBookFromBookId = async ({ bookId }) => {
  const query = { bookId, isDeleted: false };
  const projection = {_id: 0};
  return booksModel.findOne({ query, projection });
}

const listAllBooks = async () => {
  try {
    const query = { isDeleted: false };
    const projection = { _id: 0 };
    const listOfBooks = await booksModel.find({ query, projection });

    return { ok: true, data: listOfBooks };
  } catch (err) {
    console.info(`ERROR: Books Service | listAllBooks | ${JSON.stringify(err)}`);
    return { ok: false, msg: 'Something went wrong while fetching all books data' };
  }
}

const getBook = async ({ bookId }) => {
  try {
    const book = await getBookFromBookId({ bookId });

    if (!book) {
      return { ok: true, data: `Book with bookId: ${bookId} doesn't exist` };
    }
    return { ok: true, data: book };
  } catch (err) {
    console.info(`ERROR: Books Service | getBook | ${JSON.stringify(err)}`);
    return { ok: false, msg: `Something went wrong while fetching data of book with bookId : ${bookId}` }
  }
}

const addBook = async ({ bookId, title, author, summary = '' }) => {
  try {
    const book = await getBookFromBookId({ bookId });
    if (book) {
      return { ok: false, msg: `Book with bookId: ${bookId} already exist` };
    }

    const insertDict = { bookId, title, author, summary, isDeleted: false };
    await booksModel.create({ insertDict });
    return { ok: true, data: 'Book Successfully added' };
  } catch (err) {
    console.info(`ERROR: Books Service | addBook | ${JSON.stringify(err)}`);
    return { ok: false, msg: `Something went wrong while adding new book with bookId : ${bookId}` }
  }
}

const updateBook = async ({ bookId, title, author, summary = '' }) => {
  try {
    const book = await getBookFromBookId({ bookId });
    if (!book) {
      return { ok: false, msg: `Book with bookId: ${bookId} doesn't exist` };
    }

    const query = { bookId, isDeleted: false };
    const updateDict = { title, author, summary };
    await booksModel.updateOne({ query, updateDict });
    return { ok: true, data: 'Book Successfully Updated' };
  } catch (err) {
    console.info(`ERROR: Books Service | updateBook | ${JSON.stringify(err)}`);
    return { ok: false, msg: `Something went wrong while updating a book with bookId : ${bookId}` }
  }
}

const deleteBook = async ({ bookId }) => {
  try {
    const book = await getBookFromBookId({ bookId });
    if (!book) {
      return { ok: false, msg: `Book with bookId: ${bookId} doesn't exist` };
    }

    const query = { bookId, isDeleted: false };
    const updateDict = { isDeleted: true };
    await booksModel.updateOne({ query, updateDict });
    return { ok: true, data: 'Book Successfully Deleted' };
  } catch (err) {
    console.info(`ERROR: Books Service | deleteBook | ${JSON.stringify(err)}`);
    return { ok: false, msg: `Something went wrong while deleting a book with bookId : ${bookId}` }
  }
}

module.exports = {
  listAllBooks,
  getBook,
  addBook,
  updateBook,
  deleteBook
}