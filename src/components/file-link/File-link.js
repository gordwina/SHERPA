import React from "react";
import "./File-link.scss";
import axios from "axios";

class FileLink extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
    };
  }


//TODO@Alice : CLEANUP 
  render() {
    return (
      <div>
        <a href={"/informations" + this.props.id}>
          <div className="FileLink">
            <div className="FileLinkImage" id="img"></div>
            <div className="FileLinkInformation">
              <p className="FileLinkLocation">
                <strong>{this.props.nom}</strong>
              </p>
              <p className="FileLinkCapacity">
                <i className="icon-people"></i> 
                {this.props.capacity}
              </p>
              <p className="FileLinkCrowd">
                {this.props.crowd > 20000 ?  <i id="red" className="icon-level-red"></i>  : this.props.crowd < 10000 ? <i id="green" className="icon-level-green-2"></i> :
                    <i id="yellow" className="icon-level-yellow"></i> }
                  Seuil de danger
              </p>
            </div>
            <div className="FileLinkPlus">
               <button><i className="icon-favori"></i></button>
            </div>
          </div>
        </a>
      </div>
    );
  }
}
export default FileLink;
