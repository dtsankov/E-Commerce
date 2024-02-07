import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import '@fortawesome/fontawesome-svg-core/styles.css';
import "bootstrap/dist/css/bootstrap.css";     
import 'animate.css';
import './index.css';

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
     <ToastContainer
        position="top-center"
        autoClose={1500}
        pauseOnHover={false} />
    <App />

    </BrowserRouter>
);

 
