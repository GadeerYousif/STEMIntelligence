import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./styles/Navbar.css";
import Logo from "../../assets/New_Logo_cropped.png";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    const closeMenu = () => {
        setMenuOpen(false);
    };
    
    return (
        <div>
            <nav>
                <div className="logo-title-group">
                    <Link to="/" className="title">
                    <img 
                        src={Logo}
                        alt="STEM Intelligence logo"
                        className="navbar-logo"
                    />  
                    </Link>
                    <Link to="/" className="title">STEM Intelligence</Link>
                </div>
              
                <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                
                <ul className={menuOpen ? "open" : ""}>
                    <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
                    <li><NavLink to="/services" onClick={closeMenu}>Services</NavLink></li>
                    <li><NavLink to="/signup" onClick={closeMenu}>Sign Up</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;