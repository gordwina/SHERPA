import React from 'react';
import './Deepsearch.scss'
import FileLink from '../file-link/File-link';



class Deepsearch extends React.Component{
 constructor(props){
    super(props);
    this.state = {
      hasSearched : false
    }

    this.onSearching = this.onSearching.bind(this)
    this.onRemoving = this.onRemoving.bind(this)
 }

 fileGenerator(){
   let array = [];
   for ( let i =0 ; i <30; i++){
     array.push(<FileLink/>)
   }
   return array
 }

 onSearching(){
   this.setState({ 
    hasSearched : true

   })
 }

 onRemoving(){
   this.setState({
     hasSearched : false
   })
 }

  render() {
    return ( 
      <div className="DeepSearch">
       <button className="SearchButton" onClick={this.onSearching} > 
       {/* <button className="SearchButton" onClick={() => this.setState({ hasSearched: true })} >  */}
         <i className="icon-magn_icon"></i> 
         Rechercher 
       </button>

        {this.state.hasSearched === true ?  

        <div className="DeepSearchContainer">
          <div className="SearchHelp">
            <i className="icon-magn_icon"></i>
            <input placeholder="Rechercher" type="text" maxlength="30"></input>
            <button onClick={this.onRemoving}><i className="icon-remove_icon"></i></button>
          </div>

          <div className="SearchBar">
            <div className="DateSearch">
              <p>20/25/2024 <i className="icon-arrow_icon"></i></p> 
            </div>

           {/*  <div className="LocationSearch">
              <button className="locationButton"> 
                location 
               <i className="icon-arrow_icon"></i>
              </button>

              <div className="locationContent">
                <a href="https://www.facebook.com/">  Stade de France </a>
                <a href="#"> Grand Palais</a>
                <a href="#"> Bercy Arena </a>
                <a href="#"> La Vilette </a>
                <a href="#"> Roland-Garros </a>
                <a href="#"> Stade Yves du Manoir-Colombes </a>
                <a href="#"> Champ-de-Mars </a>
                <a href="#"> Parc des Princes</a>
                <a href="#"> Stade Yves-du-Manoir</a>              
              </div> 
            </div> */}

            <div className="DeploydSearch">
              <i className="icon-magn_icon"></i>
            </div>
          </div>
          <hr/>
          <div className="FileLinkWrapper">
          {this.fileGenerator()} 
          </div>
        </div>
        
        : null}

      </div>
   
    );

  }  
}
export default Deepsearch;