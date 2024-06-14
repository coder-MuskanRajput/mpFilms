import React from 'react'
import Banner from '../../layouts/common/Banner'
import MainService from './MainServices';
import ServiceProvide from './ServiceProvide';
import Works from './Works';
import Happy from './Happy';

const Services = () => {
  return (
    <div> 
      <Banner/>
      <MainService/>
      <ServiceProvide/>
      <Happy/>
      <Works/>
    </div>
  )
}
export default Services;