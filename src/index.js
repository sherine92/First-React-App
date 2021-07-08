import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "jquery/dist/jquery.min.js"
import "popper.js/dist/umd/popper.min.js"
import "@fortawesome/fontawesome-free/css/all.min.css"
import { BrowserRouter } from 'react-router-dom';
// 1-npm i react router dom
// 2-<BrowserRouter> index.js>App.js
// 3-<Route path="/home"compenet={Home}


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
   
  </React.StrictMode>,
  document.getElementById('root')
);


