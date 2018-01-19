const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const bodyParser = require('body-parser')
const morgan = require('morgan')
const uuid = require('uuid/v4')

const controller = require('./controller')
const model = require('./model')

app.disable('x-powered-by')
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))
app.use(bodyParser.json())

app.get('/', (req, res, next) => {
  res.send('Technical Library')
})

app.get('/books', controller.booksController)
app.get('/authors', controller.authorsController)
app.get('/books/:id', controller.bookByIdController)
app.get('/authors/:id', controller.authorByIdController)
app.post('/books', controller.bookCreaterController)
app.put('/books/:id', controller.bookUpdaterController)
app.delete('/books/:id', controller.bookDeleterController)

app.use((req, res, next) => {
  res.status(404).json({ error: { message: 'Not found' }})
})

const listener = () => `Listening on port ${port}!`
app.listen(port, listener)

module.exports = app
