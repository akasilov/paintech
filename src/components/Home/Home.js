import React, { useState, useEffect } from 'react';
import '../../assets/stylesheets/application.scss'
import Header from '../Shared/Header'
import HowItWords from './HowItWorks'
import SuperEasy from './SuperEasy'
import BestPrice from './BestPrice'
import BestService from './BestService'
import Footer from '../Shared/Footer'
import ChatBtn from './ChatBtn'
import drop17 from '../../assets/images/drop-17@1x.png'

function Home(props){
    const { t } = props;

    return(
        <div className="body">
            <ChatBtn t= {t}/>
            <div className="container-fluid">
                <div id="hero" className="row">
                    <div className="content" id="content">
                    </div>
                </div>
                <Header t= {t} route='home'/>
                <HowItWords t= {t}/>
                <SuperEasy t= {t} />
                <BestPrice t= {t}/>
                <BestService t= {t}/>
                <img src={drop17}  className='drop-17' alt="" />
            </div>
            <Footer t= {t}/>
        </div>
    );
}

export default Home;

