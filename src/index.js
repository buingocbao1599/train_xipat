import React from 'react';
import ReactDOM from 'react-dom/client';
import Modal1 from './components/modal1';
import Modal2 from './components/pricing/modal2';
import './index.css';

// import App from './App';
import Pricing from "./components/pricing";


import App from './App';
import Pricing from "./components/pricing"
import CallApi from "./components/api"

import reportWebVitals from './reportWebVitals';
import { AppProvider } from '@shopify/polaris';
import '@shopify/polaris/build/esm/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>

      {/* <App /> */}
      {/* <Pricing /> */}
      {/* <Modal1 /> */}
      <Modal2 />

      {/* <App /> */}
      {/* <Pricing /> */}
      {/* <CallApi /> */}

    </AppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
