import { Option } from "./Option"
import data from "./data"
import { useState, useEffect } from "react"

function App() {
  
const [boolean, setBoolean]= useState(true)

 
    const array = data[Math.floor(Math.random() * 11)]
    
    const opcion2 = array[1]
    const opcion1 = array[0]

    useEffect(() => {
      const array = data[Math.floor(Math.random() * 11)]
    
    const opcion2 = array[1]
    const opcion1 = array[0]
    }, [boolean])
  return (
    <div>
      <h1>Hola mundi</h1>
      <Option opcion={opcion1} onClick={() => setBoolean(!boolean)}></Option>
      <Option opcion={opcion2} onClick={() => setBoolean(!boolean)}></Option>
                
    </div>
  )
}

export default App
