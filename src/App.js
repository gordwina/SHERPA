import React from 'react';
import './style/colors.scss';
import './style/font.scss';
import './App.scss';
import Top from './components/Top'
import Search from './components/Search'
import Deepsearch from './components/Deepsearch'
import Gmap from './components/gmap'
function App() {

/*   onclick */
  return (   
 <div className='App'> 
  
  <Top></Top>

   {/* <Informations></Informations> 
   <Search></Search>*/ }


  <Deepsearch></Deepsearch>
  <Gmap usingClass={"google"}></Gmap> 

  </div>
  );
}

export default App;
