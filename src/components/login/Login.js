import React from "react";
import "./Login.scss";
import { withRouter } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     //redirect : false,
      //loginId : '',
      //loginPwd : '',
      chat : '',
      chien : ''
    }   
  }

  
    keyUpHandler = () => {
      this.state.chat = (this.refs.loginId.value.length !== 0 );
      console.log('coucou', this.refs.loginId.value.length !== 0 )  
    }

    keyUpHandlerW = () => {
      this.state.chien = (this.refs.loginPwd.value.length !== 0 );
      console.log('youpi', this.refs.loginPwd.value.length !== 0 )  
    }

     boutonWorking = () =>{
      if (this.state.chat && this.state.chien ) {
        console.log('kzdgkjzdghj')
        this.props.history.push('/home')
        // return   <Redirect to= '/home'/>
      } 
      
    } 

  


  render(){
    console.log(this.props)
    return (
      <div className="loginContainer">

       <div className="mobile">

         <div className="warningMessage">
            <h4> Les contraintes de sécurité, inhérentes aux données de ce site, ne permettent pas sa consultation sur mobile.</h4> 
            <h2>sherpa</h2>
          </div>
          
       </div>

      {/*   LEFT PART  */}
        <div className="loginBrand Container">

          <div className="brandtitlebox">
            <h1>pour que <br/>les J.O<br/>restent<br/>une fête</h1> 
            <span className="top"></span>
            <span className="bottom"></span> 
          </div>
          <div className="brandingTag">
            <h2>sherpa</h2>
            <p>Solution pour la gestion d’événements à haut risque</p>
          </div> 
        </div>
        
          {/*   RIGHT PART  */}
        <div className="loginId Container">
        <div className="loginIdWrapper">
        <h2> Connectez-vous</h2>
        <div className="loginId">
              <p>identifiant</p>
              <input
                ref="loginId"
                placeholder="entrez votre identifiant"
                type="text"
                maxLength="30"
                onKeyUp={this.keyUpHandler} 
              >

              </input>
          </div>

            <div className="loginPwd">
              <p>mot de passe</p>
              <input
                ref="loginPwd"
                className="Pwd"
                placeholder="entrez votre mot de passe "
                type="text"
                maxLength="30"
                onKeyUp={this.keyUpHandlerW}
               
              ></input>
            </div>
              <button className="loginButton"  onClick={this.boutonWorking}>se connecter</button>
        </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Login)
