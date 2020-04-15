import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Registro from './component/Registro';
import Login1 from './component/Login1';
import Home from './component/Home/index';
import Game from './component/Game';
import ToGame from './component/ToGame/Nivel1';
import Prueba from './component/ToGame/Prueba';
import Principal from './component/Principal/index';
import PrincipalLogin from './component/PrincipalLogin/index';


class Routes extends Component {
    
    render() { 
      return (
        <Switch>
          <Route exact path= '/registro' component={Registro} />          
          <Route exact path='/login' component={Login1} />  
          <Route exact path='/home' component={Home} />              
          <Route exact path='/togame' component={ToGame}/>
          <Route exact path='/prueba' component={Prueba}/>
          <Route exact path='/game' component={Game}/>
          <Route exact path='/' component={Principal}/>         
          <Route exact path='/principal' component={PrincipalLogin}/> 
        </Switch>
      );
    }
}
export default Routes;
