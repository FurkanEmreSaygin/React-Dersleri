import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Product from './Components/Product'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Product productName="Nike Ayakkabı" fiyat="3200" />
    </div>
  )
}

export default App
