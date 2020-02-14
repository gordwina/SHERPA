import React from "react";
import { Redirect } from "react-router-dom";
import "./mapKey.scss";

class MapKey extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mapKeyContainer">
        <div className="statusLeft">
          <p>
            {" "}
            <i className="icon-safety-fire-extinguisher-2"></i> Casernes de
            Pompier{" "}
          </p>
          <p>
            {" "}
            <i className="icon-police"></i> Caserne de Police
          </p>
        </div>

        <div className="statusRight">
          <p>
            <i className="icon-Group-5"></i> Hopitaux
          </p>
          <p>
            <i className="icon-zone_repli"></i>Zone de Repli
          </p>
        </div>
      </div>
    );
  }
}
export default MapKey;
