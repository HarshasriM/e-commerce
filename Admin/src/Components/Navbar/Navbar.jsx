// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./Navbar.css";
import logo from "../../assets/Ecommerce_Admin_Panel_Assets/Admin Panel Assets/nav-logo.svg"
import navProfile from "../../assets/Ecommerce_Admin_Panel_Assets/Admin Panel Assets/nav-profile.svg"
const Navbar = () => {
    return (
        <div className='navbar'>
            <img className="nav-logo" src={logo} alt=""/>
            <img className='nav-profile' src={navProfile} alt=""/>
        </div>
    );
};

export default Navbar;