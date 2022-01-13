// const express = require('express')
// const router = express.Router()
// const Transaction = require('../models/transactions')


const express = require('express')
const router = express.Router()
var Transaction = require("../models/Transaction")
// var request = require('request')
var mongoose = require('mongoose')
// const moment = require('moment')
const { route } = require('express/lib/application')
const { findByIdAndDelete } = require('../models/Transaction')




router.get('/sanity', (req, res) => {
    res.send('All good!')
  })
  

router.get('/transactions', (req,res) => {
    Transaction.find({}, function(err, transactions){
        res.send(transactions)
    })
})

router.post('/transactions', async (req, res)=>{
    const newTransaction = new Transaction({
        amount: req.body.amount,
        vendor: req.body.vendor,
        category: req.body.category
    })
    const save= await newTransaction.save()
    res.send(save)
})


router.delete('/transactions/:transaction', async (req, res)=>{
    const tran = req.params.transaction
    try{
        const deleteTran= await Transaction.findByIdAndDelete(tran.id)
        res.send(deleteTran)
        res.send(await Transaction.find({}))

    }
    catch(error){
        "Error catched"
    }

})


router.get('/group', async (req, res) => {
    let result = await Transaction.aggregate(
        [
            {
                $group:
                {
                    _id: "$category", sum: { $sum: "$amount" }
                }
            }
        ]
    )

    res.send(result)
})


router.get('/sum', async (req, res) => {
    let result = await Transaction.aggregate(
        [
            {
                $group:
                {
                    _id: null, balance: { $sum: "$amount" }
                }
            }
        ]
    )

    res.send(result)
})


module.exports = router