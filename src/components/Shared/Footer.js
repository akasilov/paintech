import React from "react";
import SvgLogo from "../../assets/images/Logo";
import "../../assets/stylesheets/application.scss";
import { Link } from "react-router-dom";
import * as links from "../../assets/config/links";

function Footer(props) {
  const { t } = props;
  return (
    <div id="footer">
      <div id="logo">
        <SvgLogo />
      </div>
      <ul id="social">
        <li>
          <a href={links.instagram}>
            <i class="fa fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href={links.facebook}>
            <i class="fa fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href={links.youtube}>
            <i class="fa fa-youtube"></i>
          </a>
        </li>
        <li>
          <a href={links.telegram}>
            <i class="fa fa-telegram"></i>
          </a>
        </li>
      </ul>
      <ul id="nav-menu">
        <li>
          <Link to="/about">{t("home_page.footer.nav_menu.about")}</Link>
        </li>
        <li>
          <Link to="/terms">
            {t("home_page.footer.nav_menu.sales_conditions")}
          </Link>
        </li>
      </ul>
    <div className="w-100 copyright pull-left pt-4 pb-4">
          <div className="w-50 pull-left">
            <p>Email us: info@painted.ch <br/>
            Schweiz <br/>
            UID: CHE‐326.878.129 </p>
          </div>

          <div className="w-50 pull-left text-right">
          <br/>
          <br/>
            <p>(C) 2020 www.painted.ch All rights reserved</p>
          </div>
          </div>
    </div>
  );
}

export default Footer;
