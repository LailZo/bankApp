const express = require('express')
const api = require('./routes/api')
const mongoose = require('mongoose')
const Transaction = require('./models/Transaction')
const init = require('./db')
const app = express()
// const path = require('path')
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/bankApp')
// mongoose.connect('mongodb://localhost/DBName', { useNewUrlParser: true })

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})
app.use('/', api)


mongoose.connect('mongodb://localhost/bank', { useNewUrlParser: true })


const PORT = 3001

// app.listen(PORT, function () {
//     console.log('server is listening');
// })
app.listen(process.env.PORT || PORT);