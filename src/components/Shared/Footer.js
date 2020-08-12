import React from "react";
import SvgLogo from "../../assets/images/Logo";
import "../../assets/stylesheets/application.scss";
import { Link } from "react-router-dom";
import * as links from "../../assets/config/links";

function Footer(props) {
  const { t } = props;
  return (
    <footer class="page-footer font-small teal pt-4">
      <div class="container-fluid text-center text-md-left">
        <div class="row">
          <div class="offset-sm-2 offset-xs-1 col-xs-10 col-sm-8">
            <div class="row">
            <div class="col-md-4 mt-md-0 mt-3">
              <div id="logo">
                <SvgLogo />
              </div>
              <p class="contact text-left">Email us: info@painted.ch <br/>
            Schweiz <br/>
            UID: CHE‐326.878.129 </p>
          </div>
          <hr class="clearfix w-100 d-md-none pb-3"></hr>
          <div class="col-md-4 mb-md-0 mb-3">

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
              </ul>

          </div>
          <div class="col-md-4 mb-md-0 mb-3" id="social">
              <ul >
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
      
          </div>
            </div>
          </div>
    
        </div>

        <div class="footer-copyright text-center py-3">
          © 2020 www.painted.ch All rights reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
