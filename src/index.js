import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Context from './context/Context';
import 'bootstrap/dist/css/bootstrap.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import CheckoutPage from './Pages/CheckoutPage';
import FrontPage from './Pages/FrontPage'
import Thankyou from './Pages/Thankyou';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context>
      <HashRouter>
        <Routes>
          <Route path="/" element={<FrontPage/>}/>
          <Route path="/Cart" element={<CheckoutPage/>}/>
          <Route path="/Thankyou" element={<Thankyou/>}/>
        </Routes>
      </HashRouter>
    </Context>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

