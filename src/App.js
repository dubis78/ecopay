import React from 'react';
import './App.css';
import Home from './components/Home';
import Learning from './components/Learning';

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

export default App;
