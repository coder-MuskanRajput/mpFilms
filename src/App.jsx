import React from 'react'
// import Anim2 from './layouts/Anime2'
import Nav from './layouts/navbar/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'
import Services from './pages/services/Services'
import Projects from './pages/projects/Projects'
import About from './pages/about/About'
import Footer from './layouts/common/Footer'

const App = () => {
  return (
    <div>
      <div className='sticky w-full top-0 left-0 z-[999]'>
      <Nav/>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/about' element={<About/>}/>

        <Route path='/contact' element={<Contact/>}/>


      </Routes>
      <Footer/>
    </div>
  )
}

export default App