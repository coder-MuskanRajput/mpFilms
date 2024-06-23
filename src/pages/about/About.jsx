import React from 'react'
import Banner from '../../layouts/common/Banner'
import AboutMe from './AboutMe'
import AboutDescription from './AboutDescription'
import DudeAnimation from './DudeAnimation'
import MeetMyTeam from './MeetMyTeam'

const About = () => {
  return (
    <div>
      {/* <Banner/> */}
      <DudeAnimation/>
      <AboutMe/>
      <AboutDescription/>
      <MeetMyTeam/>
    </div>
  )
}

export default About