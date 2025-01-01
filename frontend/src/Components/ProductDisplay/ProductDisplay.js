import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/Ecommerce_Frontend_Assets/Assets/star_icon.png"
import star_dull_icon from "../Assets/Ecommerce_Frontend_Assets/Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
const ProductDisplay = (props)=>{
    const {addToCart}=useContext(ShopContext);
    const {product}=props
    return(
        <div  className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                </div>
            
            <div className="productdisplay-img">
                <img className="productdisplay-mainimg" src={product.image} alt=""/>
            </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-rightstar">
                    <img src={star_icon} alt=""/>
                    <img src={star_icon} alt=""/>
                    <img src={star_icon} alt=""/>
                    <img src={star_icon} alt=""/>
                    <img src={star_dull_icon} alt=""/>
                    <p>(122)</p>
                </div> 
                <div className="productdisplay-rightprices">
                    <div className="productdisplay-rightprice-old">
                        ${product.old_price}
                    </div>
                    <div className="productdisplay-rightprice-new">
                        ${product.new_price}
                    </div>
                </div>
                <div className="productdisplay-right-description">
                        Made from non-toxic materials and designed to be completely safe for homes and offices
                        Can be used both indoors and outdoors. Keeps floors clean and dry from water, dust, grit, mud, sleet, grass, rain and snown
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select size</h1>
                    <div className="productdisplay-right-sizes">
                            
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>

            </div>
        </div>
    )
}
export default ProductDisplay