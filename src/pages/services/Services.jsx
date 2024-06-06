import React from 'react'
import Banner from '../../layouts/common/Banner'
import MainService from './MainServices';
import ServiceProvide from './ServiceProvide';


const Services = () => {
  return (
    <div> 
      <Banner/>
      <MainService/>
      <ServiceProvide/>
    </div>
  )
}
export default Services;