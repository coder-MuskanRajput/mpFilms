import React from 'react'
import Anim2 from './Anime2'
import HeroPage from './HeroPage'

const Home = ({slides}) => {
  return (
    <>
    <HeroPage/>
      <Anim2 slides={slides}/>  
    </>
  )
}

export default Home