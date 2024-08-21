import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)

  // let counter = 5;

  const addValue = ()=>{
    console.log(counter, "value added")

    // counter=counter+1

    // setCounter(counter +1)

    setCounter(  (prevCounter)=> {
      return prevCounter+1}

    )

    setCounter(  (prevCounter)=> {
      return prevCounter+1}

    )



  }

  const removeValue = ()=>{
    console.log(counter, "value removed")

    setCounter(counter - 1)
  }


  return (
    <>
      <h4> chai aur react</h4>
      <p> Counter value: {counter}</p>

      <br></br>

      <div>
        <button  onClick={addValue} > Add value  {counter}</button>
      </div>
      <br></br>

      <div>
        <button  onClick={removeValue}> Decrease value {counter}</button>
      </div>

    </>
  )
}

export default App
