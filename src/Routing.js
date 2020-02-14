 
import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import App from './App';
import Informations from './components/information-page/Informations';
import Favoris from './components/favoris/Favoris';
import Login from './Login';

 
export default function Routing() {
  return (
    <Router>
    <div>
    <Switch>
    
   <Route component={Login} path="/login">
      <Login/>
    </Route>
   

    <Route component={App} path="/home">
      <App/>
    </Route>
    
   <Route component={Informations} path="/informations">
      <Informations/> 
    </Route> 

    <Route component={Favoris} path="/favoris">
      <Favoris/> 
    </Route> 
    
    </Switch>
    </div>
    </Router>
  );
}