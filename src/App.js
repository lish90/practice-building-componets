import React from 'react';
import Tweet from './components/Tweet';
import Buildingup from './components/Buildingup';



function App() {

  return(
      <div className='App'> 
    <Tweet name ='sarah' message ='what you saying' likes='200k' />
    <Tweet name = 'tina'  message ='it works'  likes='400k'/>
    <Tweet name = 'rachel' message ='2nd attemp and i get it' likes='1900k'/>
    <Buildingup/>
      </div>
  );
}


export default App;
// import Hello from './sayHello';
// import ProgrammeCard from './fittnessCard'