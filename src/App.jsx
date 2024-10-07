import { useState } from 'react'
import { Outlet } from "react-router-dom"
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className=''>
      <Header />
      <Outlet/>
      <Footer/>
    </div>
   
  )
}

export default App
