import React from 'react';
import "../css/Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar(props) {
    
    const navLinkStyles = ({isActive}) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline',
        }
    }

    return (
        <div className='navbar'>
            <NavLink className='navbar_list' style={navLinkStyles} to='/dashboard'>Dashboard</NavLink>
            <NavLink className='navbar_list' style={navLinkStyles} to='/manager'>Posts Managenment</NavLink>
            <NavLink className='navbar_list' style={navLinkStyles} to='/setting'>Settings</NavLink>
        </div>
    );
}

export default Navbar;