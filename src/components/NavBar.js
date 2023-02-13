import React from 'react';
import "./css/Navbar.css";
import {NavLink} from "react-router-dom";


function NavBar(props) {
    return (
        <div>
            <div className='logo'>
                <NavLink to="/" className="nav_logo">Logo</NavLink>
            </div>   
            <div className='selection'>
                <p>Tìm từ: </p>    
                <NavLink to="/dongam" className="li_basic">Đồng âm</NavLink>
                <NavLink to="/dongnghia" className="li_basic">Đồng nghĩa</NavLink>
                <NavLink to="/trainghia" className="li_basic">Trái nghĩa</NavLink>
                <NavLink to="/tinhtulienquan" className="li_basic">Tính từ liên quan</NavLink>
                <NavLink to="/danhtulienquan" className="li_basic">Danh từ liên quan</NavLink>
                <NavLink to="/cungvan" className="li_basic">Cùng vần</NavLink>
            </div>         
        </div>
    );
}

export default NavBar;