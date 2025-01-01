const express = require("express");
const app = express();
const AuthController = require("./controller/authcontroller");
const PORT = 8000;
const db = require("./db");
var cors = require("cors");
const multer = require("multer")

app.use(cors());
app.use(express.json())
app.use("/auth",AuthController);
app.get('/',(req,res) =>{
    res.send("e-commerce App");
});

app.listen(PORT,()=>console.log("Sever is listening on the port",PORT));