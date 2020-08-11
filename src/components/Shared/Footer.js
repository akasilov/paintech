import React from 'react';
import SvgLogo from '../../assets/images/Logo'
import '../../assets/stylesheets/application.scss'
import {
    Link
} from "react-router-dom";

function Footer(props){
    const { t } = props;
    return (
        <div id="footer">
            <div id="logo">
                <SvgLogo />
            </div>
            <ul id="nav-menu">
                <li><Link  to="/about">{t('home_page.footer.nav_menu.about')}</Link></li>
                <li><Link  to="/terms">{t('home_page.footer.nav_menu.sales_conditions')}</Link></li>
            </ul>
        </div>

    )
}

export default Footer 


