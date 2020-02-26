import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import Informations from "./components/information-page/Informations";
import Favoris from "./components/favoris/Favoris";
import Login from './components/login/Login';

export default function Routing() {
  return (
    <Router>
      <div>
        <Switch>
          <Route component={Login} exact path="/"></Route>
          <Route component={Login} path="/login"></Route>

          <Route component={App} path="/home"></Route>

          <Route component={Informations} path="/informations/api/stades/:id"></Route>

          <Route component={Favoris} path="/favoris"></Route>
        </Switch>
      </div>
    </Router>
  );
}
