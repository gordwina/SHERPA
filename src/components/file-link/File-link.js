import React from "react";
import { Redirect } from "react-router-dom";
import "./File-link.scss";

class FileLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Redirect: false
    };
  }

  render() {
    return (
      <div>
        <a href="/informations">
          <div className="FileLink">
            <div className="FileLinkImage"></div>
            <div className="FileLinkInformation">
              <p className="FileLinkLocation">
                {" "}
                <strong>{this.props.location}</strong>{" "}
              </p>
              <p className="FileLinkCapacity">
                <i className="icon-people_icon"></i> {this.props.capacity}{" "}
              </p>
              <p className="FileLinkDistance">O 100m </p>
            </div>
            <div className="FileLinkPlus">
              <i className="icon-star_icon"></i>
              <p className="FileLinkSchedule">{this.props.date}</p>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default FileLink;
