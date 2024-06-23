import React, { useEffect, useState } from 'react'
// import Anim2 from './layouts/Anime2'
import Nav from './layouts/navbar/Nav'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'
import Services from './pages/services/Services'
import Projects from './pages/projects/Projects'
import About from './pages/about/About'
import Footer from './layouts/common/Footer'
import bgImg1 from "./assets/Sajish.jpeg"
import bgimg2 from "./assets/Online24.jpeg"
import bgimg3 from "./assets/LifeNavrangi.jpeg"

const App = () => {
  
const slides = [
  {
      headlineFirstLine: "Saajish ",
      headlineSecondLine: "the Conspiracy",
      sublineFirstLine: "This is...",
      sublineSecondLine: "an example",
      bgImg: bgImg1,
      // rectImg: "https://orchaa.wordpress.com/wp-content/uploads/2013/05/dokra1.jpg"
  },
  {
      headlineFirstLine: "Online",
      headlineSecondLine: "24x7",
      sublineFirstLine: "This is...",
      sublineSecondLine: "an another example",
      bgImg: bgimg2,
      // rectImg: "https://i.pinimg.com/550x/a9/b7/a1/a9b7a1b48104114cd42c82ee8474f603.jpg"
  },
  {
      headlineFirstLine: "Life",
      headlineSecondLine: "Navrangi",
      sublineFirstLine: "Min is...",
      sublineSecondLine: "Explore the world",
      bgImg: bgimg3,

      // rectImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4pY-XbT8bTCDmnn-DCkNtNZrda7FMiOVtSw&s"
  },
  // Add more slides as needed
];

const location = useLocation();
const navigate = useNavigate();

useEffect(() => {
  window.scrollTo(0,0)
}, [location.pathname])

const [scrollY, setScrollY] = useState(0);

  // Update scrollY state on scroll
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  // Add event listener when component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className='w-full overflow-x-hidden'>
      <div className={`${scrollY > 5 ? 'fixed':'sticky'} w-full top-0 left-0 z-[999]`}>
      <Nav/>
      </div>
      
      {/* <NMOuseTrails slides={slides}  /> */}
      <Routes>
        <Route path='/' element={<Home slides={slides} />}/>
        <Route path='/mpFilms/' element={<Home slides={slides} />}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/about' element={<About/>}/>

        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App