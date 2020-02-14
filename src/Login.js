import React from "react";
import "./Login.scss";
import brandImg from "./asset/brandImg.png";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="loginContainer">
        <div className="loginBrand-Container">
          <div className="Imgbox">
            <img src={brandImg}></img>
          </div>
          <div className="brandtitle">
            pour que <br /> les J.O
            <br /> restent <br />
            une fête
          </div>
          <span className="top"></span>
          <span className="bottom"></span>
          <div className="brandingTag">
            <h2>sherpa</h2>
            <p>Solution pour la gestion d’événements à haut risque</p>
          </div>
        </div>

        <div className="loginId-Container">
          <div className="loginIdWrapper">
            <h2> Connectez-vous</h2>

            <div className="loginId">
              <p>identifiant</p>
              <input
                placeholder="entrez votre identifiant"
                type="text"
                maxlength="30"
              ></input>
            </div>

            <div className="loginPwd">
              <p>mot de passe</p>
              <input
                className="Pwd"
                placeholder="entrez votre mot de passe "
                type="text"
                maxlength="30"
              ></input>
            </div>

            <a href="/home">
              <button className="loginButton">se connecter</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
