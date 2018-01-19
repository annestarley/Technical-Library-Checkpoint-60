const uuid = require('uuid/v4')
// console.log(uuid())

const books = [
  {
    id: "ccfd6205-39e9-4fb6-97cc-319afddae86a",
    name: "Harry Potter and the Philosophers Stones",
    borrowed: true,
    description: "First book of the Harry Potter series.",
    authors: [
      {
        id: "522a64ed-3b70-4b42-accb-f742d791f2f1",
        firstName: "J.K.",
        lastName: "Rowling"
      }
    ],
  },
  {
    id: '5ebd7cde-42f1-477b-9f5e-d61f1d3a8734',
    name: "Harry Potter and the Chamber of Secrets",
    borrowed: false,
    description: "Second book of Harry Potter series.",
    authors: [
      {
        id: "3fc3a91c-1e06-41b9-8429-fcb2f99546f5",
        firstName: "J.K.",
        lastName: "Rowling"
      }
    ],
  }
]

const authors = [
  {
    id: "522a64ed-3b70-4b42-accb-f742d791f2f1",
    firstName: "J.K.",
    lastName: "Rowling"
  },
  {
    id: "3fc3a91c-1e06-41b9-8429-fcb2f99546f5",
    firstName: "J.K.",
    lastName: "Rowling"
  }
]

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
  console.log(books)
  console.log(authors);
  return book
}

module.exports = {
  getAllBooks,
  getAllAuthors,
  getBookById,
  getAuthorById,
  createBook
}
