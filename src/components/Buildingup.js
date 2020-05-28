import React from 'react';
import {useState} from 'react';


function Buildingup(){ 
  const [isRed, setRed]=useState(false);
  const [count,setcount]=useState(0);
   
    const up =() =>{
        setcount(count + 1);
        setRed(!isRed); 
    };

    return(
      <div className="Buildingup">
        {/* switch class in the red class example below */}
        <h1 className={isRed ? "red": ""}>change my color</h1>    
        <button onClick={up}>up</button>
        <h1>{count}</h1>
      </div>  
    );
}

export default Buildingup;




