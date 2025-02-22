import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/Ecommerce_Frontend_Assets/Assets/hand_icon.png";
import arrow_icon from "../Assets/Ecommerce_Frontend_Assets/Assets/arrow.png";
import hero_image from "../Assets/Ecommerce_Frontend_Assets/Assets/hero_image.png"
const Hero = ()=>{
    return(
        <div className="hero">
            <div className="hero-left">
                <h2>New Arrivals Only</h2>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt=""/>
                </div>
                <p>collections</p>
                <p>for everyone</p>
                <div className="hero-latest-btn">
                <div >Latest  collections</div>
                    <img src={arrow_icon} alt=""/>
                </div>
            </div>
            
            <div className="hero-right">
                <img src={hero_image} alt=""/>
            </div>
        </div>
       

    )
}
export default Hero