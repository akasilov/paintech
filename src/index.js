import React,{ Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './i18n';
import ScrollToTop from './components/Shared/ScrollToTop'
import {
  BrowserRouter as Router,
} from "react-router-dom";

ReactDOM.render(
  <Suspense fallback={(<div></div>)}>
    <Router>
      <ScrollToTop>
        <App useSuspense={true} />
      </ScrollToTop>
    </Router>
  </Suspense>,
  document.getElementById('root')
);

serviceWorker.unregister();
