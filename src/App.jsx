import React from 'react'
// import Anim2 from './layouts/Anime2'
import Nav from './layouts/navbar/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <div className='sticky w-full top-0 left-0 z-[999]'>
      <Nav/>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App