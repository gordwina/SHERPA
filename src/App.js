import React from "react";
import "./style/colors.scss";
import "./style/font.scss";
import "./App.scss";
import Top from "./components/header/Top";
import Deepsearch from "./components/searching/Deepsearch";
import Gmap from "./components/map/gmap";
import Calendar from "./components/Calendar/Calendar";
import CrowdKey from "./components/map/crowdKey";
import MapKey from "./components/map/mapKey";

function App() {
  return (
    <div className="App">
      <Top></Top>
      <Deepsearch></Deepsearch>
      <Calendar></Calendar> 
      <MapKey></MapKey> 
      <CrowdKey></CrowdKey> 
     <Gmap zoom={12} lat={"48.8583701"} lng={"2.2944813"}></Gmap>
    </div>
  );
}

export default App;
