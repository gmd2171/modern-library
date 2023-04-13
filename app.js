const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const dbURL = 'mongodb+srv://gmd:gmd@cluster0.gutv6.mongodb.net/digitalLibrary?retryWrites=true&w=majority'
const userRouter = require('./Routes/user')

app.use(cors())
app.use(express.json())
app.use('/', userRouter)
mongoose.connect(dbURL)

app.listen(3000, () => {
    console.log('server listening on port 3000')
})
