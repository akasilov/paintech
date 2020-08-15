import React,{Component} from 'react';
import { useState, useEffect } from 'react';
import Home from './components/Home/Home'
import Gallery from './components/Gallery/Gallery'
import About from './components/About/About'
import SalesCondition from './components/SalesCondition/SalesCondition'
import Prices from './components/Prices/Prices'
import { useTranslation, withTranslation} from 'react-i18next';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


const THome = withTranslation()(Home);
const TGallery = withTranslation()(Gallery);
const TAbout = withTranslation()(About);
const TSalesCondition = withTranslation()(SalesCondition);
const TPrices = withTranslation()(Prices);

function App() {
  const [loading, setLoading] = useState(true);

  const {i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const el = document.querySelector(".loader-container");
    if (el) {
        el.remove();
        setLoading(false);
    }
  });

  if (loading) {
    return null;
  }

  return (
        <Switch>
          <Route exact path="/"> <THome langChange={changeLanguage}/></Route>
          <Route path="/gallery"><TGallery langChange={changeLanguage}/></Route>
          <Route path="/about"><TAbout langChange={changeLanguage} /></Route>
          <Route path="/terms"><TSalesCondition langChange={changeLanguage}/></Route>
          <Route path="/prices"><TPrices langChange={changeLanguage}/></Route>
        </Switch>
  );
}

export default App;
