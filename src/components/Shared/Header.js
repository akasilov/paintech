import React from 'react';
import SvgLogo from '../../assets/images/Logo'
import '../../assets/stylesheets/application.scss'
import {
    Link
} from "react-router-dom";



function Header(props){

    return (
        <div id="header" className={`clearfix ${props.route==="home"?"home-header":""}`}>
            <div className="logo">
                <a href="/"><SvgLogo/></a>
            </div>
            <div>
            <div id="lg-group" className="no-media">
                <div className={`lg-btn active`}><a href='/'> En</a></div>
                <div className="lg-btn"><a href='/'> Fr</a></div>
                <div className="lg-btn"><a href='/'> De</a></div>
            </div>
            </div>
            <ul className="nav-menu">
                <li><Link className={`${props.route==="home"?"active":""}`} to="/">The Concept</Link></li>
                <li><Link className={`${props.route==="gal"?"active":""}`} to="/gallery">Gallery</Link></li>
                <li><Link className={`${props.route==="prices"?"active":""}`} to="/prices">Prices</Link></li>
            </ul>
            <div className="mobile-menu">
                <nav>
                    <input type="checkbox" id="btn-menu" />
                    <label htmlFor="btn-menu"></label>
                    <ul className="list-menu">
                        <li><a href="/">The Concept</a></li>
                        <li><a href="/">Gallery</a></li>
                        <li><a href="/">Prices</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )


}

export default Header


