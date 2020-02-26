import React from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import "./gmap.scss";
import stade from "../../asset/stade.png"
import axios from 'axios';
import PoliceStations from"../../asset/Imgmap/PoliceStations.svg";
import FireStation from"../../asset/Imgmap/FireStation.svg";
import Emergency from "../../asset/Imgmap/Emergency.svg";
import Olympics2024 from "../../asset/Imgmap/Olympics2024.svg"; 
import SafetyZone from "../../asset/Imgmap/SafetyZone.svg"; 
export class Gmap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      //openInfo = false,

      stadium: [
      ],
      police: [
      ],

      hopital: [
      ],

      pompier: [
      ],

      replis: [
      ]
    };
  }

  componentDidMount = () => {
    const url ={
      'hopital': 'http://vps791823.ovh.net/api/hopitauxes',
      'pompier': 'http://vps791823.ovh.net/api/casernes_pompiers',
      'police': 'http://vps791823.ovh.net/api/postes_polices',
      'stadium': 'http://vps791823.ovh.net/api/stades',
      'replis': 'http://vps791823.ovh.net/api/zone_replis'
    };

    this.request('hopital', url.hopital);
    this.request('police', url.police);
    this.request('stadium', url.stadium);
    this.request('pompier', url.pompier);
    this.request('replis', url.replis)
  }

  request = (what, url) => {
    axios.get(url)
    // Result comes here
    .then((response) => {
      let data = response.data["hydra:member"];
      let state = {};
      state[what] = data;
      this.setState(state);
    })
    // Error catched here
    .catch(function (error) {
      console.log(error);
    });
  }
   /*====>> TO KEEP*/ 
 /*  onMarkerClick = (props, marker, e) => {
    console.log(props.type);
    if(props.type == 'Stades') {
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
    }
  } */
  onMarkerClick = (props, marker, e) => {
   {
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
    }
  }
    

  displayMarker = (items, icon) => {
    return items.map((items, index) => {
      return (
        <Marker
          key={index}
          name={items.nom}
          position={{
            lat: items.latitude,
            lng: items.longitude
          }}
          type={items['@type']}
          icon={{
            url: icon
          }}
          onClick={this.onMarkerClick}
          
        >

        </Marker>
      );
    });
  };



  render() {
    return (
      <Map
        className={"gmapContainer " + this.props.usingClass}
        google={this.props.google}
        zoom={this.props.zoom}
        lat={this.props.latitude}
        lng={this.props.longitude}

        //style={mapStyles}
        initialCenter={{ lat: this.props.lat, lng: this.props.lng }}
      >  
        {this.displayMarker(this.state.stadium, Olympics2024)}

       
        {this.displayMarker(this.state.hopital, Emergency)}
        {this.displayMarker(this.state.pompier, FireStation)}
        {this.displayMarker(this.state.police, PoliceStations)} 
        {this.displayMarker(this.state.replis, SafetyZone)}


        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          style= {{background: 'red'}}
          >
            <div  style= {{padding: '5px', display: 'flex', flexDirection: 'row'}}>
              <img src={stade} alt="Logo" />
              <div style= {{marginLeft: '15px'}}>
                <p style= {{fontWeight: '700', textAlign: 'left', marginTop:'20px'}}>{this.state.selectedPlace.name}</p>
                <p style= {{textAlign: 'left', marginTop: '5px', marginBottom: '5px'}}> <i className="icon-people"></i> 290299292929</p>
                <a  style= {{color: '#237EFF',  fontSize:'12px'}} href='/informations'> voir la fiche</a>
              </div>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC9t3-AiZzfZ7zOWgAChLf7-3jQ8PPPTgY"
})(Gmap);