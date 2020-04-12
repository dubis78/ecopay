import React from 'react';
import Routes from './Routes'
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import Home from './component/Home';
import Learning from './component/Learning';
import Game from './component/Game'
import ToGame from './component/ToGame'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
    
    </>
  );
}
export default App