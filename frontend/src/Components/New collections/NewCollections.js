import React from "react";
import "./Newcollections.css";
import new_collection  from "../Assets/Ecommerce_Frontend_Assets/Assets/new_collections";
import Item from "../items/Item";
const  Newcollections= ()=>{
    return(
        <div className="new-collections">
            <h1>NEW COLLECTIONS</h1>
            <hr/>
            <div className="new-collections-item">
                {new_collection.map((item,i)=>{
                     return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>

        </div>
    )
}
export default Newcollections