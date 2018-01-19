let books = require('./books');
let authors = require('./authors');
let fs = require('fs');

let db = { authors };
let data = JSON.parse(fs.readFileSync('./data.json'))
