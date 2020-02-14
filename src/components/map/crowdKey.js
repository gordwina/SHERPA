import React from "react";
import { Redirect } from "react-router-dom";
import "./crowdKey.scss";

class CrowdKey extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="crowdKeyContainer">
        <div className="crowdKeyWrapper">
          <p>
            <i className="icon-red_Ellipse"></i>Affluence forte (+ 20k
            personnes)
          </p>
          <p>
            <i className="icon-yellow_Ellipse"></i>Affluence moyenne (10k - 20k
            personnes)
          </p>
          <p>
            <i className="icon-Green_Ellipse"></i> Affluence faible (- 10k
            personnes)
          </p>
        </div>
      </div>
    );
  }
}
export default CrowdKey;
