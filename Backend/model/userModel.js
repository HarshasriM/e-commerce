const mongoose = require("mongoose");

//defining our document structure
const userSchema = new mongoose.Schema(
    {
      name:{
        type:String,

      },
      email:{
        type:String,
      },
      password:{
        type:String

      },
      cart:{
        type:Object
      },
      date:{
        type:Date,
        default:Date.now()
      }
    }
)
//users ---> Schema  userSchema ---> keeping the schema in users collection
let users = mongoose.model("users",userSchema);

module.exports = users;