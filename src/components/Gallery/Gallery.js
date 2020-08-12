import React from "react";
import Header from '../Shared/Header'
import Footer from '../Shared/Footer'
import ChatBtn from '../Home/ChatBtn'
import "../../assets/stylesheets/application.scss"
import  * as Gallery1 from 'react-grid-gallery';

// propTypes = {
//   images: PropTypes.arrayOf(
//       PropTypes.shape({
//           src: PropTypes.string.isRequired,
//           thumbnail: PropTypes.string.isRequired,
//           srcset: PropTypes.array,
//           caption: PropTypes.oneOfType([
//               PropTypes.string,
//               PropTypes.element
//           ]),
//           thumbnailWidth: PropTypes.number.isRequired,
//           thumbnailHeight: PropTypes.number.isRequired
//       })
//   ).isRequired
// };

// defaultProps = {
//   images: [
//       {
//           src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
//           thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
//           thumbnailWidth: 320,
//           thumbnailHeight: 174,
//           caption: "After Rain (Jeshu John - designerspics.com)"
//       },
//       {
//           src: "https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_b.jpg",
//           thumbnail: "https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_n.jpg",
//           thumbnailWidth: 320,
//           thumbnailHeight: 183,
//           caption: "37H (gratispgraphy.com)"
//       },
//       {
//           src: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_b.jpg",
//           thumbnail: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_n.jpg",
//           thumbnailWidth: 271,
//           thumbnailHeight: 320,
//           caption: "Orange Macro (Tom Eversley - isorepublic.com)"
//       },
//       {
//           src: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
//           thumbnail: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg",
//           thumbnailWidth: 320,
//           thumbnailHeight: 213,
//           caption: "201H (gratisography.com)"
//       },
//       {
//           src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
//           thumbnail: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg",
//           thumbnailWidth: 320,
//           thumbnailHeight: 213,
//           caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)"
//       },
//       {
//           src: "https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_b.jpg",
//           thumbnail: "https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_n.jpg",
//           thumbnailWidth: 320,
//           thumbnailHeight: 213,
//           caption: "Man on BMX (Tom Eversley - isorepublic.com)"
//       },
//       {
//           src: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_b.jpg",
//           thumbnail: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_n.jpg",
//           thumbnailWidth: 320,
//           thumbnailHeight: 213,
//           caption: "Ropeman - Thailand (Tom Eversley - isorepublic.com)"
//       },
//       {
//           src: "https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_b.jpg",
//           thumbnail: "https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_n.jpg",
//           thumbnailWidth: 257,
//           thumbnailHeight: 320,
//           caption: "A photo by 贝莉儿 NG. (unsplash.com)"
//       }
//   ]
// };

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

function Gallery(props) {
    
  
    const images = importAll(require.context('../../assets/images/', false, /\.(png|jpe?g)$/));
    const { t } = props;
    return (
      <div className="body">
        <ChatBtn t= {t}/>
        <Header t= {t} route='gal' />
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
              <p className="title-gal">{t('home_page.hero.nav_menu.gallery')}</p>
              <img
                alt=""
                src={images["brush-4@1x.png"]}
                className="brush-title img"
              />
            </div>
            <div className="portrait genre">
           
              <p> {t('gallery.genre_1')}</p>
              <div className="h-gallery"> 
          
          <Gallery1
              images={[
                {
                    src: images["bitmap-p-1@1x.png"],
                    thumbnail: images["bitmap-p-1@1x.png"],
                    thumbnailWidth: 320,
                    thumbnailHeight: 174,
                    caption: "After Rain (Jeshu John - designerspics.com)"
                },
                {
                    src: images["bitmap-p-2@1x.png"],
                    thumbnail: images["bitmap-p-2@1x.png"],
                    thumbnailWidth: 320,
                    thumbnailHeight: 183,
                    caption: "37H (gratispgraphy.com)"
                },
                {
                  src: images["bitmap-p-3@1x.png"],
                  thumbnail: images["bitmap-p-3@1x.png"],
                  thumbnailWidth: 320,
                  thumbnailHeight: 183,
                  caption: "37H (gratispgraphy.com)"
              }
              ]}
              enableLightbox={true}
              enableImageSelection={true}                         
          /></div>
              <div className="grow pic pic-1">
                <img alt="" src={images["bitmap-p-1@1x.png"]} />
              </div>
              <div className="grow pic pic-2">
                <img alt="" src={images["bitmap-p-2@1x.png"]} />
              </div>
              <div className="grow pic pic-3">
                <img alt="" src={images["bitmap-p-3@1x.png"]} />
              </div>
              <img
                alt=""
                src={images["brush-5@1x.png"]}
                className="brush-5 img brush no-media"
              />
              <img
                alt=""
                src={images["brush-6@1x.png"]}
                className="brush-6 img brush no-media"
              />
              <img
                alt=""
                src={images["brush-7@1x.png"]}
                className="brush-7 img brush no-media"
              />
              <img
                alt=""
                src={images["brush-media-1@2x.png"]}
                className="brush-media-1 img brush media"
              />
            </div>

            <div className="pet-portrait genre">
              <p>{t('gallery.genre_2')}</p>
              <div className="grow pic pic-1">
                <img alt="" src={images["bitmap-p-p-1@1x.png"]} />
              </div>
              <div className="grow pic pic-2">
                <img alt="" src={images["bitmap-p-p-2@1x.png"]} />
              </div>
              <div className="grow pic pic-3">
                <img alt="" src={images["bitmap-p-p-3@1x.png"]} />
              </div>
              <img
                alt=""
                src={images["brush-8@1x.png"]}
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
                src={images["brush-media-2@2x.png"]}
                className="brush-media-2 img brush media"
              />
            </div>
            <div className="modern-art genre">
              <p>{t('gallery.genre_3')}</p>
              <div className="grow pic pic-1">
                <img alt="" src={images["bitmap-m-a-1@1x.jpg"]} />
              </div>
              <div className="grow pic pic-2">
                <img alt="" src={images["bitmap-m-a-2@1x.png"]} />
              </div>
              <div className="grow pic pic-3">
                <img alt="" src={images["bitmap-m-a-3@1x.jpg"]} />
              </div>
              <img
                alt=""
                src={images["brush-7@1x.png"]}
                className="brush-7-copy img brush no-media"
              />
              <img
                alt=""
                src={images["brush-6@1x.png"]}
                className="brush-6-copy img brush no-media"
              />
              <img
                alt=""
                src={images["brush-5@1x.png"]}
                className="brush-5-copy img brush no-media"
              />
              <img
                alt=""
                src={images["brush-media-3@2x.png"]}
                className="brush-media-3 img brush media"
              />
            </div>
            <div className="landscape-urban genre">
              <p>{t('gallery.genre_4_1')}</p>
              <p>{t('gallery.genre_4_2')}</p>
              <div className="img-landscape">
                <div className="grow pic pic-1">
                  <img alt="" src={images["bitmap-l-u-1@1x.png"]} />
                </div>
                <div className="grow pic pic-2">
                  <img alt="" src={images["bitmap-l-u-2@1x.png"]} />
                </div>
                <div className="grow pic pic-3">
                  <img alt="" src={images["bitmap-l-u-3@1x.png"]} />
                </div>
                <img
                  alt=""
                  src={images["brush-8@1x.png"]}
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
                  src={images["brush-media-4@2x.png"]}
                  className="brush-media-4 img brush media"
                />
              </div>
            </div>
            <div className="abstrakt-art genre">
              <p>{t('gallery.genre_5')}</p>
              <div className="grow pic pic-1">
                <img alt="" src={images["bitmap-a-a-1@1x.png"]} />
              </div>
              <div className="grow pic pic-2">
                <img alt="" src={images["bitmap-a-a-2@1x.png"]} />
              </div>
              <div className="grow pic pic-3">
                <img alt="" src={images["bitmap-a-a-3@1x.png"]} />
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
                src={images["brush-8@1x.png"]}
                className="brush-8-copy img brush no-media"
              />
              <img
                alt=""
                src={images["brush-media-5@2x.png"]}
                className="brush-media-5 img brush media"
              />
            </div>
            <div className="others-genre genre no-media">
              <p>{t('gallery.genre_6')}</p>
            </div>
          </div>
        </div>
        <Footer t= {t} />
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


export default Gallery