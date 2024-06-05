import React from 'react'
import Banner from '../../layouts/common/Banner'
import AboutMpFilms from './AboutMpFilms'
import WhyChooseUs from './WhyChooseUs'
import MeetMyTeam from '../../layouts/common/MeetMyTeam'
import CoreTeam from './CoreTeam'

const About = () => {
  return (
    <div>
      <Banner/>
      <AboutMpFilms/>
      <WhyChooseUs/>
      <MeetMyTeam/>
      <CoreTeam/>
    </div>
  )
}

export default About