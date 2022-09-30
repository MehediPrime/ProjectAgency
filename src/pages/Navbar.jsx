import React, { useState } from "react";
import "./css/Navbar.css";
import Logo from '../img/Logo.png'
import { Link } from "react-router-dom";
import {orange} from "./Color";

const Navbar = () =>{
    const [activeBtn, setActiveBtn] = useState("home");

    return(
        <nav className="navbar">
            <div className="navLogo">
                <img src={Logo} alt="logo" width="68px"/>
            </div>
            <div className="navLink">
                <ul>
                    <li><Link to="/" style={activeBtn==="home" ? { color:orange} : null } onClick={()=>setActiveBtn("home")} >Home</Link></li>
                    <li><Link to="/Services" style={activeBtn==="services" ? { color:orange} : null } onClick={()=>setActiveBtn("services")} >Services</Link></li>
                    <li><Link to="/FAQ" style={activeBtn==="faq" ? { color:orange} : null } onClick={()=>setActiveBtn("faq")} >FAQ</Link></li>
                    <li><Link to="/ContactUs" style={activeBtn==="contact" ? { color:orange} : null } onClick={()=>setActiveBtn("contact")} >Contact Us</Link></li>
                    
                </ul>
            </div>
            <div className="navButton">
                <button className="navGetBtn">Get Started</button>
            </div>
        </nav>
    );
}

export default Navbar;

