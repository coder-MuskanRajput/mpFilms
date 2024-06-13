import React from 'react'
import N_Hero from './pages/N_Hero'
import Anim2 from '../home/Anime2'
import { NMOuseTrails } from './NewMouseTrail'
import NewWhyChooseUs from './pages/NewWhyChooseUs'
import NewFeedback from './pages/NewFeedback'
import { SwipeCarousel } from './pages/ImageCrasosal'
import Slider from '../home/Slider'

const NewHomePage = ({slides}) => {
    
  return (
    <div>
        
        <N_Hero/>
        <Anim2 slides={slides}/> 
        {/* About Section */}
        <NMOuseTrails/>
        {/* About Section */}
        <div className='bg-[#D8BD76]'>

        <SwipeCarousel/>
        </div>
        <NewWhyChooseUs/>
        <Slider/>
    </div>
  )
}

export default NewHomePage