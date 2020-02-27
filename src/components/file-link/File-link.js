import React from "react";
import "./File-link.scss";

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
            <div className="FileLinkImage"></div>
            <div className="FileLinkInformation">
              <p className="FileLinkLocation">
                <strong>{this.props.nom}</strong>
              </p>
              <p className="FileLinkCapacity">
                <i className="icon-people"></i> 
                {this.props.capacity}
              </p>
              <p className="FileLinkCrowd"> 
                <i id="yellow" className="icon-level-yellow"></i>
                {this.props.crowd} 
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
