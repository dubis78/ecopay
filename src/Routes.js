import React,{Component} from 'react';
import { Switch,Route } from 'react-router-dom';

import Registro from './component/Registro';
import Home from './component/Home';
import Login1 from './component/Login1';

class Routes extends Component {
    
    render() { 
        return ( 
            <Switch>
                <Route exact path='/' component={Login1} />
                <Route exact path= '/registro' component={Registro} /> 
                <Route exact path='/home' component={Home} />
          
            </Switch>
         );
    }
}
 
export default Routes;