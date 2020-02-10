import React from 'react';
import './Top.scss';
import '../style/colors.scss';
import '../style/font.scss';


function Top() {
  return (
    <div className="Head">

      <div class="brandingWrapper">
        <div className="logo"></div>
        
        <div className="brand">
          sherpa
        </div>
      </div>

      <div className="buttonWrapper">

        <button className="btn favoris"> 
          mes favoris <i className="icon-arrow_icon"></i>
        </button>

        {/*  @todo:alice calenddrier va devenir une modale */}
        <button className="btn calendar">
          calendrier <i className="icon-calendar"></i>
        </button> 
        
      </div>

    </div>
  );
}
    
export default Top;