import React from "react";
import Header from '../Shared/Header'
import Footer from '../Shared/Footer'
import ChatBtn from '../Home/ChatBtn'
import "../../assets/stylesheets/application.scss"


function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

function Prices() {
    const images = importAll(require.context('../../assets/images/', false, /\.(png|jpe?g)$/));
  
    return (
      <div classNameName="body">
        <ChatBtn />
        <Header route='prices' />
        <div className="orders container-fluid">
          <div id="content" className="col-9 offset-2">
            <div className="drop">
              <img
                src={images["drop-5@1x.png"]}
                alt=""
                className="drop-5 no-media"
              />
              <img
                src={images["drop-10@2x.png"]}
                alt=""
                className="drop-10 no-media"
              />
              <img
                src={images["drop-15@1x.png"]}
                alt=""
                className="drop-15 no-media"
              />
              <img
                src={images["drop-18-2@1x.png"]}
                alt=""
                className="drop-18-2 no-media"
              />
              <img
                src={images["drop-10@1x.png"]}
                alt=""
                className="drop-10-bottom no-media"
              />
              <img
                src={images["drop-4@1x.png"]}
                alt=""
                className="drop-4 no-media"
              />
              <img
                src={images["drop-11@1x.png"]}
                alt=""
                className="drop-11 no-media"
              />
              <img
                src={images["drop-24-2@1x.png"]}
                alt=""
                className="drop-pr-media-1 media img"
              />
              <img
                src={images["drop-7@1x.png"]}
                alt=""
                className="drop-pr-media-2 media img"
              />
              <img
                src={images["drop-4-2@1x.png"]}
                alt=""
                className="drop-pr-media-3 media img"
              />
              <img
                src={images["drop-copy-11@1x.png"]}
                alt=""
                className="drop-pr-media-4 media img"
              />
              <img
                src={images["drop-4-2@1x.png"]}
                alt=""
                className="drop-pr-media-5 media img"
              />
              <img
                src={images["drop-24-2@1x.png"]}
                alt=""
                className="drop-pr-media-6 media img"
              />
            </div>
            <div id="prices" className="col-12 col-sm-10 col-md-12 text-center">
              <img src={images["brush-1.png"]} alt="" className="brush-1" />
              <span className="title">Prices</span>
            </div>

            <div className="best-price-guarantee">
              <p>Best price guaranteed:</p>
            </div>

            <div className="remember-if-you-find">
              <p>
                Remember if you find a better price for a hand made oil painting
                on the Swiss net we meet the price and grant you an extra 5%
                discount!
              </p>
            </div>

            <form encType="multipart/formdata" method="post" />

            <div className="image">
              <img src={images["image@1x.png"]} alt="" className="image-1" />
            </div>

            <div className="which-size-would-you">
              <p>Which size would you like?</p>
            </div>

            <div className="field-size field-heigth">
              <label htmlFor="order_width">Width (cm)</label>
              <select id="order_width" name="order[width]">
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
                <option value="60">60</option>
                <option value="70">70</option>
                <option value="80">80</option>
                <option value="90">90</option>
                <option value="100">100</option>
                <option value="110">110</option>
                <option value="120">120</option>
                <option value="130">130</option>
              </select>
              <hr className="line-select-size"></hr>
            </div>

            <div className="field-size field-width ">
              <label htmlFor="order_hieght">Height (cm)</label>
              <select id="order_height" name="order[height]">
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
                <option value="60">60</option>
                <option value="70">70</option>
                <option value="80">80</option>
                <option value="90">90</option>
                <option value="100">100</option>
                <option value="110">110</option>
                <option value="120">120</option>
                <option value="130">130</option>
              </select>
              <hr className="line-select-size"></hr>
            </div>

            <div className="please-contact">
              Please contact us for sizes bigger than 130cm.
            </div>

            <div className="transport-fees">
              <p>Transport fees?</p>
            </div>

            <div className="sofa">
              <img src={images["sofa@1x.png"]} alt="" className="sofa-1" />
              <hr className="line-under-sofa" />
              <span className="text-size-sofa">200 cm</span>
            </div>

            <div className="the-transport-fees">
              <p>The transport fees within Europe are free of charge.</p>
              <p>
                However we charge an extra 10% if you desire an express delivery
              </p>
            </div>

            <div className="field-transport">
              <label for="order_transport">Transport</label>
              <select id="order_transport" name="order[transport]">
                <option value="normal">Normal Post</option>
                <option value="express">
                  Express delivery (10% surcharge)
                </option>
              </select>
              <hr className="line-select-transport"></hr>
            </div>

            <div className="field-comment">
              <textarea
                id="order_comment"
                placeholder="Additional comments"
                name="order[comment]"
              ></textarea>
              <hr className="line-comment"></hr>
            </div>

            <div className="we-estimate">We estimate your order at</div>
            <div className="chf">
              <span id="calculatedPrice">269</span> CHF
            </div>
            <div className="click-below">
              click below to get an official price offer
            </div>

            <div className="file">
              <input
                accept="image/png,image/gif,image/jpeg"
                id="upload"
                className="outtaHere inputfile"
                required="required"
                type="file"
                name="order[picture]"
              />
              <label htmlFor="upload">
                <span>Browse</span>
              </label>
            </div>

            <div className="field-upload-picture">
              <label id="field-upload" for="order_picture">
                Upload the picture
              </label>
              <hr className="line-under-upload" />
            </div>
            <i className="material-icons stars">grade</i>
            <div className="field-info">
              <input
                id="order_name"
                placeholder="My Name"
                className="order"
                required="required"
                type="text"
                name="order[name]"
              />
            </div>
            <hr className="line-info" />
            <i className="material-icons stars">grade</i>
            <div className="field-info">
              <input
                id="order_email"
                placeholder="My Email"
                className="order"
                required="required"
                type="email"
                name="order[email]"
              />
            </div>
            <hr className="line-info" />

            <div id="error_explanation">
              <h3></h3>
              <ul>
                <li></li>
              </ul>
            </div>

            <div className="actions">
              <input
                type="submit"
                name="commit"
                value="Get an offer today"
                data-disable-with="Get an offer today"
              />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
}


export default Prices