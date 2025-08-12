import { useState } from 'react'
import './App.css'

function App() {
  const [Number1, setNumber1] = useState(0)
  const [Number2, setNumber2] = useState(0)
  const [Ortalama, setOrtalama] = useState(0)
  function OrtalamaBul() {
    const ort = (Number1 + Number2) / 2;
    console.log(ort);
    return setOrtalama(ort);
  }

  return (
    <>
      <div>
        <h1>Ortalama Bulma</h1>
        <input type='number' value={Number1} onChange={(e)=> setNumber1(Number(e.target.value))}></input>
      </div>
      <div>
        <input type='number' value={Number2} onChange={(e)=> setNumber2(Number(e.target.value))}></input>
      </div>
      <div>
        <button onClick={OrtalamaBul}>Ortalama: {Ortalama}</button>
      </div>
    </>
  )
}

export default App
