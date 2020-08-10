import React from 'react';
import SvgLogo from '../../assets/images/Logo'
import '../../assets/stylesheets/application.scss'
import {
    Link
} from "react-router-dom";

function Footer(){

    return (
        <div id="footer">
            <div id="logo">
                <SvgLogo />
            </div>
            <ul id="nav-menu">
                <li><Link  to="/about">About Us</Link></li>
                <li><Link  to="/terms">Sales Conditions</Link></li>
            </ul>
        </div>

    )
}

export default Footer 


