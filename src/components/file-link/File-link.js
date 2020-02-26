import React from "react";
import "./File-link.scss";

class FileLink extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <a href={"/informations" + this.props.id}>
          <div className="FileLink">
            <div className="FileLinkImage"></div>
            <div className="FileLinkInformation">
              <p className="FileLinkLocation">
                {" "}
                <strong>{this.props.nom}</strong>
              </p>
              <p className="FileLinkCapacity">
                <i className="icon-people"></i> {this.props.capacity}{" "} capacité
              </p>
              <p className="FileLinkCrowd"> <i id="yellow" className="icon-level-yellow"></i>{this.props.crowd} </p>
            </div>
            <div className="FileLinkPlus">
              <i className="icon-favori"></i>
              <div className="FileLinkScheduleX">
                <p  className="FileLinkSchedule">{this.props.date}</p> 
                <p className="FileLinkSchedule">{this.props.chroni}</p>
                </div>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default FileLink;
