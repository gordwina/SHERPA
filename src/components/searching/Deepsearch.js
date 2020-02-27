import React from "react";
import "./Deepsearch.scss";
import "../../style/colors.scss";
import "../../style/font.scss";
import "../../style/icon/style.scss";
import FileLink from "../file-link/File-link";
//import Calendar from "../Calendar/Calendar";
import axios from 'axios'

class Deepsearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasSearched: false,
      searching: false,
      searchValue: "",
      searchList: "",
      openCalendar: false,
      values: [],
    };
    this.onSearching = this.onSearching.bind(this);
    this.onRemoving = this.onRemoving.bind(this);
  }


  componentDidMount = () => {
    axios.get('http://vps791823.ovh.net/api/stades')
    .then((response) => {
      this.setState({
        values: response.data["hydra:member"]
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  handleClick = e => {
    this.setState({ searchList: e.target.value.toLowerCase() });
    console.log(this.state.searchList);
  };

  onSearching() {
    this.setState({
      hasSearched: true
    });
  }

  onRemoving() {
    this.setState({
      hasSearched: false
    });
  }

  pushInput(e) {
    let value = e.target.value.toLowerCase();
    this.setState({ searching: true });
    this.setState({ searchValue: value });
  }

  openCalendar = () => {
    this.setState({openCalendar: true})
    console.log('ok');
  };

   




  render() {
    return (
      <div className="DeepSearch">
        <button className="SearchButton" onClick={this.onSearching}>
          {/* <button className="SearchButton" onClick={() => this.setState({ hasSearched: true })} >  */}
          <i className="icon-magn"></i>
          Rechercher un lieu
        </button>
        {this.state.hasSearched === true ? (
          <div className="DeepSearchContainer">
            <div className="SearchHelp">
              <i className="icon-magn"></i>
              <input
                id="search"
                placeholder="Rechercher"
                type="text"
                maxLength="30"
                onKeyUp={e => this.pushInput(e)}
              ></input>
              <button onClick={this.onRemoving}>
                <i className="icon-remove"></i>
              </button>
            </div>

          {/*   <div className="SearchBar">
              <div className="DateSearch">
                <p>
                  20/25/2024 <i className="icon-arrow"></i>
                </p>
              </div> 

              <div className="DeploydSearch">
                <i className="icon-magn"></i>
              </div>
            </div> */}

            <hr />
            <div className="FileLinkWrapper" onClick={this.fileGenerator}>
              {this.state.values.map(val => {
                console.log(val);
                if (val.nom.indexOf(this.state.searchValue) === 0) {
                  console.log(val);
                  let capacity = new Intl.NumberFormat('fr-FR', {  nu:'latn'  }).format(val.capacite);
                  return (
                    <FileLink
                      location={val.nom}
                      nom={val.nom}
                      capacity={capacity} 
                      id={val["@id"]}
                      lat={val.latitude}
                      lng={val.longitude}
                    />
                  );
                }
              })}
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
export default Deepsearch;
