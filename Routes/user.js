const express = require('express')
const router = express.Router()

const UserController = require('../controllers/UserController')
const BookController = require('../controllers/BookController')
const OrderController = require('../controllers/OrderController')

router.post('/register', UserController.registerUser)
router.post('/login', UserController.authenticateUser)
router.post('/admin/books/addBook', BookController.addBook)
router.get('/books/getBooks', BookController.getBooks)
router.post('/admin/orders/addOrder', OrderController.addOrder)
router.get('/admin/orders/getOrders', OrderController.getOrders)

module.exports = router