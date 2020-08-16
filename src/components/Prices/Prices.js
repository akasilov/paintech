import React,{useState} from "react";
import Header from '../Shared/Header'
import Footer from '../Shared/Footer'
import ChatBtn from '../Home/ChatBtn'
import "../../assets/stylesheets/application.scss"
import Axios from 'axios'
import { Redirect } from "react-router-dom";
import SPrices from './SPrices'

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}


function Prices(props) {

    const images = importAll(
      require.context("../../assets/images/", false, /\.(png|jpe?g|webp)$/)
    );

    const [sent, isSent] = useState(false)
    const [formData, setFormData] = useState({
      'width': '30',
      'height': '30',
      'transport':'Normal Post'
    })
    const { t } = props;

    const updateInput = e => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      })
    }

    const handleSubmit = event => {
        event.preventDefault()
        sendEmail()
        setFormData({
          email: '',
          comment: '',
          name: '',
          width: '30',
          height: '30',
          transport: 'Normal Post',
          picture : null
        })
    }
    const sendEmail = ()=>{
      isSent(true)
      Axios.post('https://us-central1-paintedch-c26a1.cloudfunctions.net/order',formData)
      .then(res => {
      })
      .catch(error => {
      console.log(error)
      })
    }

    if(sent){
      return (<SPrices t={t}/>)
    }

    else{
    return (
      <div className="body">
        <ChatBtn t={t} />
        <Header t={t} route="prices" />
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
                <span className="title">
                  {t("home_page.hero.nav_menu.prices")}
                </span>
              </div>

              <div className="best-price-guarantee">
                <p>{t("order.best_price")}:</p>
              </div>

              <div className="remember-if-you-find">
                <p>{t("order.remember")}</p>
              </div>

              <form
                method="post"
                onSubmit={handleSubmit}>
                <div className="image">
                  <img src={images["image@1x.webp"]} alt="" className="image-1" />
                </div>

                <div className="which-size-would-you">
                  <p>{t("order.which_size.title")}</p>
                </div>

                <div className="field-size field-heigth">
                  <label htmlFor="order_width">
                    {t("helpers.label.order.width")}
                  </label>
                  <select id="order_width" name="width" onChange={updateInput} value={formData.width || ''}>
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
                  <label htmlFor="order_hieght">
                    {t("helpers.label.order.height")}
                  </label>
                  <select id="order_height" name="height" onChange={updateInput} value={formData.height || ''}>
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

                <div className="please-contact">{t("order.which_size.sub")}</div>

                <div className="transport-fees">
                  <p>{t("order.transports.title")}</p>
                </div>

                <div className="sofa">
                  <img src={images["sofa@1x.webp"]} alt="" className="sofa-1" />
                  <hr className="line-under-sofa" />
                  <span className="text-size-sofa">200 cm</span>
                </div>

                <div className="the-transport-fees">
                  <p>{t("order.transports.body_1")}</p>
                  <p>{t("order.transports.body_2")}</p>
                </div>

                <div className="field-transport">
                  <label htmlFor="order_transport">
                    {t("helpers.label.order.transport")}
                  </label>
                  <select id="order_transport" name="transport" onChange={updateInput} value={formData.transport || ''}>
                    <option value="normal">{t("order.transports.normal")}</option>
                    <option value="express">
                      {t("order.transports.express")}
                    </option>
                  </select>
                  <hr className="line-select-transport"></hr>
                </div>

                <div className="field-comment">
                  <textarea
                    id="order_comment"
                    placeholder="Additional comments"
                    name="comment"
                    onChange={updateInput} value={formData.comment || ''}
                  ></textarea>
                  <hr className="line-comment"></hr>
                </div>

                <div className="we-estimate">{t("order.order_at.title")}</div>
                <div className="chf">
                  <span id="calculatedPrice">269</span> CHF
                </div>
                <div className="click-below">{t("order.order_at.sub")}</div>

                <div className="file">
                  <input
                    accept="image/png,image/gif,image/jpeg"
                    id="upload"
                    className="outtaHere inputfile"
                    required="required"
                    type="file"
                    name="picture"
                    onChange={updateInput} value={formData.picture || ''}
                  />
                  <label htmlFor="upload">
                    <span>Browse</span>
                  </label>
                </div>

                <div className="field-upload-picture">
                  <label id="field-upload" htmlFor="order_picture">
                    {t("helpers.label.order.picture")}
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
                    name="name"
                    onChange={updateInput} value={formData.name || ''}
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
                    name="email"
                    onChange={updateInput} value={formData.email || ''}
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
                  <input type="submit" value="Get an offer today"/>
                </div>
              </form>
            </div>
          </div>

        <Footer t={t} />
      </div>
    );
    }
}


export default Prices