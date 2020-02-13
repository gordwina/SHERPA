 
import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import App from './App';
//import Information from './components/Informations';
import Login from './Login';
 
export default function Routing() {
  return (
    <Router>
    <div>
    <Switch>
    
   <Route component={Login} path="/tata">
      <Login/>
    </Route>
   

    <Route component={App} path="/toto">
      <App/>
    </Route>
    
 {/*    <Route path="/informations">
      <Informations/> 
    </Route> */}
    
    </Switch>
    </div>
    </Router>
  );
}