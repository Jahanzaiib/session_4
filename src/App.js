import React, {useState} from 'react';

import {Message} from './Message.js'
import './App.css';

export default function App() {
  let [count, setcount] = useState(1);
  let [isDay, setDay] = useState(false)
  let [classtime, setclasstime] = useState(true)
  return (
    
    <div className = {`box ${isDay ? 'daylight' : 'box'}`}
    className1 ={`box1 ${classtime ? 'daylight2' : 'box1'}`}
    
    >
      <h1>Have a Good ={isDay ? 'Morning': 'Night'}</h1>
  <h1>Class time ={classtime ? 'yes' : 'No'}</h1>
      <Message counter={count}/>
      <br />
      <button onClick={
          ()=>setcount(++count)
      }>
        Update counter
      </button>
      <button onClick={()=>setDay(!isDay)}> update Day</button>
      <button onClick={()=>setclasstime(!classtime)}> Is it my class time </button>
      
      
    </div>
   
  );
  
}


