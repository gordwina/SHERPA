import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import  './gmap.scss';
import pinMapPath from '../asset/pinMap.png'


export class Gmap extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
    
      stadium: [{lat: 48.8473435, lng: 2.2487285},  
        {latitude: 48.9244592, longitude: 2.3601645, name: 'Stade de France'},
        {latitude: 48.8556475, longitude: 2.2986304, name: 'Champ-de-Mars'}, 
        {latitude: 48.8697988, longitude: 2.3056264, name: 'Champs-Elysées'}, 
        {latitude: 48.858583,  longitude: 2.2940059, name: 'Tour Eiffel '},
        {latitude: 48.8661126, longitude: 2.3102604, name: 'Grand Palais'}, 
        {latitude: 48.8558529, longitude: 2.3103745, name: 'Esplanade des Invalides'}, 
        {latitude: 48.8414391, longitude: 2.2508547, name: 'Parc des Princes'}, 
        {latitude: 48.8329819, longitude: 2.2848318, name: 'Porte de Versailles'},
        {latitude: 48.8433235, longitude: 2.250742,  name: 'Stade Jean Bouin'}, 
        {latitude: 48.8433305, longitude: 2.2507312, name: 'Roland-Garros'},
        {latitude: 48.8385414, longitude: 2.3763955, name: 'Accor Hotels Arena'}, 
        {latitude: 48.8942081, longitude: 2.3910398, name: 'Zénith'}, 
        {latitude: 48.9292806, longitude: 2.245583,  name: 'Stade Yves-du-Manoir'}, 
        {latitude: 48.857275,  longitude: 2.6188995, name: 'Base nautique'}, 
        {latitude: 48.7880274, longitude: 2.0326554, name: 'Vélodrome national'}, 
        {latitude: 48.8085377, longitude: 2.1130433, name: 'Château de Versailles' }, 
        {latitude: 48.8952826, longitude: 2.2272789, name: 'Arena 92' }, 
        {latitude: 48.9106561, longitude: 2.3751778, name: 'Centre aquatique aubervilliers' }, 
        {latitude: 48.7505395, longitude: 2.0757523, name: 'Golf National st quentin' }, 
        {latitude: 48.9378507, longitude: 2.4199348, name: 'Le Bourget' }, 
        {latitude: 48.8914683, longitude: 2.3567057, name: 'Arena 2 la chapelle' }, 
        {latitude: 48.7883842, longitude: 1.9329509, name: 'Coline d’Élancourt' }, 
        {latitude: 48.8350956, longitude: 2.2535702, name: 'Stade Pierre de Coubertin' }, 
        {latitude: 48.9393389, longitude: 2.38176,   name: 'Piscine de Marville' },
      ],
      police: [
        {},
        {}
      ] 
    }  
  }
  
  displayMarkersStadium = () => {
    return this.state.stadium.map((stadium) => {
      return <Marker
      id={stadium.name}
      key={stadium}
      position={{ 
        lat: stadium.latitude,
        lng: stadium.longitude
      }}

      icon={{
        url: pinMapPath, 
      }}
     >

      <InfoWindow
      position={{
        lat: stadium.latitude,
        lng: stadium.longitude
      }}
      >
        <div className="infoWindow">
          <h1>yoyo</h1>
        </div>
      </InfoWindow>

      </Marker>
    })
  } 
  
  


  
  
  render() {
    return (
      
      <Map
      className= "gmapContainer"
      google={this.props.google}
      zoom={12}
      style={mapStyles}
      initialCenter={{ lat: 48.8583701, lng: 2.2944813}} 
      >
      {this.displayMarkersStadium()}
      
      </Map>
      
      
      );
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyC9t3-AiZzfZ7zOWgAChLf7-3jQ8PPPTgY'
  })(Gmap);
  
  
  const mapStyles = {
    width: '100%',
    height: '100%',
    //marginTop: '-60px',
    zIndex: '-5',
    overflow: 'hidden',
    
  };
