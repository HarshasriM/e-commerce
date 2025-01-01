// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import "./Addproduct.css";
import upload_area from "../../assets/Ecommerce_Admin_Panel_Assets/Admin Panel Assets/upload_area.svg"
const Addproduct = () => {

    const [image,setImage]=useState(false);
    const [productDetailes,setProductDetailes]=useState({
        name:"",
        image:"",
        category:"women",
        new_price:"",
        old_price:""

    })
    const changeHandler =(e)=>{
        setProductDetailes({
            ...productDetailes,
            [e.target.name]:e.target.value
        })
    }
    const imageHandler =(event)=>{
        setImage(event.target.files[0]);
    }
    const addProduct = async ()=> {
        console.log(productDetailes);
        let responseData;
        let product = productDetailes;
        let formData = new FormData()
        formData.append('product',image)
        await fetch('http://localhost:8000/auth/upload',{
            method:"POST",
            headers:{
                Accept:"application/json",
            },
            body:formData,
        })
        .then((res)=>res.json())
        .then((data)=>{responseData=data})
        if(responseData.success){
            product.image=responseData.image_url;
            console.log(product)
            await fetch("http://localhost:8000/auth/addproduct",{
                method:"POST",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(product)
            })
            .then((res)=>res.json())
            .then((data)=>{
                if(data.success)
                    alert("product added");
                else   
                    alert("Failed")
            })
        }


    }
    return (
        <div className='addproduct'>
            <div className='addproduct-itemfield'>
                <p>Product Title</p>
                <input value={productDetailes.name} onChange={(e)=>changeHandler(e)} type="text" name='name' placeholder='Type here'/>
            </div>
            <div className='addproduct-price'>
                <div className='addproduct-itemfield'>
                    <p>Price</p>
                    <input value={productDetailes.old_price} onChange={(e)=>changeHandler(e)} type="text" name="old_price" placeholder='Type here'/>

                </div>
                <div className='addproduct-itemfield'>
                    <p> Offer Price</p>
                    <input value={productDetailes.new_price} onChange={(e)=>changeHandler(e)} type="text" name="new_price" placeholder='Type here'/>
                </div>
            </div>
            <div className='addproduct-itemfield'>
                <p>Product category</p>
                <select value={productDetailes.category} onChange={(e)=>changeHandler(e)} name="category" className='add-product-selector'>
                    <option value="women">Women</option>
                    <option value="men">Men</option>
                    <option value="kid">Kid</option>
                </select>
            </div>
            <div className='addproduct-itemfield'>
                <label htmlFor='file-input'>
                    <img src={(image)?URL.createObjectURL(image):upload_area} className='addproduct-thumbnail-img'/>
                </label>
                <input onChange={(e)=>imageHandler(e)} type="file" name='image' id="file-input" hidden/>
            </div>
            <button onClick={(e)=>{addProduct(e)}} className='addproduct-button'>ADD</button>
        </div>
    );
};

export default Addproduct;