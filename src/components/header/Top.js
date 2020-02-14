import React from 'react';
import {Redirect} from 'react-router-dom';
import './Top.scss';
import Favoris from '../favoris/Favoris';



class Top extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      Redirect : false,

    } 
  }

  setRedirect = () => {
    this.setState({
      redirect :true
    })
  }
  
  renderRedirect = ()  => {
    if (this.state.redirect){
      return <Redirect to='/login'/>
    }
  }


  render (){
      return (
        <div className="Head">

          <div className="brandingWrapper">
            <div className="logo"></div>
            
            <div className="brand">
              sherpa
            </div>
          </div>

          <div className="buttonWrapper">

          <Favoris></Favoris>

            {/*  @todo:alice calenddrier va devenir une modale */}
            <button className="btn calendar" onClick= {this.setRedirect}>
              Deconnexion {this.renderRedirect()}
            </button> 
            
          </div>

        </div>
    );
  }
}
export default Top;