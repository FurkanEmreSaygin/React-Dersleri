import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // JavaScript codlarında normalde string a = 'Anani ' gibi tanımlama yaparken
  // React'te state kullanırken useState hook'u ile tanımlama yaparız.
  // useState hook'u bize bir state ve bu state'i güncellemek için bir fonksiyon döner.
  // Örneğin: const [state, setState] = useState(initialValue)
  
  const [firstName, setFirstName] = useState('Furkan')
  const [lastName, setLastName] = useState('Saygın ')


  const handleClick = () => {
    setLastName('Saygın !!!!')
    console.log('Button clicked!')
  }

  const [names , setNames] = useState(['Furkan', 'Emre', 'Ahmet', "Selçuk"])
  const [userInfo, setUserInfo] = useState({ username : 'furkan', age: 25 })
  
  console.log(names)

  
  
  return (
    <>
      {firstName} {lastName}

      <div><button onClick={()=>{setFirstName("Furkan Emre")}}>Click Me</button> </div>

      <div><button onClick={handleClick} >Click Me</button></div>

      {names.map((name, index) => (
        <div key={index}>{name}</div>
      ))}
      <div>{userInfo.username} - Age: {userInfo.age}</div>
    </>
  )
}

export default App
