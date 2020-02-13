import React from 'react';
import './File-link.scss'
import '../../style/colors.scss';
import '../../style/font.scss';


class FileLink extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="FileLink">
                <div className="FileLinkImage"></div>
                <div className="FileLinkInformation">
                    <p className="FileLinkLocation"> <strong>{this.props.location}</strong> </p>
                    <p className="FileLinkCapacity"><i className="icon-people_icon"></i> {this.props.capacity}  </p>
                    <p className="FileLinkDistance">O 100m </p>
                </div>
                <div className="FileLinkPlus">
                    <i className="icon-star_icon"></i>
                    <p className="FileLinkSchedule">{this.props.date}</p>
                </div>
            </div>
        );
    }
  }
      
  export default FileLink;