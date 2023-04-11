const { default: mongoose } = require('mongoose')
const Order = require('../Models/order')

class OrderController {
    static async addOrder(req, res, next) {
        console.log(req.body)
        try {
            const order = new Order({userid: new mongoose.Types.ObjectId(req.body.userid), name: req.body.name, address: req.body.address, contact: req.body.contact, quantity: req.body.quantity, bookid: new mongoose.Types.ObjectId(req.body.bookid)})
            await order.save()
        } catch(e) {
            return next(e)
        }
        return res.json({success: true})
    }

    static async getOrders(req, res, next) {
        console.log('Hi')
        try {
            const orders = await Order.find().populate("userid").populate("bookid")
            console.log(orders)
            return res.json({success: true, orders: orders})
        } catch(e) {
            return next(e)
        }
    }
}

module.exports = OrderController