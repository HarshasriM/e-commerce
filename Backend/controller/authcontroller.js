const express = require("express");
const appi = express();
const router = express.Router();
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const Product = require("../model/productsModel");
const User = require("../model/userModel");
const { isDate } = require("util");
module.exports =router;
const PORT = 8000;
//API Creation
const storage = multer.diskStorage({
    destination:"upload/images",
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage});
//creating upload endpoint for images
//we pass fileld name in single()
///by using this we get slash end point to use images folder
appi.use(express.static("../upload"));
router.post("/upload",upload.single("product"),(req,res)=>{
    res.send({
        success:1,
        image_url:`http://localhost:${PORT}/images/${req.file.filename}`,

    })
})


//creating endpoint for addproduct

router.post("/addproduct",async (req,res)=>{
    let products = await Product.find({});
    let id;
    if(products.length>0){
        let last_product_array=products.slice(-1)
        id = last_product_array[0].id+1
    }
    else{
        id=0;
    }
    const product = Product.create({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
    },(err)=>{
        if(err)
            console.log(err);
    })
    res.send({
        success:true,
        name:req.body.name,
    })
})

//creating api for deleting products

router.post('/removeproduct',async(req,res)=>{
    await Product.findOneAndDelete({id:req.body.id})
    res.send({
        success:true,
        name:req.body.name,
    })
    
})

//creating api for getting all products

router.get('/allproducts',async (req,res)=>{
    let products_list = await Product.find({})
    console.log("all products fetched")
    res.send(products_list)
})

//creating Endpoint for registering the user
router.post('/signup',(req,res)=>{
    let email = req.body.email
    let info=[];
     User.find({email},(err,data)=>{
               if(err) throw err
               
               for (let i of data){
                    info.push(i)
               }
               if(info.length>0){
        
                res.send({
                    success:false,
                    errors:"email is existed"
                })
            }
            else{
                let cart={}
                for(let i =0 ;i<300;i++){
                cart[i]=0;
            }
            const user = User.create({
                name:req.body.username,
                email:req.body.email,
                password:req.body.password,
                cart:cart,
            })
            const data = {
                user:{
                    id:user._id
                }
            }
            const token = jwt.sign(data,"secrete-key");
            res.send({
                success:true,
                token:token
            })
            }
              
    })
   
   
})
//create end point for login
router.post("/login",(req,res)=>{
     User.find({email:req.body.email},(err,data)=>{
        if(err)
            throw err
        if(data.length){
            const passcompar = (req.body.password == data[0].password)
            if(passcompar){
                const data1={
                    user:{
                        id:data[0]._id,
                    }
                }
                const token = jwt.sign(data1,"secret");
                res.send({
                    success:true,
                    token:token,
                })
            }
            else{
                res.json({
                    success:false,
                    message:"wrong password",
                })
            }
        }
        else{
            res.json({
                success:false,
                message:"wrong email id",
            })
        }
    })
})
//creating middle ware to fetchuser
const fetchuser = async(req,res,next)=>{
    
}
//creating end poin for the add ro cart function
router.post('/addtocart',(req,res)=>{
    const token=req.headers["auth-token"];
    if(!token){
        res.send({
            errors:"please authenticate  valid token"
        })
    }
    else{
            jwt.verify(token,'secret',(err,result)=>{
                if(err) throw err
                req.user=result
            })
    }
    console.log(req.body,req.user);
    res.send({success:true})
})


