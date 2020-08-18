import React from 'react';
import Home from './components/Home/Home'
import Gallery from './components/Gallery/Gallery'
import About from './components/About/About'
import SalesCondition from './components/SalesCondition/SalesCondition'
import Prices from './components/Prices/Prices'
import SPrices from './components/Prices/SPrices'
import { useTranslation, withTranslation} from 'react-i18next';

import {Switch,Route } from "react-router-dom";


const THome = withTranslation()(Home);
const TGallery = withTranslation()(Gallery);
const TAbout = withTranslation()(About);
const TSalesCondition = withTranslation()(SalesCondition);
const TPrices = withTranslation()(Prices);
const STPrices = withTranslation()(SPrices);

function App() {

  const {i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
        <Switch>
          <Route exact path="/"> <THome langChange={changeLanguage}/></Route>
          <Route path="/gallery"><TGallery langChange={changeLanguage}/></Route>
          <Route path="/about"><TAbout langChange={changeLanguage} /></Route>
          <Route path="/terms"><TSalesCondition langChange={changeLanguage}/></Route>
          <Route path="/prices"><TPrices langChange={changeLanguage}/></Route>
          <Route path="/prices-success"><STPrices langChange={changeLanguage}/></Route>
        </Switch>
  );
}

export default App;
