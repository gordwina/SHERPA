import React from "react";
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
          <a href="/login"> 
            <button className="btn logoutButton">Déconnexion <i className="icon-out"></i></button>
          </a>
        </div>
      </div>
    );
  }
}
export default Top;
