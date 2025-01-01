// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import "./Listproduct.css"
import remove_icon from "../../assets/Ecommerce_Admin_Panel_Assets/Admin Panel Assets/cross_icon.png"
const Listproduct = () => {
    const [allproducts,setAllProducts]=useState([]);

    const fetchinfo = async()=>{
        await fetch("http://localhost:8000/auth/allproducts")
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            setAllProducts(data);
        })
    }
    const removeProduct = async(id)=>{
        await fetch("http://localhost:8000/auth/removeproduct",{
            method:"POST",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json",
            },
            body:JSON.stringify({id:id})
           
        })
        await fetchinfo();

    }
    useEffect(()=>{
        fetchinfo();
    },[])
    return (
        <div className='listproduct'>
            <h1>All Products List</h1>
            <div className='listproduct-format-main'>
                <p>Product</p>
                <p>Title</p>
                <p>Old Price</p>
                <p>New Price</p>
                <p>Category</p>
                <p>Remove</p>
            </div>
           
            <div className='listproducts-allproducts' >
                 
             <hr/>
            {allproducts.map((product,index)=>{
                    return (
                       
                        <div className='listproduct-format-main listproduct-format'  key={index}>
                        <img className='listproduct-product-icon' src={product.image}/>
                        <p>{product.name}</p>
                        <p>${product.old_price}</p>
                        <p>${product.new_price}</p>
                        <p>{product.category}</p>
                        <img className='listproduct-remove-icon' src={remove_icon} onClick={()=>{removeProduct(product.id)}}/>
                        <hr/>
                    </div>
                    
                    )
                })}
            </div>
               
        </div>
    );
};

export default Listproduct;