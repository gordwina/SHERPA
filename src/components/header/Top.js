import React from "react";
import "./Top.scss";
import Favoris from "../favoris/Favoris";
import authAPI from "../../services/authAPI";

const LogoutPage = ({isAuthenticated, onLogout, history}) => {

    const handleLogout = () => {
        authAPI.logout();
        onLogout(false);
        history.push("/")
    };

    return (
        <div className="Head">
            <div className="brandingWrapper">
                <a className={"logo"} href="/home">
                    <div className="logo"></div>
                    <div className="brand">sherpa</div>
                </a>
            </div>

            <div className="buttonWrapper">
                <Favoris></Favoris>
                <button onClick={handleLogout} className="btn logoutButton">Déconnexion <i className="icon-out"></i></button>
            </div>
        </div>
    );

};

export default LogoutPage;