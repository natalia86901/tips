import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [advice, setAdvice] = useState("");
  
  useEffect(()=>{
    getResponce();
  }, [])

  const getResponce = async () => {
  const responce = await fetch(`https://bored.api.lewagon.com/api/activity/`);
  const data = await responce.json();
  setAdvice(data.activity)
    }

  return (
      <div className="App">
        <h1>{advice}</h1>
        <button onClick={getResponce}>Click here</button>
      </div>
      
  )
}

export default App
