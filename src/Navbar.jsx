import React from 'react';
import "./App.css";
import {Link} from "react-router-dom";


function Navbar(props) {
    return (
        <div className='navbar'>
            <ul>
                <li><Link to="/">Log in to Tik Acc</Link></li>
                <li><Link to="/createBC">Require Tiktok Acc</Link></li>
                <li><Link to="/createCata">Create Catalog</Link></li>
                <li><Link to="/bussines_not_have_cata">BC Not Have Catalog</Link></li>
                <li><Link to="/bussines_have_cata">BC Have Catalog</Link></li>
                <li><Link to="/2bussines_have_cata">BC Have Catalog2</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;