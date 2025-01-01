import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/offers/offers";
import Newcollections from "../Components/New collections/NewCollections";
import Newsletter from "../Components/Newsletter/Newletter";
const Shop = ()=>{
    return(
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            <Newcollections/>
            <Newsletter/>
        </div>
    )
}
export default Shop