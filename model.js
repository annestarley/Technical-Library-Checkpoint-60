const uuid = require('uuid/v4')
const fs = require('fs')
const books = require('./books.json')
// let books = JSON.parse(fs.readFileSync('./books.json'))
const authors = require('./authors.json')
// let authors = JSON.parse(fs.readFileSync('./authors.json'))
console.log(books)
console.log(authors)

function getAllBooks() {
  return books
}

function getAllAuthors() {
  return authors
}

function getBookById(id) {
  let book = books.find(book => book.id === id)
  if (book) return book
}

function getAuthorById(id) {
  let author = authors.find(author => author.id === id)
  if (author) return author
}

function createBook(name, borrowed, description, firstName, lastName) {
  const book = {
    id: uuid(),
    name: name,
    borrowed: borrowed,
    description: description,
    authors: {
      id: uuid(),
      firstName: firstName,
      lastName: lastName
    }
  }
  books.push(book)
  authors.push(book.authors)

  const booksJSON = JSON.stringify(books)
  const authorsJSON = JSON.stringify(authors)
  fs.writeFileSync('./books.json', booksJSON)
  fs.writeFileSync('./authors.json', authorsJSON)
  return book
}

function updateBook(id, name, borrowed, description, firstName, lastName) {
  const book = getBookById(id)
  book.name = name
  book.borrowed = borrowed
  book.description = description
  book.authors[0].firstName = firstName
  book.authors[0].lastName = lastName

  const author = getAuthorById(book.authors[0].id)
  author.firstName = firstName
  author.lastName = lastName

  const booksJSON = JSON.stringify(books)
  const authorsJSON = JSON.stringify(authors)
  fs.writeFileSync('./books.json', booksJSON)
  fs.writeFileSync('./authors.json', authorsJSON)
  console.log(book)
  console.log(author)

  return book
}

function deleteBook(id) {
  const book = getBookById(id)
  const author = getAuthorById(book.authors[0].id)
  const bookIndex = books.indexOf(book)
  const authorIndex = authors.indexOf(author)
  books.splice(bookIndex, 1)
  authors.splice(bookIndex, 1)
  console.log("BOOKS", books)
  console.log("AUTHORS", authors)
  return books
}

module.exports = {
  getAllBooks,
  getAllAuthors,
  getBookById,
  getAuthorById,
  createBook,
  updateBook,
  deleteBook
}
