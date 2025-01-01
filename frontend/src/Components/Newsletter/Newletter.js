import React from "react";
import "./Newsletter.css";
const Newsletter = ()=>{
    return(
        <div className="newletter">
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Subscribe to our newsletter and stay update</p>
            <div>
                <input type="email" placeholder="Your Email id"/>
                <button> Subscribe</button>
            </div>
        </div>
    )
}
export default Newsletter