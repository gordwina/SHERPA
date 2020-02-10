import React from 'react';
import './File-link.scss'
import '../style/colors.scss';
import '../style/font.scss';


function FileLink() {
    return (
      <div className="FileLink">
        <div className="FileLinkImage"></div>

        <div className="FileLinkInformation">
            <p className="FileLinkLocation"> <strong>Stade de france</strong> </p>
            <p className="FileLinkCapacity"><i className="icon-people_icon"></i> Capacité 81 335  </p>
            <p className="FileLinkDistance">O 100m </p>

        </div>

        <div className="FileLinkPlus"> 
       <i className="icon-star_icon"></i> 
            <p className="FileLinkSchedule"> 16h00 / 19h00 </p>
        </div>

        
      </div>
    );
  }
      
  export default FileLink;