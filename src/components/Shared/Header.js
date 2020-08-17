import React,{useState} from 'react';
import SvgLogo from '../../assets/images/Logo'
import SvgLogo2 from '../../assets/images/logo.svg'
import Image from 'react-bootstrap/Image'

import '../../assets/stylesheets/application.scss'
import {
    Link
} from "react-router-dom";
import { useTranslation} from 'react-i18next';

function Header(props){
    const { t } = props;

    const {i18n } = useTranslation();
    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
    };

    return (
        <div id="header" className={`clearfix ${props.route==="home"?"home-header":""}`}>
            <div className="logo">
                <Link to="/">
                    <Image src={SvgLogo2}  to="/"/>
                </Link>
            </div>
            <div>
            <div id="lg-group" className="no-media">
                <div className={`lg-btn ${i18n.language.slice(0,2)==='de'?'active':""}`}><div onClick={() => changeLanguage('de')}>De</div></div>
                <div className={`lg-btn ${i18n.language.slice(0,2)==='en'?'active':""}`}><div onClick={() => changeLanguage('en')}>En</div></div>
                <div className={`lg-btn ${i18n.language.slice(0,2)==='fr'?'active':""}`}><div  onClick={() => changeLanguage('fr')}>Fr</div></div>
            </div>
            </div>
            <ul className="nav-menu">
                <li><Link className={`${props.route==="home"?"active":""}`} to="/">{t('home_page.hero.nav_menu.the_concept')}</Link></li>
                <li><Link className={`${props.route==="gal"?"active":""}`} to="/gallery">{t('home_page.hero.nav_menu.gallery')}</Link></li>
                <li><Link className={`${props.route==="prices"?"active":""}`} to="/prices">{t('home_page.hero.nav_menu.prices')}</Link></li>
            </ul>
            <div className="mobile-menu">
                <nav>
                    <input type="checkbox" id="btn-menu" />
                    <label htmlFor="btn-menu"></label>
                    <ul className="list-menu">
                        <li><Link to="/">{t('home_page.hero.nav_menu.the_concept')}</Link></li>
                        <li><Link to="/gallery">{t('home_page.hero.nav_menu.gallery')}</Link></li>
                        <li><Link to="/prices">{t('home_page.hero.nav_menu.prices')}</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )


}

export default Header


