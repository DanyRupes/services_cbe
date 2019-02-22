var mongoose = require('mongoose')

url = "mongodb://danyrupes:A12345678@ds147125.mlab.com:47125/blues_customer"

mongoose.connect(url);


mongoose.connection.on('connected', function(){
    console.log("mongodb Connection is open at " +url)
})
mongoose.connection.on('error', function(err){
    console.log("mongodb Connection error " +err)
})

var customer_scheme = new mongoose.Schema({
    date : {type: String}, start_time:{type: String}, end_time:{type: String}, title:{type: String}, price:{type: String},
     category:{type: String}, status:{type: String}
})


var Customer = mongoose.model("Customer_Order",customer_scheme)
module.exports = {Customer:Customer}