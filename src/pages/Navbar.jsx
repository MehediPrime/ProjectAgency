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
                    <li><Link to="/ContactUs" style={activeBtn==="contact" ? { color:orange} : null } onClick={()=>setActiveBtn("contact")} >Contact Us</Link></li>
                    <li><Link to="/PrivacyPolicy" style={activeBtn==="privacy" ? { color:orange} : null } onClick={()=>setActiveBtn("privacy")} >Privacy Policy</Link></li>
                </ul>
            </div>
            <div className="navButton">
                <button className="navLoginBtn">Log in</button>
                <button className="navGetBtn">Get Started</button>
            </div>
        </nav>
    );
}

export default Navbar;

