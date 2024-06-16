import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';
const Header = () => {
    
    return (
        <nav>
           <NavLink to="/">Home</NavLink>
           <NavLink to="/recipes">Recipes</NavLink>
           <NavLink to="/contact">Contact Us</NavLink>
        </nav>
    );
};

export default Header;