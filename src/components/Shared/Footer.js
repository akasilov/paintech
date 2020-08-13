import React from "react";
import SvgLogo from "../../assets/images/Logo";
import "../../assets/stylesheets/application.scss";
import { Link } from "react-router-dom";
import * as links from "../../assets/config/links";

function Footer(props) {
  const { t } = props;
  return (
    <footer className="page-footer font-small teal pt-4">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="offset-md-2 col-md-8">
            <div className="row">
            <div className="col-sm-12 col-md-6 ">
              <div id="logo">
                <SvgLogo />
              </div>
              <p className="contact ">Email us: info@painted.ch <br/>
            Schweiz <br/>
            UID: CHE‐326.878.129 </p>
          </div>
      
          <div className="col-sm-12 col-md-6">

              <ul id="nav-menu">
                <li>
                  <Link to="/about">
                    {t("home_page.footer.nav_menu.about")}
                  </Link>
                </li>
                <li>
                  <Link to="/terms">
                    {t("home_page.footer.nav_menu.sales_conditions")}
                  </Link>
                </li>
                <li>
                  <div id="social">
                  <ul >
                <li>
                  <a href={links.instagram}>
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href={links.facebook}>
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href={links.youtube}>
                    <i className="fa fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href={links.telegram}>
                    <i className="fa fa-telegram"></i>
                  </a>
                </li>
              </ul>
                  </div>
                </li>
              </ul>

          </div>
       
            </div>
            <div className="footer-copyright col-sm-12 text-center py-3">
          © 2020 www.painted.ch All rights reserved
        </div>
          </div>
         
        </div>

      
      </div>
    </footer>
  );
}

export default Footer;
