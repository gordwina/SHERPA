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
            <i id="red" className="icon-level-red"></i>Affluence forte (+ 20k
            personnes)
          </p>
          <p>
            <i id="yellow" className="icon-level-yellow"></i>Affluence moyenne (10k - 20k
            personnes)
          </p>
          <p>
            <i  id="green" className="icon-level-green-2"></i> Affluence faible (- 10k
            personnes)
          </p>
        </div>
      </div>
    );
  }
}
export default CrowdKey;
