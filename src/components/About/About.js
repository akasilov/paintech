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

function About() {
    const images = importAll(require.context('../../assets/images/', false, /\.(png|jpe?g)$/));
  
    return (
      <div className="body">
        <ChatBtn />
        <Header />
        <div id="about" className="container-fluid">
  <div className="row m0 clearfix">
    <div id="about_header" className="col-12">
      <div className="about-header-drops">
        <img alt="" src={images['drop-7-copy-2@1x.png']} className='drop-7-copy-2 no-media' />
        <img alt="" src={images['drop-17@1x.png']} className='drop-17 no-media' />
        <img alt="" src={images['drop-11@1x.png']} className='drop-11 no-media' />
      </div>
    </div>
  </div>

  <div id="about_body" className="row m0">
    <div id="content" className="col-10 offset-1">
      <div className="row m0">
        <div id="title" className="col-12 text-center">
          About Us
          <img alt="" src={images['brush-9@1x.png']} className='brush-title' />
        </div>
      </div>
      <div className="row m0 top-pic">
        <div id="img" className="col-12 text-center">
          <img alt="" src={images['canvas-studio@1x.png']} className='artist-on-work' />
          <img alt="" src={images['canvas-studio-media@1x.png']} className='artist-on-work-media' />
          <img alt="" src={images['brush-2@1x.png']} className='brush-2' />
          <div className="img-drops">
            <img alt="" src={images['drop-3@1x.png']} className='drop-3 no-media' />
            <img alt="" src={images['drop-4@1x.png']} className='drop-4 no-media' />
            <img alt="" src={images['drop-7@1x.png']} className='drop-7 no-media' />
          </div>
        </div>
      </div>
      <div className="row m0">
        <div className="about-body-drops">
          <img alt="" src={images['drop-6@1x.png']} className='drop-6 no-media' />
          <img alt="" src={images['drop-7-copy@1x.png']} className='drop-7-copy no-media' />
          <img alt="" src={images['drop-13@1x.png']} className='drop-13 no-media' />
          <img alt="" src={images['drop-5@1x.png']} className='drop-5 no-media' />
          <img alt="" src={images['drop-12@1x.png']} className='drop-12 no-media' />
          <img alt="" src={images['drop-11@1x.png']} className='drop-11 media' />
        </div>
        <div id="description" className="col-6">
          <p className="header">Hello</p>
          <p className="about-title">We are a small start-up in Bern, Switzerland with the aim of making cool and affordable art possible for everyone.</p>
          <p className="about-title">Typical, boring decor is over. With painted.ch you can order a unique oil painting for the top price and get framed home!</p>
          <p className="about-title about-info info">Email</p>
          <p className="about-title">info@painted.ch</p>
          <p className="about-title about-info">Phone Number</p>
          <p className="about-title">+41 (0) 76 339 95 67</p>
          <p className="about-title">+41 (0) 78 910 68 81</p>
        </div>
      </div>
    </div>
  </div>
</div>

        <Footer />
      </div>
    );
}


export default About