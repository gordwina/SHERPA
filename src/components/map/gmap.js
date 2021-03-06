import React from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import "./gmap.scss";
import axios from 'axios';
import PoliceStations from "../../asset/Imgmap/PoliceStations.svg";
import FireStation from "../../asset/Imgmap/FireStation.svg";
import Emergency from "../../asset/Imgmap/Emergency.svg";
import Olympics2024 from "../../asset/Imgmap/Olympics2024.svg";
import SafetyZone from "../../asset/Imgmap/SafetyZone.svg";
export class Gmap extends React.Component {
  constructor(props) {
    super(props);

    this.mapRef = React.createRef();

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      idMarker: {},
      stadium: [],
      police: [],
      hopital: [],
      pompier: [],
      replis: []
    };
  }


 /*  link between back and front  */


  componentDidMount = () => {
    const url = {
      'hopital': 'http://vps791823.ovh.net/api/hopitauxes',
      'pompier': 'http://vps791823.ovh.net/api/casernes_pompiers',
      'police': 'http://vps791823.ovh.net/api/postes_polices',
      'stadium': 'http://vps791823.ovh.net/api/stades/',
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


  /*====>> TO KEEP - marker click */
  onMarkerClick = (props, marker, e) => {
    console.log(props.type);
    if (props.type == 'Stades') {
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
    }
  }
 
  displayMarker = (items, icon) => {
    return items.map((items, index) => {
      let capacity = new Intl.NumberFormat('fr-FR', { nu: 'latn' }).format(items.capacite);
      return (
        <Marker
          key={index}
          name={items.nom}
          id={items["@id"]}
          capacite={capacity}
          image={items.imagesStades}
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

  cut = () => {
    let value = this.state.selectedPlace.id;
    console.log(value.substring(0, 16))
  }

  render() {
    return (
      <Map
        className={"gmapContainer " + this.props.usingClass}
        ref={this.mapRef}
        google={this.props.google}
        zoom={this.props.zoom}
        lat={this.props.latitude}
        lng={this.props.longitude}
        initialCenter={{ lat: this.props.lat, lng: this.props.lng }}
        onZoomChanged={this.zoomChangedHandler}
        onResize={this.zoomChangedHandler}
        onClick={this.mapClickedHandler}
      >
        {this.displayMarker(this.state.stadium, Olympics2024)}
        {this.displayMarker(this.state.hopital, Emergency)}
        {this.displayMarker(this.state.pompier, FireStation)}
        {this.displayMarker(this.state.police, PoliceStations)}
        {this.displayMarker(this.state.replis, SafetyZone)}

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          style={{ background: 'red' }}>

          <div style={{ padding: '5px', display: 'flex', flexDirection: 'row' }}>
            <div className="photo_stade">
              {
                this.state.selectedPlace.image ? <img src={`http://vps791823.ovh.net/images/${this.state.selectedPlace.image && this.state.selectedPlace.image.nomImage}`} alt={"Photo-" + this.state.selectedPlace.name} /> :
                  "photo inexistante"
              }
            </div>
            
            <div style={{ marginLeft: '15px' }}>
              <p style={{ fontWeight: '700', textAlign: 'left', marginTop: '20px' }}>{this.state.selectedPlace.name}</p>
              <p style={{ textAlign: 'left', marginTop: '5px', marginBottom: '5px' }}> <i className="icon-people"></i> {this.state.selectedPlace.capacite}</p>
              <a style={{ color: '#237EFF', fontSize: '12px' }} href={"/informations" + this.state.selectedPlace.id} > voir la fiche</a>
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