const mongoose = require('mongoose')

const Schema = mongoose.Schema

const orderSchema = new Schema({
    userid:
    {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    name: String,
    address: String,
    contact: String,
    quantity: Number,
    bookid:
    {
        type: mongoose.Types.ObjectId,
        ref: 'Book'
    }
})

module.exports = mongoose.model('Order', orderSchema)