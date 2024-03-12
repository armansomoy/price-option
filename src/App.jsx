import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import PriceOption from './components/PriceOption/PriceOption'

function App() {

  return (
    <>
    <Header></Header>
     <h2 className='text-6xl py-7 font-bold text-blue-600'>Price Option</h2>
     <Navbar></Navbar>
     <PriceOption></PriceOption>
     
    </>
  )
}

export default App