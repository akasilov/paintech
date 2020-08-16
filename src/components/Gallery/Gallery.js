import React from "react";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";
import ChatBtn from "../Home/ChatBtn";
import "../../assets/stylesheets/application.scss";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { useState } from "react";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

function Gallery(props) {
  const images = importAll(
    require.context("../../assets/images/", false, /\.(png|jpe?g|webp)$/)
  );

  const [isOpen, changeisOpen] = useState(false);
  const [item, setItem] = useState(images["bitmap-p-1@1x.webp"]);

  const openlightbox = (item) => {
    changeisOpen(true);
    setItem(item);
  };

  let box = "";

  if (isOpen) {
    box = (
      <Lightbox mainSrc={item} onCloseRequest={() => changeisOpen(false)} />
    );
  }
  const { t } = props;
  return (
    <div className="body">
      <ChatBtn t={t} />
      <Header t={t} route="gal" />
      {box}
      <div className="container-fluid gall">
        <div id="content" className="col-9 offset-2">
          <div className="drop">
            <img
              alt=""
              src={images["drop-14@1x.png"]}
              className="drop-14 img no-media"
            />
            <img
              alt=""
              src={images["drop-19-2@1x.png"]}
              className="drop-19-2 img no-media"
            />
            <img
              alt=""
              src={images["drop-20@2x.png"]}
              className="drop-20 img no-media"
            />
            <img
              alt=""
              src={images["drop-14@1x.png"]}
              className="drop-14-copy img no-media"
            />
            <img
              alt=""
              src={images["drop-21-2@2x.png"]}
              className="drop-21-2 img no-media"
            />
            <img
              alt=""
              src={images["drop-22@1x.png"]}
              className="drop-22 img no-media"
            />
            <img
              alt=""
              src={images["drop-12@1x.png"]}
              className="drop-12 img no-media"
            />
            <img
              alt=""
              src={images["drop-23-2@1x.png"]}
              className="drop-23-2 img no-media"
            />
            <img
              alt=""
              src={images["drop-24-2@1x.png"]}
              className="drop-24-2 img no-media"
            />
            <img
              alt=""
              src={images["drop-25@1x.png"]}
              className="drop-25 img no-media"
            />
            <img
              alt=""
              src={images["drop-media-1@1x.png"]}
              className="drop-media-1 img media"
            />
            <img
              alt=""
              src={images["drop-7@1x.png"]}
              className="drop-media-2 img media"
            />
            <img
              alt=""
              src={images["drop-18-2@1x.png"]}
              className="drop-media-3 img media"
            />
            <img
              alt=""
              src={images["drop-media-4@1x.png"]}
              className="drop-media-4 img media"
            />
            <img
              alt=""
              src={images["drop-12@1x.png"]}
              className="drop-media-5 img media"
            />
            <img
              alt=""
              src={images["drop-media-6@1x.png"]}
              className="drop-media-6 img media"
            />
            <img
              alt=""
              src={images["drop-10@1x.png"]}
              className="drop-media-7 img media"
            />
            <img
              alt=""
              src={images["drop-10@1x.png"]}
              className="drop-media-7-copy img media"
            />
            <img
              alt=""
              src={images["drop-media-8@1x.png"]}
              className="drop-media-8 img media"
            />
            <img
              alt=""
              src={images["drop-media-9@1x.png"]}
              className="drop-media-9 img media"
            />
            <img
              alt=""
              src={images["drop-media-10@1x.png"]}
              className="drop-media-10 img media"
            />
            <img
              alt=""
              src={images["drop-media-4@1x.png"]}
              className="drop-media-4-copy img media"
            />
            <img
              alt=""
              src={images["drop-media-4@1x.png"]}
              className="drop-media-4-copy-2 img media"
            />
          </div>
          <div className="title">
            <p className="title-gal">{t("home_page.hero.nav_menu.gallery")}</p>
            <img
              alt=""
              src={images["brush-4@1x.webp"]}
              className="brush-title img"
            />
          </div>
          <div className="portrait genre">
            <p> {t("gallery.genre_1")}</p>

            <div className="grow pic pic-1">
              <img
                alt=""
                src={images["bitmap-p-1@1x.webp"]}
                onClick={() => openlightbox(images["bitmap-p-1@1x.webp"])}
              />
            </div>

            <div className="grow pic pic-2">
              <img
                alt=""
                src={images["bitmap-p-2@1x.webp"]}
                onClick={() => openlightbox(images["bitmap-p-2@1x.webp"])}
              />
            </div>
            <div className="grow pic pic-3">
              <img
                alt=""
                src={images["bitmap-p-3@1x.webp"]}
                onClick={() => openlightbox(images["bitmap-p-3@1x.webp"])}
              />
            </div>
            <img
              alt=""
              src={images["brush-5@1x.png"]}
              className="brush-5 img brush no-media"
            />
            <img
              alt=""
              src={images["brush-6@1x.webp"]}
              className="brush-6 img brush no-media"
            />
            <img
              alt=""
              src={images["brush-7@1x.webp"]}
              className="brush-7 img brush no-media"
            />
            <img
              alt=""
              src={images["brush-media-1@2x.webp"]}
              className="brush-media-1 img brush media"
            />
          </div>

          <div className="pet-portrait genre">
            <p>{t("gallery.genre_2")}</p>
            <div className="grow pic pic-1">
              <img
                alt=""
                src={images["bitmap-p-p-1@1x.webp"]}
                onClick={() => openlightbox(images["bitmap-p-p-1@1x.webp"])}
              />
            </div>
            <div className="grow pic pic-2">
              <img
                alt=""
                src={images["bitmap-p-p-2@1x.webp"]}
                onClick={() => openlightbox(images["bitmap-p-p-2@1x.webp"])}
              />
            </div>
            <div className="grow pic pic-3">
              <img
                alt=""
                src={images["bitmap-p-p-3@1x.webp"]}
                onClick={() => openlightbox(images["bitmap-p-p-3@1x.webp"])}
              />
            </div>
            <img
              alt=""
              src={images["brush-8@1x.webp"]}
              className="brush-8 img brush no-media"
            />
            <img
              alt=""
              src={images["brush-9@1x.png"]}
              className="brush-9 img brush no-media"
            />
            <img
              alt=""
              src={images["brush-10@1x.png"]}
              className="brush-10 img brush no-media"
            />
            <img
              alt=""
              src={images["brush-media-2@2x.webp"]}
              className="brush-media-2 img brush media"
            />
          </div>
          <div className="modern-art genre">
            <p>{t("gallery.genre_3")}</p>
            <div className="grow pic pic-1">
              <img
                alt=""
                src={images["bitmap-m-a-1@1x.jpg"]}
                onClick={() => openlightbox(images["bitmap-m-a-1@1x.jpg"])}
              />
            </div>
            <div className="grow pic pic-2">
              <img
                alt=""
                src={images["bitmap-m-a-2@1x.png"]}
                onClick={() => openlightbox(images["bitmap-m-a-2@1x.png"])}
              />
            </div>
            <div className="grow pic pic-3">
              <img
                alt=""
                src={images["bitmap-m-a-3@1x.webp"]}
                onClick={() => openlightbox(images["bitmap-m-a-3@1x.webp"])}
              />
            </div>
            <img
              alt=""
              src={images["brush-7@1x.webps"]}
              className="brush-7-copy img brush no-media"
            />
            <img
              alt=""
              src={images["brush-6@1x.webp"]}
              className="brush-6-copy img brush no-media"
            />
            <img
              alt=""
              src={images["brush-5@1x.png"]}
              className="brush-5-copy img brush no-media"
            />
            <img
              alt=""
              src={images["brush-media-3@2x.webp"]}
              className="brush-media-3 img brush media"
            />
          </div>
          <div className="landscape-urban genre">
            <p>{t("gallery.genre_4_1")}</p>
            <p>{t("gallery.genre_4_2")}</p>
            <div className="img-landscape">
              <div className="grow pic pic-1">
                <img
                  alt=""
                  src={images["bitmap-l-u-1@1x.webp"]}
                  onClick={() => openlightbox(images["bitmap-l-u-1@1x.webp"])}
                />
              </div>
              <div className="grow pic pic-2">
                <img
                  alt=""
                  src={images["bitmap-l-u-2@1x.webp"]}
                  onClick={() => openlightbox(images["bitmap-l-u-2@1x.webp"])}
                />
              </div>
              <div className="grow pic pic-3">
                <img
                  alt=""
                  src={images["bitmap-l-u-3@1x.webp"]}
                  onClick={() => openlightbox(images["bitmap-l-u-3@1x.webp"])}
                />
              </div>
              <img
                alt=""
                src={images["brush-8@1x.webp"]}
                className="brush-8 img brush no-media"
              />
              <img
                alt=""
                src={images["brush-5@1x.png"]}
                className="brush-5-copy brush-5-copy-2 img brush no-media"
              />
              <img
                alt=""
                src={images["brush-9@1x.png"]}
                className="brush-9-copy img brush no-media"
              />
              <img
                alt=""
                src={images["brush-media-4@2x.webp"]}
                className="brush-media-4 img brush media"
              />
            </div>
          </div>
          <div className="abstrakt-art genre">
            <p>{t("gallery.genre_5")}</p>
            <div className="grow pic pic-1">
              <img
                alt=""
                src={images["bitmap-a-a-1@1x.webp"]}
                onClick={() => openlightbox(images["bitmap-a-a-1@1x.webp"])}
              />
            </div>
            <div className="grow pic pic-2">
              <img
                alt=""
                src={images["bitmap-a-a-2@1x.webp"]}
                onClick={() => openlightbox(images["bitmap-a-a-2@1x.webp"])}
              />
            </div>
            <div className="grow pic pic-3">
              <img
                alt=""
                src={images["bitmap-a-a-3@1x.webp"]}
                onClick={() => openlightbox(images["bitmap-a-a-3@1x.webp"])}
              />
            </div>
            <img
              alt=""
              src={images["brush-10@1x.png"]}
              className="brush-10-copy img brush no-media"
            />
            <img
              alt=""
              src={images["brush-9@1x.png"]}
              className="brush-9-copy brush-9-copy-2 img brush no-media"
            />
            <img
              alt=""
              src={images["brush-8@1x.webp"]}
              className="brush-8-copy img brush no-media"
            />
            <img
              alt=""
              src={images["brush-media-5@2x.png"]}
              className="brush-media-5 img brush media"
            />
          </div>
          <div className="others-genre genre no-media">
            <p>{t("gallery.genre_6")}</p>
          </div>
        </div>
      </div>
      <Footer t={t} />
    </div>
  );
}

// function render () {
//   return (
//       <div style={{
//           display: "block",
//           minHeight: "1px",
//           width: "100%",
//           border: "1px solid #ddd",
//           overflow: "auto"}}>
//           <div style={{
//                padding: "2px",
//                color: "#666"
//               }}>Current image: 0</div>
//           <Gallery
//               images={Gallery.defaultProps.images}
//               enableLightbox={true}
//               enableImageSelection={false}

//           />
//       </div>
//   );
// }

export default Gallery;
