import React from 'react'
import Banner from '../../layouts/common/Banner'
import AboutMpFilms from './AboutMpFilms'
import WhyChooseUs from './WhyChooseUs'
import MeetMyTeam from '../../layouts/common/MeetMyTeam'
// import CoreTeam from './CoreTeam'
import HeroPage from '../home/HeroPage'
import AboutMe from '../home/AboutMe'
import DudeAnimation from '../home/DudeAnimation'

const About = () => {
  return (
    <div>
      <Banner/>
      <DudeAnimation/>
    <HeroPage/>
    <AboutMe/>

      {/* <AboutMpFilms/> */}
      {/* <WhyChooseUs/> */}
      <MeetMyTeam/>
      {/* <CoreTeam/> */}
    </div>
  )
}

export default About