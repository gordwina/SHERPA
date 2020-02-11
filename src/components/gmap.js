import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import  './gmap.scss';
import pinMapPath from '../asset/pinMap.png';
import police_icon from '../asset/police_icon.svg';


export class Gmap extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      
      stadium: [{lat: 48.8473435, lng: 2.2487285, name: ''},  
      {latitude: 48.9244592, longitude: 2.3601645, name: 'Stade de France X'},
      {latitude: 48.8556475, longitude: 2.2986304, name: 'Champ-de-MarsX'}, 
      {latitude: 48.8697988, longitude: 2.3056264, name: 'Champs-Elysées X'}, 
      {latitude: 48.858583,  longitude: 2.2940059, name: 'Tour EiffelX '},
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
      {latitude:48.940873, longitude:2.3540861, name: 'SaintDenis Commissariat central'}, 
      {latitude:48.8616971712805, longitude: 2.311607328162924, name:'Invalide Commissariat central'},
      {latitude:48.86749771375845,longitude:2.311570347812089, name:'Champs Elysée Commissariat central'} , 
      {latitude:48.844289398452176,longitude: 2.381594594866464, name:'Daumesnil Commissariat central' }, 
      {latitude: 48.8923012,longitude:2.2056955, name: 'Nanterre Commissariat central '}, 
      {latitude: 48.8233737,longitude: 2.270274, name:'Issy  Commissariat central'}, 
      {latitude: 48.8352357,longitude: 2.2408951999999998, name:'Boulbi Commissariat central '}, 
      {latitude: 48.9218516, longitude: 2.2586868, name:'Colombes Commissariat '}, 
      {latitude: 48.9281492,longitude: 2.3914016, name:'Le Bourget Commissariat '}, 
      {latitude:48.936181,longitude: 2.357443, name:'SaintDenis Centre Comico'},  
      {latitude: 48.86889239901695,longitude: 2.343963108027798, name:' Paris 2 comico'}, 
      {latitude: 48.86714560393253,longitude:2.331378562177072, name:'PAris 1 comico'},  
      {latitude: 48.86714560393253, longitude: 2.331378562177072, name:' Paris 8 comico Opéra'},
      {latitude:48.8826596,longitude:2.4151066, name:'Les Lilas Comico'},  
      {latitude: 48.88084426100817, longitude:2.365722535844387, name:'paris Canal de Lourq'}, 
      {latitude: 48.880652,longitude:2.355151, name: 'gare du nord'}, 
      {latitude: 48.854501002282504,longitude: 2.269214859531703, name: 'Passy'},  
      {latitude: 48.8382677,longitude: 2.2864206, name:'Paris 15 comico'}, 
      {latitude: 48.8015674,longitude: 2.1166273, name:'Versailles Comico'}, 
      {latitude: 48.7854119,longitude: 2.0478015, name:'Guyancourt Comico'}, 
      {latitude: 48.8755393,longitude: 2.3024263 , name:'Paris 8  comico'}, 
      {latitude: 48.8540096,longitude: 2.5783171, name:'Paris EST marne lavallée Comico '},  
      {latitude:48.9236513,longitude: 2.355672, name:'aubervillier'} ,
      
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
    
    onClick={() => console.log(stadium.name)}
    >
       <InfoWindow show={stadium.name} visible={true} position={{ 
      lat: stadium.latitude,
      lng: stadium.longitude
    }}>
          <div>COUCOU</div>
      </InfoWindow> 
    
    </Marker>
  })
}; 

displayMarkersPolice = () =>{
  return this.state.police.map((police) => {
    return <Marker
    id={police.name}
    key={police}
    position={{ 
      lat: police.latitude,
      lng: police.longitude
    }} 
    icon={{
      url: police_icon, 
    }}
    onClick={() => console.log(police.name)}
    >
    </Marker> 
  })
}




  
  
  render() {
    return (
      
      <Map
      className= {this.props.usingClass}
      google={this.props.google}
      zoom={12}

      initialCenter={{ lat: 48.8583701, lng: 2.2944813}}
      style={this.props.style}
      >
      {this.displayMarkersStadium()}
       {this.displayMarkersPolice()} 
      </Map>


      );
    }

  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC9t3-AiZzfZ7zOWgAChLf7-3jQ8PPPTgY'
})(Gmap);


