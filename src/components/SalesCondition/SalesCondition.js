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

function SalesCondition() {
    const images = importAll(require.context('../../assets/images/', false, /\.(png|jpe?g)$/));
  
    return (
      <div classNameName="body">
        <ChatBtn />
        <Header />
        <div className="terms back-white">
  <div className="drops-body-2">
    <img src={images['drop-4@1x.png']} alt="" className= 'drop-4' />
    <img src={images['drop-3@1x.png']} alt="" className= 'drop-3' />
    <img src={images['drop-media-8@1x.png']} alt="" className= 'drop-media-8' />
    <img src={images['drop-terms-media-1@1x.png']} alt="" className= 'drop-terms-media-1 media' />
    <img src={images['drop-media-10@1x.png']} alt="" className= 'drop-terms-media-2 media' />
    <img src={images['drop-terms-media-1@1x.png']} alt="" className= 'drop-terms-media-3 media' />
    <img src={images['drop-terms-media-4@1x.png']} alt="" className= 'drop-terms-media-4 media' />
    <img src={images['drop-media-10@1x.png']} alt="" className= 'drop-terms-media-5 media' />
    <img src={images['drop-18-2@1x.png']} alt="" className= 'drop-terms-media-6 media' />
  </div>
  <div className="drops-body-1">
    <img src={images['drop-7@1x.png']} alt="" className= 'drop-7-media media' />
    <img src={images['drop-7@1x.png']} alt="" className= 'drop-7' />
    <img src={images['drop-21-2@2x.png']} alt="" className= 'drop-2' />
    <img src={images['drop-10@1x.png']} alt="" className= 'drop-10' />
    <img src={images['drop-5-2@1x.png']} alt="" className= 'drop-5' />
  </div>
  <div className="row m0 p0">
    <div className="col-10 offset-1 text-center">
      <div className="title">
       <div className="title-text">General Purchasing Conditions</div>
        <img src={images['brush-1@1x.png']} alt="" className= 'brush-1' />
      </div>
    </div>
  </div>
  <div className="row m0 p0">
    <div className="col-5 offset-1 text-center">
      <div className="part text-left">
        <span className="title">1. General Conditions</span>
        <p className="body">Painted.ch is the owner administrator of this website. Access to this website implies that you accept the limitations, conditions, remarks and reservations contained in this page and in other places of the site (the "General Conditions"). Painted.ch reserves the right to modify the content of the website at any time.</p>
      </div>
      <div className="part text-left">
        <span className="title">2. Information on the products </span>
        <p className="body">2-a: Painted.ch presents on its website the products to be sold with the main characteristics which provide the possibility for the potential consumer to know the essential characteristics of the products he wishes to buy before the final order is placed. All our products are described with the best possible precision, the pictures are intended to present an overview of the product with a certain configuration. Some photos may include optional or different accessories which are not included in the product price. Only the detailed description lists exactly the elements included with the product. In case of error, we cannot be held responsible. Any operation not claimed within one month of the purchase date cannot give rise to a claim afterwards, except under a specific guarantee.</p>
        <p className="body">2-b: The offers presented by Painted.ch are only valid within the limit of available stocks.</p>
        <p className="body">2-c: Painted.ch offers a service of reproduction of images and paintings. It is the sole responsibility of the customer to make sure that the reproduction of the image or painting does not violate copyright regulation. Painted.ch will at no time be held responsible for copyright infringement.</p>
      </div>
      <div className="part text-left">
        <span className="title">3. Prices</span>
        <p className="body">Prices are quoted in Swiss francs and do not include delivery charges and customs clearance charges, which can be offered before the order is approved by the customer (unless otherwise stated). The customer is responsible to pay the full price at the time of the order. At no time may the sums paid be considered as deposits or down payments. Painted.ch shall endeavor to keep up to date the website and all the indications relating to products and any price indications published therein, but cannot provide any guarantee in this respect.</p>
      </div>
      <div className="part text-left">
        <span className="title">4. Delivery issues linked to transport and parcel service</span>
        <p className="body">Any issue concerning delivery (damage, missing product in relation to the delivery note, damaged package, broken products ...) must be declared on the delivery note in handwritten form together with the signature of the customer.</p>
      </div>
      <div className="part text-left">
        <span className="title">5. Intellectual property </span>
        <p className="body">Unless otherwise specified, the operator is the owner of the portal. All trademarks, names, titles, logos, photos, drawings, texts and other material used on this portal are the property of a legal subject of Painted.ch. Opening pages, downloading or copying them does not lead to the acquisition of rights (user rights, intellectual property rights, etc.). Unless otherwise expressly authorized in writing, it is forbidden to reproduce, transmit (electronically or by any other means), modify, or use the portal for public or commercial purposes, in whole or in part.</p>
      </div>
      <div className="part text-left">
        <span className="title">6. Data Accuracy</span>
        <p className="body">Painted.ch does its best to ensure that the content of this website is correct and up-to-date at the time of publication. Nevertheless, Painted.ch does not claim or guarantee that the content is complete and without fault and declines any responsibility for any errors, omissions or imperfections.</p>
      </div>
      <div className="part text-left">
        <span className="title">7. Limitations of Liability</span>
        <p className="body">Painted.ch disclaims all liability, to the extent permitted by law, for damage caused by correct or incorrect handling by accessing, downloading, using or relying on the content of this website or its products, If due to the negligence of Painted.ch or third parties. Painted.ch shall not be liable for any damages (including negligence) caused by access to, or inability to access, all or part of the portal. Access to the portal, the use of the portal and the possibility of saving or archiving the transmitted data are not guaranteed.</p>
      </div>
      <div className="part text-left">
        <span className="title">8. Confidentiality</span>
        <p className="body">Apart from the information stored by its Internet Service Provider, Painted.ch will not collect any personally identifiable information when you visit this website, unless you voluntarily provide such data on your own will. The personal data collected by Painted.ch is strictly confidential. Painted.ch shall not disclose, divulge, sell, distribute, share or communicate to third parties the personal data you have provided to it, unless authorized by law or in connection with the sale of Product or delivery of a Painted.ch service (to ensure the continuity of the sale or service in question), or unless Painted.ch has obtained your permission. You should also be aware that non-personal information and data can be automatically registered through "cookies". Cookies are information stored by websites to determine the frequency of use, facilitate access to websites, help you to use them, facilitate personalization of the site according to your preferences and to better target advertising. Cookies are usually automatically created and most websites use them. Almost all web browsers are configured to allow cookies to be created. If you prefer not to use cookies, you can set your browser to refuse cookies or to warn you before placing a cookie on your hard drive.</p>
      </div>
      <div className="part text-left">
        <span className="title">9. Applicable law</span>
        <p className="body">These General Terms and Conditions are subject to Swiss law and apply in accordance with the law, even in the case of disputes arising in other jurisdictions. All complaints concerning these Terms and Conditions or the use of this website are the sole responsibility of the Court of Berne, Switzerland. This website is accessible from all over Switzerland and from other countries. Painted.ch does not guarantee that the content of this website is in conformity with the laws of other countries. If you access this site from a country other than Switzerland, it is your responsibility to ensure that access to the site in question, as well as the download, use and reliability of its Content are in accordance with the legislation of the country in which you are located.</p>
      </div>
      <div className="part text-left">
        <span className="title"> </span>
        <p className="body">Last update made on 12 July 2017.</p>
      </div>
    </div>
  </div>
</div>

        <Footer />
      </div>
    );
}


export default SalesCondition