import React from "react";
import "./RelatedProducts.css"
import data from '../Assets/Ecommerce_Frontend_Assets/Assets/data';
import Item from "../items/Item";
const RelatedProducts = ()=>{
    return(
        <div className="relatedproducts">
            <h1>RelatedProducts</h1>
            <hr/>
            <div className="relatedproducts-items">
            {data.map((item,i)=>{
                     return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
        </div>
    )
}
export default RelatedProducts