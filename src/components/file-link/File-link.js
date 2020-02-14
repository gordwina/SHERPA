import React from 'react';
import {Redirect} from 'react-router-dom';
import './File-link.scss'



class FileLink extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      Redirect : false
    } 
    
  } 
  setRedirect = () => {
    this.setState({ 
      redirect :true
    })
  }

  renderRedirect = ()  => {
    if (this.state.redirect){
      return <Redirect to='/informations' />
    }
 }
  
 
   
  render(){
    return (
    
      <div className="FileLink"  onClick= {this.setRedirect} >

        {this.renderRedirect()}
        <div className="FileLinkImage"></div>

        <div className="FileLinkInformation">
          <p className="FileLinkLocation"> <strong>Stade de france</strong> </p>
          <p className="FileLinkCapacity"><i className="icon-icon_human"></i> Capacité 81 335  </p>
          <p className="FileLinkDistance"><i className="icon-red_Ellipse"></i> Affluence forte </p>
        </div>

        <div className="FileLinkPlus"> 
          <i className="icon-star_icon"></i> 
         {/*  <p className="FileLinkSchedule"> 16h00 / 19h00 </p>  */}
        </div>
      </div>
    );
  }
}
      
  export default FileLink;