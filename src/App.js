import React from 'react';
import './style/colors.scss';
import './style/font.scss';
import './App.scss';
import Top from './components/Top'
import Deepsearch  from './components/Deepsearch'
import Gmap from './components/gmap'

function App() {

/*   onclick */
  return (   
 <div className='App'> 
  
  <Top></Top>
  <Deepsearch></Deepsearch>
  <Gmap></Gmap>
  
  


  </div> 


 
  );
}

export default App;
