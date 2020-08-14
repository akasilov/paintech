import React from 'react';
import SvgLeft from '../../assets/images/Left'
import drop14 from '../../assets/images/drop-14@1x.png'
//import drop15 from '../../assets/images/drop-15@1x.png'
import brush3 from '../../assets/images/brush-3@1x.png'
import bitmapBS from '../../assets/images/bitmap_b_s@1x.png'
import bitmapMedia from '../../assets/images/bitmap-media-3@1x.png'
import SvgMaskCopy3 from '../../assets/images/MaskCopy3'
import '../../assets/stylesheets/application.scss'


function BestService(props){
    const { t } = props;
    return(
        <div id="best-service">
        <div className="drops">
            <img src={drop14} className='drop-14' alt=""/>
        </div>
        <div className="row ml0 mr0 p0">
            <div className="col-xs-12 col-sm-12 img ">
                <img src={brush3} className='brush' alt=""/>
                {/* <SvgMaskCopy3 className='shadow'/> */}
                <img src={bitmapBS} className='b-s-img shadow-image' alt=""/>
                <img src={bitmapMedia} className='b-s-img-media media shadow-image' alt=""/>

            </div>
        </div>
        <div className="row mr0 ml0">
            <div className="descriptions">
                <div className="title">
                {t('home_page.best_service.title')}
                </div>
                {t('home_page.best_service.description')}
                <p className="mb0">
                    <a href="/prices">
                    {t('home_page.start_painting')}
                        <SvgLeft className="arrow m0" />
                    </a>
                </p>
            </div>
        </div>
    </div>
    )
}
export default BestService