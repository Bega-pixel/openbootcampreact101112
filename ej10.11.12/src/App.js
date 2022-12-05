import React, { useState } from 'react';
import './App.css';

function App() {
  
  const colors = ()=> Math.floor(Math.random() * 256);
  const random = `rgb(${colors()},${colors()},${colors()})`;


  const [ backgroundCol, setBackgroundCol ] = useState(false);

  const onhover = {  
    background: `${random}`
}

/*
const randomColors = ()=> {
  return setBackgroundCol(setInterval(random, 500));
}

const ran = () => {
  let randomnes = {};
while (backgroundCol === true) {
  
  return randomnes= randomnes.push({background: `${random}`})
}
return randomnes = {background: `${random}`}
}
console.log(ran);
*/
const offhover = { 
  background:`${random}`
}

  return (
    <div className="App" >
    {
      <div className={'box'}
            style={backgroundCol ? offhover : onhover }
            onMouseEnter={ ()=> setBackgroundCol(false)}

            onMouseLeave={ ()=> setBackgroundCol(true) }
      ></div>
    }
      
    </div>
  );
}

export default App;
