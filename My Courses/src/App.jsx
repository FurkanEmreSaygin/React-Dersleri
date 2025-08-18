import { useState } from 'react'
import './App.css'
import Navbar from './Components/navbar'
import {data} from './Data/data.jsx'
import Course from './Components/course'

function App() {

  return (
    <>
      <Navbar></Navbar>
      {data?.map((data) => (
        <Course course={data} key={data.id}/>
      ))
      }
    </>
  )
}

export default App
