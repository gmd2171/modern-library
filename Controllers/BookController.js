const Book = require('../Models/book')

class BookController {
    static async addBook(req, res, next) {
        try {
            const book = new Book({ bookTitle: req.body.bookTitle, bookDescription: req.body.bookDescription, bookCategory: req.body.bookCategory, bookAuthor: req.body.bookAuthor, bookPrice: req.body.bookPrice, bookImage: req.body.imageURL })
            await book.save()
        } catch (e) {
            return next(e)
        }
        return res.json({ success: true })
    }

    static async getBooks(req, res, next) {
        try {
            const books = await Book.find()
            return res.json({ success: true, books: books })
        } catch (e) {
            return next(e)
        }
    }
}

module.exports = BookController
