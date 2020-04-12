import React,{Component} from 'react';
import { Switch,Route } from 'react-router-dom';

import Registro from './component/Registro';
import Home from './component/Home/index';
import Login1 from './component/Login1';
import Learning from './component/Learning';
import Game from './component/Game';
import ToGame from './component/ToGame';

class Routes extends Component {
    
    render() { 
      return (
        <Switch>
          <Route exact path='/' component={Login1} />
          <Route exact path= '/registro' component={Registro} />                
          <Route exact path='/togame' component={ToGame}/>
          <Route exact path='/game' component={Game}/>
          <Route exact path='/learning' component={Learning}/>
          <Route exact path='/home' component={Home}/>    
        </Switch>
      );
    }
}
 
export default Routes;
