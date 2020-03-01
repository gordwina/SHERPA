import React from "react";
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
            <i className="icon-pompier"></i> 
            Casernes de Pompier{" "}
          </p>

          <p>
            {" "}
            <i className="icon-polic"></i> 
            Caserne de Police
          </p>
        </div>

        <div className="statusRight">
          <p>
            <i className="icon-hopital"></i> 
            Hopitaux
          </p>

          <p>
            <i className="icon-repli"></i>
            Zone de Repli
          </p>
        </div>
      </div>
    );
  }
}
export default MapKey;
