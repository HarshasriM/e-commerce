import React, { useContext } from "react";
import "./CartItems.css"
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/Ecommerce_Frontend_Assets/Assets/cart_cross_icon.png"
const CartItem = ()=>{
    const {all_product,cartItems,removeFromCart,getTotalCartAmount}=useContext(ShopContext)
    return(
        <div className="cartitems">
            <div className="cartitems-format-main">
                    <p>
                        Products
                    </p>
                    <p>
                        Title
                    </p>
                    <p>
                        Price
                    </p>
                    <p>
                        Quantity
                    </p>
                    <p>
                        Total
                    </p>
                    <p>
                        Remove
                    </p>
            </div>
            <hr/>
            {all_product.map((e)=>{
                if(cartItems[e.id]>0){
                    return(
                        <>
                            <div className="cartitems-format cartitems-format-main">
                                <img className="cart-icon" src={e.image} alt=""/>
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className="cart-items-quantity">{cartItems[e.id]}</button>
                                <p>${e.new_price*cartItems[e.id]}</p>
                                <img classname="cartitems-removeicon" src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt=""/>
                        
                            </div>
                            <hr/>

                        </>
                    
                    )
                }
                return null
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div >
                        <div className="cartitems-total-item">
                            <p>SubTotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr/>
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr/>
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                        <button>PROCEED TO CHECKOUT</button>
                    </div>
                    
                </div>
                    <div className="cartitems-promocode">
                        <p>If you have promocode enter it here</p>
                        <div className="cartitems-promobox">
                            <input type = "text" placeholder="promo code"/>
                            <button>Submit</button>
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default CartItem