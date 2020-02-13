import React from 'react';
import './Deepsearch.scss'
import '../../style/colors.scss';
import '../../style/font.scss';
import FileLink from '../File-link/File-link';
import Data from './Data';


class Deepsearch extends React.Component{
 constructor(props){
  super(props);
  this.state = {
    hasSearched : false,
    searching: false,
    searchValue : "",
      searchList : "",
      values: [
          {
            name :"stade de france",
              capacity: 300,
              date: "jeudi soir"
          },
          {
              name :"palais royal",
              capacity: 300,
              date: "mardi matin"
          },
          {
              name :"teddy",
              capacity: 300,
              date: "jeudi nuit"
          },
      ],
      poets: [],
      filteredPoets: []

  };

  this.onSearching = this.onSearching.bind(this);
  this.onRemoving = this.onRemoving.bind(this)
 }


handleClick = (e) => {
     this.setState({searchList : e.target.value});
    console.log(this.state.searchList)
};

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

    pushInput(e) {
     let value = e.target.value.toLowerCase();
     this.setState({searching: true});
     this.setState({searchValue: value});
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
            <input id="search" placeholder="Rechercher" type="text" maxLength="30" onKeyUp={(e) => this.pushInput(e)}></input>
            <button onClick={this.onRemoving}><i className="icon-remove_icon"></i></button>
          </div>

          <div className="SearchBar">
            <div className="DateSearch">
              <p>20/25/2024 <i className="icon-arrow_icon"></i></p> 
            </div>

            <div className="LocationSearch">
              <button className="locationButton"> 
                location
               <i className="icon-arrow_icon"></i>
              </button>

              <div className="locationContent">
                  {
                      Data.location.map((item) =>
                          <a href="">{item.name}</a>
                      )
                  }
              </div> 
            </div>

            <div className="DeploydSearch">
              <i className="icon-magn_icon"></i>
            </div>
          </div>
          <hr/>
          <div className="FileLinkWrapper" onClick={this.fileGenerator}>
              {
                  this.state.values.map((val)=>{
                      if ( val.name.indexOf(this.state.searchValue) === 0) {
                          return <FileLink location={val.name} capacity={val.capacity} date={val.date}/>
                      }
                  })
              }
          </div>
        </div>
        
        : null}

      </div>
   
    );

  }  
}
export default Deepsearch;