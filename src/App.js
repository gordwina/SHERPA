import React from 'react';
import './style/colors.scss';
import './style/font.scss';
import './App.scss';
import Top from './components/Top/Top'
//import Gmap from './components/gmap'
import Informations from './components/Information/Informations';
import Deepsearch from "./components/Deepsearch/Deepsearch";
import Search from "./components/Search/Search";

function App() {

/*   onclick */
  return (   
 <div className='App'> 
  
  <Top></Top>
   {/* <Informations></Informations> */ }
   <Search></Search>

 {/*  <Deepsearch></Deepsearch>
  <Gmap usingClass={"google"}></Gmap> */}

  </div>
  );
}

export default App;
