import React,{createContext, useState} from "react";
import all_product from "../Components/Assets/Ecommerce_Frontend_Assets/Assets/all_product";
export const ShopContext = createContext(null);
const getDefaultCart = ()=>{
    let cart={}
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index]=0   
    }
    return cart
}
const ShopContextProvider = (props)=>{
    const [cartItems,setCartItems]= useState(getDefaultCart());
   
    const addToCart =(itemid)=>{
        
        if(sessionStorage.getItem("auth-token")){
            setCartItems((prev)=>({...prev,[itemid]:prev[itemid]+1}));
            fetch("http://localhost:8000/auth/addtocart",{
                method:"POST",
                headers:{
                    Accept:"application/form-data",
                    "auth-token":`${sessionStorage.getItem("auth-token")}`,
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({"itemId":itemid})
            })
            .then((res)=>res.json())
            .then((data)=>console.log(data))
        }
        else{
            alert("please login in ")
        }
    }
    const removeFromCart =(itemid)=>{
        setCartItems((prev)=>({...prev,[itemid]:prev[itemid]-1}))
    }
    const getTotalCartAmount =()=>{
        let totalAmount=0
        for(const i in cartItems){
            if(cartItems[i]>0){
                let itemInfo = all_product.find((product)=>product.id===Number(i))
                totalAmount += itemInfo.new_price*cartItems[i];
            }
        }
        return totalAmount;
    }
    const getTotalCartItems = ()=>{
        let totalItem=0
        for(const item in cartItems){
            if(cartItems[item]>0)
                totalItem++
        }
        return totalItem;
    }
    const contextValue = {all_product,cartItems,addToCart,removeFromCart,getTotalCartAmount,getTotalCartItems}
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>

    )
}
export default ShopContextProvider;