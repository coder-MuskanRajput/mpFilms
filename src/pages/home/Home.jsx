import React from 'react'
import N_Hero from './N_Hero'
import Anim2 from './Anime2'
import { NMOuseTrails } from './NewMouseTrail'
import NewWhyChooseUs from './NewWhyChooseUs'
import { SwipeCarousel } from './ImageCrasosal'
import Slider from './Slider'

const Home = ({slides}) => {
    
  return (
    <div>

        {/* Main Hero Page */}

        <N_Hero/>

        {/* Slides */}

        <Anim2 slides={slides}/> 

        {/* About Mp Films Section */}

        <NMOuseTrails/>

         {/* Shooting Images Carousel */}

        <div className='bg-[#D8BD76]'>
        <SwipeCarousel/>
        </div>

        {/* Why Choose Us */}

        <NewWhyChooseUs/>

        {/* Customer Feedback */}

        <Slider/>

    </div>
  )
}

export default Home;