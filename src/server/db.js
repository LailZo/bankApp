const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/bank', { useNewUrlParser: true })
const json = require('../../db.json')
const Transaction = require('./models/Transaction')

const init = Transaction.find({}, async function(err, expenses){
    if(expenses.length === 0){
        for( i=0; i< json.length; i++){
            new Transaction(json[i]).save()
    }
}
}
)

exports.init = init 


