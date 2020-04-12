import React from 'react';
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
    <Router>
      <Switch>
        {/* Cuando la ruta sea XXX renderice este componente */}
        <Route path="/togame">
          <ToGame />
        </Route>
        <Route path="/game">
          <Game />
        </Route>
        <Route path="/learning">
          <Learning />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>    
  );
}
export default App