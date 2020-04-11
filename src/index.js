import React from 'react';
import ReactDOM from 'react-dom';

//import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css';

import Board from './components/Board';
import './index.css';
//import App from './App';

//dubenis//
ReactDOM.render(
<>
  <Board/>
</>,
  document.getElementById('root')
);

/* 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/ 
