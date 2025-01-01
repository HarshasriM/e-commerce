const mongoose = require("mongoose");

//defining our document structure
const productSchema = new mongoose.Schema(
    {
        name:String,
        id:Number,
        old_price:Number,
        new_price:Number,
        category:String,
        available:Boolean,
        image:String,
    }
)
//users ---> Schema  userSchema ---> keeping the schema in users collection
let products = mongoose.model("products",productSchema);

module.exports = products;