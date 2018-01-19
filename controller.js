const model = require('./model')

const booksController = (req, res, next) => {
  const books = model.getAllBooks()
  res.json(books)
}

const authorsController = (req, res, next) => {
  const authors = model.getAllAuthors()
  res.json(authors)
}

const bookByIdController = (req, res, next) => {
  const id = req.params.id
  const book = model.getBookById(id)
  if (!book) return next({ status: 404, message: `Could not find book with id of ${id}.`})
  res.json(book)
}

const authorByIdController = (req, res, next) => {
  const id = req.params.id
  const author = model.getAuthorById(id)
  if (!author) return next({status: 404, message: `Could not find author with id of ${id}.`})
  res.json(author)
}

const bookCreaterController = (req, res, next) => {

}

const bookUpdaterController = (req, res, next) => {

}

const bookDeleterController = (req, res, next) => {

}

module.exports = {
  booksController,
  authorsController,
  bookByIdController,
  authorByIdController,
  bookCreaterController,
  bookUpdaterController,
  bookDeleterController
}
