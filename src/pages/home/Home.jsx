import React from 'react'
import Anim2 from './Anime2'
import HeroPage from './HeroPage'
import Feedback from './Feedback'
import AboutMe from './AboutMe'
import AboutMpFilms from '../about/AboutMpFilms'
import WhyChooseUs from '../about/WhyChooseUs'
import DudeAnimation from './DudeAnimation'
// import MeetMyTeam from '../../layouts/common/MeetMyTeam'

const Home = ({slides}) => {
  return (
    <>
    {/* <HeroPage/> */}
    {/* <AboutMe/> */}
    <DudeAnimation/>
      <Anim2 slides={slides}/> 
      <AboutMpFilms/>
      <WhyChooseUs/>

      {/* <MeetMyTeam/>  */}
      <Feedback/>
    </>
  )
}

export default Home