import React from "react";
import "./Favoris.scss";
import FileLink from "../file-link/File-link";
import axios from 'axios'

class Favoris extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openFav: false,
      searchValue: "",
      searchList: "",
      openCalendar: false,
      values: [],
    };

    this.onSearching = this.onSearching.bind(this);
  }

   fileGenerator(){
        let array = [];
        for (let i =0 ; i <3; i++){
          array.push(<FileLink/>)
        }
        return array
    }
       

  onSearching() {
    this.setState(prevState =>({
      openFav: !prevState.openFav
    }));
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

  render() {
    return (
      
      <div className="FavorisContainer">
        <button className="btn favoris" onClick={this.onSearching}>
          Mes favoris <i className="icon-arrow"></i>
        </button> 

        {this.state.openFav === true ? ( 
          <div className="FavorisWrapper">
            {this.state.values.slice(0, 3).map(val => {
                console.log(val);

                if (val.nom.indexOf(this.state.searchValue) === 0) {
                  let capacity = new Intl.NumberFormat('fr-FR', {  nu:'latn'  }).format(val.capacite);
                  return (
                    <FileLink
                      location={val.nom}
                      nom={val.nom}
                      capacity={capacity}
                      id={val["@id"]}
                      lat={val.latitude}
                      lng={val.longitude}
                      crowd={val.epreuves[0].maxDayAffluence}
                    />
                  );
                }
            })}
          </div>
        )  : null} 
      </div>
    );
  }
}

export default Favoris;
