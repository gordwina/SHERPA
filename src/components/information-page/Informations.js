import React from "react";

// CSS
import "./Information.scss";

// nivoJS + config + data
import { ResponsiveBar } from "@nivo/bar";
import { ResponsiveStream } from "@nivo/stream";
import globalData from "../../data/globalData.js";
import specData from "../../data/specData.js";
import globalConfig from "../../data/config/globalConfig.js";
import specConfig from "../../data/config/specConfig.js";

//components
import SearchLeft from "../searching/searchLeft";
import Top from "../header/Top"
// assets
import capacity from "../../asset/capacity.svg";
import Gmap from "../map/gmap";
import axios from "axios";
class Informations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        url: this.props.match.params.id,
        isUpdate : false,
        isUdpateImage: false,
        isUpdateData: false,
        isUpdateValueDate: false,
        longitude: null,
        latitude: null,
        data: [],
        valueDate: null,
        listDates: []
    };
  }
  getSecurScore = (id) => {
    axios.get('http://vps791823.ovh.net/api/stades/' + id)
        .then((response) => {
          let nutriScore = document.getElementById('affluence');
          let tranche = document.getElementById('tranche');
          let capacite = response.data.capacite;
          if(capacite > 0 && capacite < 15000) {
            nutriScore.classList.add('affluence--green');
              nutriScore.innerHTML = "1";
              tranche.innerHTML = "0-15k personnes";
          } else if(capacite > 15000 && capacite <= 40000) {
            nutriScore.classList.add('affluence--orange');
              nutriScore.innerHTML = "2";
              tranche.innerHTML = "15k-40k personnes";

          } else {
            nutriScore.classList.add('affluence--red');
              nutriScore.innerHTML = "3";
              tranche.innerHTML = "> 40k personnes";
          }

        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
  };

  getName = (id) => {
    axios.get('http://vps791823.ovh.net/api/stades/' + id)
        .then((response) => {
          let responses = response.data;
          document.getElementById('name').innerHTML = responses.nom

        })
        .catch(function (error) {
          console.log(error);
        })
  };

  getCapacity = (id) => {
    axios.get('http://vps791823.ovh.net/api/stades/' + id)
        .then((response) => {
          let responses = response.data;
          let item = document.getElementById('capacity');
          let capacity = new Intl.NumberFormat('fr-FR', {  nu:'latn'  }).format(responses.capacite);
          item.innerHTML = capacity ;


        })
        .catch((error) => {
          console.log(error);
        })
  };

  getImage = (id) => {
    axios.get('http://vps791823.ovh.net/api/stades/' + id)
    .then((response) => {
      this.setState({
        image: response.data.imagesStades.nomImage,
        isUpdateImage: true
      });
    },
    (error) => {
      this.setState({
        error
      });
    })
    .catch((error) => {
      console.log(error);
    })
  };

  getCoordonnees = (id) => {
    axios.get('http://vps791823.ovh.net/api/stades/' + id)
    .then((response) => {
      this.setState({
        isUpdate : true,
        longitude: response.data.longitude,
        latitude: response.data.latitude
      });
    },
    (error) => {
      this.setState({
        error
      });
    }
    ) .catch((error) => {
      console.log(error);
    })
  };


  getDates =  () => {
    axios.get('http://vps791823.ovh.net/api/dates/')
    .then((response) => {
      for (let i = 0; i < 17; i++) {
        this.setState({
          isUpdateValueDate : true,
        });
        let date = response.data["hydra:member"][i].date;
        this.state.listDates.push(date.substr(0, 10))
      }
      
      console.log(this.state.listDates);
    },
    (error) => {
      this.setState({
        error
      });
    }
    ) .catch((error) => {
      console.log(error);
    })
  };

  getSecours = (id, item) => {
    axios.get('http://vps791823.ovh.net/api/stades/' + id)
    .then((response) => {
      let responses = response.data;
      document.getElementById(item).innerHTML += responses[`${item}`].nom
      
    })
    .catch(function (error) {
      console.log(error);
    })
  };

  getCapacityZone = (id) => {
    axios.get('http://vps791823.ovh.net/api/stades/' + id)
    .then((response) => {
      let responses = response.data;
      document.getElementById("capaciteReplis").innerHTML += responses.replis.capacite + " personnes"
      
    })
    .catch(function (error) {
      console.log(error);
    })
  };


  getTotalAffluence = async (id) => {
    for (let i = 0; i < 17; i++) {
      let req = 'http://vps791823.ovh.net/api/epreuves?idStade=' + id + "&idDate.date=" + this.state.listDates[i];
      await axios.get(req)
      .then((response) => {
        let value = response.data['hydra:member'][0].maxDayAffluence;
        this.state.data.push(
          {
            "jours": i + 1,
            [`Jour ${i + 1}`] : value
          }
          );
      }
      )
      .catch((error) => {
        //console.log(error);
        this.state.data.push(
          {
            "jours": i + 1,
            [`Jour ${i + 1}`] : 0
          }
          );
        this.setState({isUpdateData: true})
      })
    }
  }

  componentDidMount() {
    let url = this.state.url;
    this.getCapacity(url);
    this.getName(url);
    this.getSecurScore(url);
    this.getCoordonnees(url);
    this.getImage(url);
    this.getDates(url);
    this.getTotalAffluence(url);
    this.getSecours(url, "hopitaux");
    this.getSecours(url, "polices");
    this.getSecours(url, "pompiers");
    this.getSecours(url, "replis");
    this.getTime();
    this.getCapacityZone(url);
  }

  getTime = () => {
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }
     
    let time = document.querySelectorAll('#time');
    for (let i = 0; i < time.length ; i++) {
      let int = getRandomInt(1, 10);
      time[i].innerHTML += int + " min";
    } 
  }

    render() {
    return (
      <div className="InformationContainer">
        <Top></Top>
       
        <div className="information__left">
        
          <SearchLeft></SearchLeft>
          <div className= "trytry">
            <div className="information__left--top">
              <h2 id={"name"}></h2>
              <div className="information__inner--top">
                <div className="information__photo">
                    {
                        this.state.isUpdateImage === true ? (<img src={"http://vps791823.ovh.net/images/" + this.state.image} alt="stade" />) : (<div class={"loading"}>
                            <div className="lds-ripple">
                                <div></div>
                                <div></div>
                            </div></div>)
                    }
                </div>
                <div className="informations__content">
                  <div className="capacity-picto">
                    <img src={capacity} alt="capacity" />
                  </div>
                  <div className="capacity-content">
                    <p id="capacity" class="bold"></p>
                    <p>Capacité totale</p>
                  </div>
                  <div className="affluence-picto">
                  <div className="affluence" id={"affluence"}>
                  </div>
                  </div>
                  <div className="affluence-content">
                    <p class="bold">Sécur-score</p>
                    <p id={"tranche"}></p>
                  </div>
                </div>
              </div>

              <div className="information__inner--bottom">
                <h3>Secour à proximité </h3>
                <div className="zones">
                  <div className="zones-item">
                    <div className="item-name" id={"replis"}><i className="icon-repli"></i></div>
                    <div className="item-time" id={"time"}><i className="icon-walking"/> </div>
                    <div className="item-capacity" id={"capaciteReplis"}><i className="icon-people"/></div>
                  </div>
                  <div className="zones-item">
                    <div className="item-name" id={"polices"}><i className="icon-polic"></i></div>
                    <div className="item-time" id={"time"}><i className="icon-walking"/></div>
                   
                  </div>
                  <div className="zones-item">
                    <div className="item-name" id={"pompiers"}><i className="icon-pompier"></i></div>
                    <div className="item-time" id={"time"}><i className="icon-walking"/></div>
                  </div>
                  <div className="zones-item">
                    <div className="item-name" id={"hopitaux"}><i className="icon-hopital"></i></div>
                    <div className="item-time" id={"time"}><i className="icon-walking"/></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="information__left--bottom">
              <h3>Affluence globale sur la période des JO</h3>
              <div class="chart">
                  { this.state.isUpdateData === true ? (
                      <ResponsiveBar
                          data={this.state.data}
                          keys={globalConfig.keys}
                          indexBy="jours"
                          margin={globalConfig.margin}
                          padding={0.3}
                          colors={{ scheme: "blues" }}
                          colorBy="id"
                          defs={globalConfig.defs}
                          fill={globalConfig.fill}
                          borderColor="inherit:darker(1.6)"
                          axisTop={null}
                          axisRight={null}
                          axisBottom={globalConfig.axisBottom}
                          axisLeft={globalConfig.axisLeft}
                          labelSkipWidth={12}
                          labelSkipHeight={12}
                          labelTextColor="inherit:darker(1.6)"
                          animate={true}
                          motionStiffness={90}
                          motionDamping={15}
                          enableLabel={false}
                      />
                  ) : null }
              </div>
            </div>
        </div>
        </div>
        {/* box commence ici  */}
        <div className="information__right">
          <div className="information__right--top">
              {
                   this.state.isUpdate === true ? ( <Gmap usingClass={"googleSmall"} zoom={14} lat={this.state.latitude} lng={this.state.longitude}> </Gmap>) : null
              }
          </div>
          
          <div className="information__right--bottom">
            <h3>Affluence globale sur la période des JO</h3>
           <div className="tito">
            <ResponsiveStream
              data={specData}
              keys={specConfig.keys}
              margin={specConfig.margin}
              axisTop={null}
              axisRight={null}
              axisBottom={specConfig.axisBottom}
              axisLeft={specConfig.axisLeft}
              offsetType={specConfig.offsetType}
              colors={specConfig.colors}
              fillOpacity={specConfig.fillOpacity}
              borderColor={specConfig.borderColor}
              defs={specConfig.defs}
              dotSize={specConfig.dotSize}
              dotColor={specConfig.dotColor}
              dotBorderWidth={specConfig.botBorderWidth}
              dotBorderColor={specConfig.dotBorderColor}
              animate={specConfig.animate}
              motionStiffness={specConfig.motionStiffness}
              motionDamping={specConfig.motionDamping}
              legends={specConfig.legends}
            />
           </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Informations;
