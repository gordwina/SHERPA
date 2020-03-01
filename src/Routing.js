import React, {useState} from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import App from "./App";
import Informations from "./components/information-page/Informations";
import LoginPage from './components/login/Login';
import authAPI from "./services/authAPI";

export default function Routing() {

    const [isAuthenticated, setIsAuthenticated] = useState(authAPI.isAuthenticated());

    console.log(isAuthenticated);

    const PrivateRoute = ({path, isAuthenticated, component}) =>
        isAuthenticated ? (
            <Route path={path} component={component}/>
        ) : (
            <Redirect to="/"/>
        );

    return (
        <Router>
            <div>
                <Switch>
                    <Route render={props => <LoginPage
                        onLogin={setIsAuthenticated}
                        {...props}/>}
                           exact path="/"/>

                    <PrivateRoute path="/home" isAuthenticated={isAuthenticated} component={App}/>

                    <PrivateRoute path="/informations/api/stades/:id" isAuthenticated={isAuthenticated}
                                  component={Informations}/>

                </Switch>
            </div>
        </Router>
    );
}