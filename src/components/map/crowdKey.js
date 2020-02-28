import React from "react";
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
            <i id="red" className="icon-level-red"></i>Affluence forte (+ 40k
            personnes)
          </p>
          <p>
            <i id="yellow" className="icon-level-yellow"></i>Affluence moyenne (20k - 40k
            personnes)
          </p>
          <p>
            <i  id="green" className="icon-level-green-2"></i> Affluence faible (- 20k
            personnes)
          </p>
        </div>
      </div>
    );
  }
}
export default CrowdKey;
