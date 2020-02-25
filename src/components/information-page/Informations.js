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

// assets
import capacity from "../../asset/capacity.svg";
import stade from "../../asset/stade.png";
import house from '../../asset/house.svg'
class Informations extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="InformationContainer">
        <SearchLeft></SearchLeft>
        <div className="information__left">
          <div className="information__left--top">
            <h2>STADE DE FRANCE </h2>
            <div className="information__inner--top">
              <div className="information__photo">
                <img src={stade} alt="stade" />
              </div>
              <div className="informations__content">
                <div className="capacity-picto">
                  <img src={capacity} alt="capacity" />
                </div>
                <div className="capacity-content">
                  <p class="bold">81 000</p>
                  <p>Capacité totale</p>
                </div>
                <div className="affluence-picto">
                 <div className="affluence">
                  3
                 </div>
                </div>
                <div className="affluence-content">
                  <p class="bold">Sécur-score</p>
                  <p>Entre 10k et 20k </p>
                </div>
              </div>
            </div>
            <div className="information__inner--bottom">
              <h2>Zone de repli à proximité</h2>
              <div className="zones">
                <div className="zones-item">
                  <div className="item-name"><i className="icon-zone_repli"></i>École Marcelin Berthelot</div>
                  <div className="item-time">2 min </div>
                  <div className="item-capacity">capacité de 600 personnes</div>
                </div>
                <div className="zones-item">
                  <div className="item-name"><i className="icon-safety-fire-extinguisher-2"></i>École Marcelin Berthelot</div>
                  <div className="item-time">2 min </div>
                  <div className="item-capacity">capacité de 600 personnes</div>
                </div>
                <div className="zones-item">
                  <div className="item-name"><i className="icon-Group-5"></i>École Marcelin Berthelot</div>
                  <div className="item-time">2 min </div>
                  <div className="item-capacity">capacité de 600 personnes</div>
                </div>

              </div>
            </div>
          </div>

          <div className="information__left--bottom">
            <h2>Affluence globale sur la période des JO</h2>
            <div class="chart">
              <ResponsiveBar
                data={globalData}
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
              />
            </div>
          </div>
        </div>
        <div className="information__right">
          <div className="information__right--top"></div>
          <div className="information__right--bottom">
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
    );
  }
}

export default Informations;
