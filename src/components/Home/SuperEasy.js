import React from "react";
import SvgLeft from "../../assets/images/Left";
import drop5 from "../../assets/images/drop-5@1x.png";
import drop6 from "../../assets/images/drop-6@1x.png";
import drop7 from "../../assets/images/drop-7@1x.png";
import drop10 from "../../assets/images/drop-10@1x.png";
import drop11 from "../../assets/images/drop-11@1x.png";
import brush1 from "../../assets/images/brush-1@1x.webp";
import bitmap from "../../assets/images/bitmap_s_e@1x.webp";
import bitmapMedia from "../../assets/images/bitmap-media-1@1x.webp";
import "../../assets/stylesheets/application.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

function SuperEasy(props) {
  const { t } = props;
  return (
    <div id="super-easy" className="row ml0 mr0 p0">
      <div className="drops">
        <img src={drop5} className="drop-5" alt="" />
        <img src={drop6} className="drop-6" alt="" />
        <img src={drop7} className="drop-7" alt="" />
        <img src={drop10} className="drop-10" alt="" />
        <img src={drop11} className="drop-11" alt="" />
      </div>
      <div className="col-sm-8 col-xs-12 offset-2 p0">
        <div className="row">
          <div className="col-sm-9 col-xs-12 col-md-7">
            <img src={brush1} className="brush" alt="" />
            <LazyLoadImage
              src={bitmap}
              className="s-e-img shadow-image"
              alt=""
            />
            <img
              src={bitmapMedia}
              className="s-e-img-media media shadow-image"
              alt=""
            />
          </div>
          <div className="col-sm-5 col-xs-12 descriptions">
            <div className="title">{t("home_page.super_easy.title")}</div>
            {t("home_page.super_easy.description")}
            <p>
              <a href="/prices">
                {t("home_page.start_painting")}
                <SvgLeft className="arrow m0" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SuperEasy;
