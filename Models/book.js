const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
    bookTitle: String,
    bookDescription: String,
    bookCategory: String,
    bookAuthor: String,
    bookPrice: Number,
    bookImage: String,
})

module.exports = mongoose.model('Book', bookSchema)
