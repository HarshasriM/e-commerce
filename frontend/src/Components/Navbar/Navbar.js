import React, { useContext, useRef, useState } from "react"
import "./Navbar.css"
import logo from "../Assets/Ecommerce_Frontend_Assets/Assets/logo.png";
import cart_icon from "../Assets/Ecommerce_Frontend_Assets/Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import drop_down from "../Assets/Ecommerce_Frontend_Assets/Assets/dropdown_icon.png";

const Navbar =()=>{
    const [menu ,setMenu]=useState("shop")
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();
    const dropdown_toggle =(e)=>{
        menuRef.current.classList.toggle("nav-menu-visible");
    }
    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt ="" />
                <p>SHOPPER</p>
            </div>
            <img src={drop_down} className="nav-dropdown" onClick = {()=>(dropdown_toggle())}alt=""/>
            <ul ref={menuRef} className="nav-menu">
                <li onClick={()=>setMenu("shop")}><Link to="/">Shop{menu==="shop"?<hr/>:<></>}</Link></li>
                <li onClick={()=>setMenu("mens")}><Link to="/mens">Mens{menu==="mens"?<hr/>:<></>}</Link></li>
                <li onClick={()=>setMenu("womens")}><Link to="/womens">Womens{menu==="womens"?<hr/>:<></>}</Link></li>
                <li onClick={()=>setMenu("kids")}><Link to="/kids">Kids{menu==="kids"?<hr/>:<></>}</Link></li>
            </ul>
            <div className="nav-login-cart">
                {
                    sessionStorage.getItem("auth-token")? <Link to="/login"><button onClick={()=>{sessionStorage.removeItem("auth-token")}}>logout</button></Link>: <Link to="/login"><button>login</button></Link>
                }
               
                <Link to="/cart"><img src={cart_icon} alt=""/></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>

            </div>
        </div>
    )
}
export default Navbar