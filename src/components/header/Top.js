import React from "react";
import { Redirect } from "react-router-dom";
import "./Top.scss";
import Favoris from "../favoris/Favoris";

class Top extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Head">
        <div className="brandingWrapper">
          <div className="logo"></div>

          <div className="brand">sherpa</div>
        </div>

        <div className="buttonWrapper">
          <Favoris></Favoris>

          {/*  @todo:alice calenddrier va devenir une modale */}

          <a href="/login">
            <button className="btn calendar">Déconnexion</button>
          </a>
        </div>
      </div>
    );
  }
}
export default Top;
