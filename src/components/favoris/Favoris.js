import React from 'react';
import './Favoris.scss';
import FileLink from '../file-link/File-link';

class Favoris extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            openFav : false
        }
      
        this.onSearching = this.onSearching.bind(this)
    }

   /*  fileGenerator(){
        let array = [];
        for ( let i =0 ; i <30; i++){
          array.push(<FileLink/>)
        }
        return array
    }
 */

    onSearching(){
        this.setState({ 
         openFav : true
     
        })
    }
     
    
      
    render(){
        return (
            <div className="FavorisContainer">
                <button className="btn favoris" onClick={this.onSearching} > 
                    mes favoris  <i className="icon-arrow_icon"></i>
                </button>

                {this.state.openFav === true ?  

                <div className="FavorisWrapper">
                    <span className="letMusicPlay"></span>
                    {/* {this.fileGenerator()}  */}
                    <FileLink/>
                    <FileLink/>
                    <FileLink/>
                    <FileLink/>
                    <FileLink/>
                </div>

                : null}


            </div>
        );
    }
}

export default Favoris;   