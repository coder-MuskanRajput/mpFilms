import React from 'react'
import Anim2 from './Anime2'
import HeroPage from './HeroPage'
import Feedback from './Feedback'
import AboutMe from './AboutMe'

const Home = ({slides}) => {
  return (
    <>
    <HeroPage/>
    <AboutMe/>
      <Anim2 slides={slides}/>  
      <Feedback/>
    </>
  )
}

export default Home