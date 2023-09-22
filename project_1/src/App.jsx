import { useState } from 'react'
import './App.css'
import Button from './Button.jsx'
import New from './New';


function App() {
  const [color,setColor]=useState("green");
  function chengeColor(params) {
    setColor(params);
  }
  //const [count, setCount] = useState(0)

  return (

    <div style={{width:"100vw",height:"100vh",backgroundColor:color}}>
      <New/>

    <div className='flex justify-around fixed bottom-5' style={{height:"40px",width:"100vw"}}>
      <Button color="red" chengeColor={chengeColor}/>
      <Button color="green" chengeColor={chengeColor}/>
      <Button color="blue" chengeColor={chengeColor}/>
      <Button color="aqua" chengeColor={chengeColor}/>
      <Button color="yellow" chengeColor={chengeColor}/>
      <Button color="skyblue" chengeColor={chengeColor}/>
    </div>
    </div>
  )
}

export default App
