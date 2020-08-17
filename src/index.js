import React,{ Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';	
// import './fonts/RobotoSlab-Light.ttf'
// import './fonts/Montserrat-Regular.ttf'
// import './fonts/HKGrotesk-Regular.ttf'
import './i18n';
import ScrollToTop from './components/Shared/ScrollToTop'
import {
  BrowserRouter as Router,
} from "react-router-dom";

import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <Suspense fallback={(<div>Loading</div>)}>
    <Router>
      <ScrollToTop>
        <App useSuspense={true} />
      </ScrollToTop>
    </Router>
  </Suspense>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
