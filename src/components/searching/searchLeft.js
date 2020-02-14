import React from 'react'
import {Redirect} from 'react-router-dom';
//CSS
import './searchLeft.scss';
import retour from "../../asset/return.svg";
import affluenceLeft from "../../asset/affluence-left.svg";
/* import search from "../../asset/search.svg"; */

class SearchLeft extends React.Component {
    constructor(props) {
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
          return <Redirect to='/home' />
        }
    }

    render() {
        return(
            <div className="search-bar-left">
                <div className="search-bar-item" onClick= {this.setRedirect}>
                    {this.renderRedirect()}
                    <img src={retour} alt="retour"/>
                </div>
                <div className="search-bar-item search-bar-item-active">
                     <img src={affluenceLeft} alt="affluence-left"/> 
                </div>
               {/*  <div className="search-bar-item">
                    <img src={search} alt="search"/>
                </div> */}

            </div>
        )
    }
}

export default SearchLeft;