import React from 'react';
import './style/colors.scss';
import './style/font.scss';
import './App.scss';
import Top from './components/Top'


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
