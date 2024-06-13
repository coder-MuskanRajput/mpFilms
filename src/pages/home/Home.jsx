import React from 'react'
import Anim2 from './Anime2'
import HeroPage from './HeroPage'
// import Feedback from './Feedback'
import AboutMe from './AboutMe'
import AboutMpFilms from '../about/AboutMpFilms'
import WhyChooseUs from '../about/WhyChooseUs'
import DudeAnimation from './DudeAnimation'
import Slider from './Slider'
import TrailImages from '../anim/ImageTrail'
import HeroPageNew from '../hero/HeroPageNew'
// import MeetMyTeam from '../../layouts/common/MeetMyTeam'

const Home = ({slides}) => {
  return (
    <>
    {/* <HeroPage/> */}
    {/* <AboutMe/> */}
      {/* <TrailImages/> */}
      
    <HeroPageNew/>
    <DudeAnimation/>
      <Anim2 slides={slides}/> 
      <AboutMpFilms/>
      <WhyChooseUs/>

      {/* <MeetMyTeam/>  */}
      <Slider/>
    </>
  )
}

export default Home