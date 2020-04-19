import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Registro from './component/Registro';
import Login1 from  './component/Login1';
import Home from './component/Home/index';
import Game from './component/Game';
import ToGame1 from './component/ToGame/Nivel1';
import ToGame2 from './component/ToGame/Nivel2';
import ToGame3 from './component/ToGame/Nivel3';
import Prueba from './component/ToGame/Prueba';
import Principal from './component/Principal/index';
import Organic from './component/info/organic';
import Metals from './component/info/metals';
import Ordinary from './component/info/ordinary';
import Paper from './component/info/paper';
import Glass from './component/info/glass';
import Plastic from './component/info/plastic';
import HomeGoogle from './component/Home/HomeGoogle';
class Routes extends Component {    
  render() { 
    return (
      <Switch>
        <Route exact path='/' component={Principal}/>
        <Route exact path= '/registro' component={Registro} />          
        <Route exact path= '/login' component={Login1} />  
        <Route exact path='/home' component={Home} />              
        <Route exact path='/togame1' component={ToGame1}/>
        <Route exact path='/togame2' component={ToGame2}/>
        <Route exact path='/togame3' component={ToGame3}/>
        <Route exact path='/hm' component={HomeGoogle} />
        <Route exact path='/prueba' component={Prueba}/>
        <Route exact path='/game' component={Game}/>        
        <Route exact path='/infoglass' component={Glass}/> 
        <Route exact path='/infopaper' component={Paper}/>          
        <Route exact path='/infoplastic' component={Plastic}/> 
        <Route exact path='/infometals' component={Metals}/>         
        <Route exact path='/infoorganic' component={Organic}/> 
        <Route exact path='/infoordinary' component={Ordinary}/> 
      </Switch>
    );
  }
}
export default Routes;
