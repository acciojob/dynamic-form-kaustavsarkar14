import {useState} from 'react'
import React from "react";
import './../styles/App.css';

const App = () => {
  const [count, setCount] = useState(0);
  return <div>
  {
  count==0?
  <p>No fields in the form</p>
  :
    Array(count).fill(0).map((el,i)=><div key={i} >
    <input/>
    <button classname="delete" onClick={()=>setCount(count-1)} >Delete</button>
    </div>
    )
  }
  <button onClick={()=>setCount(count+1)} >Add Field</button>
  </div>
}

export default App
