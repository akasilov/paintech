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

function SalesCondition(props) {
    const images = importAll(require.context('../../assets/images/', false, /\.(png|jpe?g)$/));
    const { t } = props;
    return (
      <div classNameName="body">
        <ChatBtn t= {t}/>
        <Header t= {t}/>
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
       <div className="title-text">{t('terms_conditions.title')}</div>
        <img src={images['brush-1@1x.png']} alt="" className= 'brush-1' />
      </div>
    </div>
  </div>
  <div className="row m0 p0">
    <div className="col-5 offset-1 text-center">
      <div className="part text-left">
        <span className="title">{t('terms_conditions.part_1.title')}</span>
        <p className="body">{t('terms_conditions.part_1.body')}</p>
      </div>
      <div className="part text-left">
        <span className="title">{t('terms_conditions.part_2.title')} </span>
        <p className="body">{t('terms_conditions.part_2.body_1')}</p>
        <p className="body">{t('terms_conditions.part_2.body_2')}</p>
        <p className="body">{t('terms_conditions.part_2.body_3')}</p>
      </div>
      <div className="part text-left">
        <span className="title">{t('terms_conditions.part_3.title')}</span>
        <p className="body">{t('terms_conditions.part_3.body_1')}</p>
      </div>
      <div className="part text-left">
        <span className="title">{t('terms_conditions.part_4.title')}</span>
        <p className="body">{t('terms_conditions.part_4.body_1')}</p>
      </div>
      <div className="part text-left">
        <span className="title">{t('terms_conditions.part_5.title')} </span>
        <p className="body">{t('terms_conditions.part_5.body_1')}</p>
      </div>
      <div className="part text-left">
        <span className="title">{t('terms_conditions.part_6.title')}</span>
        <p className="body">{t('terms_conditions.part_6.body_1')}</p>
      </div>
      <div className="part text-left">
        <span className="title">{t('terms_conditions.part_7.title')}</span>
        <p className="body">{t('terms_conditions.part_7.body_1')}</p>
      </div>
      <div className="part text-left">
        <span className="title">{t('terms_conditions.part_8.title')}</span>
        <p className="body">{t('terms_conditions.part_8.body_1')}</p>
      </div>
      <div className="part text-left">
        <span className="title">{t('terms_conditions.part_9.title')}</span>
        <p className="body">{t('terms_conditions.part_9.body_1')}</p>
      </div>
      <div className="part text-left">
        <span className="title"> </span>
        <p className="body">{t('terms_conditions.last_update')}</p>
      </div>
    </div>
  </div>
</div>

        <Footer t= {t}/>
      </div>
    );
}


export default SalesCondition