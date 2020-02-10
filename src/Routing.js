
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  export default function Routing() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Login</Link>
              </li>
              <li>
                <Link to="/app">home</Link>
              </li>
              <li>
                <Link to="/informations">information générale</Link>
              </li>
            </ul>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/login">
              <About />
            </Route>
            <Route path="/home">
              <Users />
            </Route>
            <Route path="/informations">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
    
    export default Routing;