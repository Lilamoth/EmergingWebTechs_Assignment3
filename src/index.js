import React from 'react';
<<<<<<< HEAD
import { createRoot } from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import App from './App';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container);

=======
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
>>>>>>> 55cdaf01f63f4e3a47d55612ca14d92bfca9ed30
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
<<<<<<< HEAD
=======

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
>>>>>>> 55cdaf01f63f4e3a47d55612ca14d92bfca9ed30
reportWebVitals();
