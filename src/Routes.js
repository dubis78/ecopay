import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Registro from './component/Registro';
import Home from './component/Home/index';
import Login1 from './component/Login1';
import Organic from './component/info/organic';
import Metals from './component/info/metals';
import Ordinary from './component/info/ordinary';
import Paper from './component/info/paper';
import Glass from './component/info/glass';
import Game from './component/Game';
import ToGame from './component/ToGame';
<<<<<<< HEAD
import Principal from './component/Principal';
import Plastic from './component/info/plastic';

class Routes extends Component {
    
    render() { 
        return ( 
            <>
            <Switch>
                <Route exact path='/' component={Login1} />
                <Route exact path= '/registro' component={Registro} /> 
                <Route exact path='/home' component={Home} />
                

                <Route path="/principal">
                    <Principal />
                  </Route>
                  <Route path="/togame">
                    <ToGame />
                  </Route>
                  <Route path="/game">
                    <Game />
                  </Route>
                  <Route path="/infoglass">
                    <Glass />
                  </Route>
                  <Route path="/infoplastic">
                    <Plastic />
                  </Route>
                  <Route path="/infopaper">
                    <Paper />
                  </Route>
                  <Route path="/infoordinary">
                    <Ordinary />
                  </Route>
                  <Route path="/infometals">
                    <Metals />
                  </Route>
                  <Route path="/infoorganic">
                    <Organic />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
            </Switch>
             
              </>
         );
    }
=======
import Principal from './component/Principal/index';


class Routes extends Component {

  render() {
    return (
      <>
        <Switch>

         

          <Route exact path='/login' component={Login1} />
          <Route exact path='/registro' component={Registro} />
          <Route exact path='/home' component={Home} />

          <Route path="/principal">
            <Principal />
          </Route>
        
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

      </>
    );
  }
>>>>>>> bc3ee2b2ef090559bd7662c5539683417745de16
}

export default Routes;