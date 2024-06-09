import React from 'react'
import { services } from '../constants'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  return (
    <section id='services' className='max-container flex flex-col gap-4'>
      <h2 className='font-montserrat text-center text-3xl max-sm:text-md max-xl:text-left text-white text-semibold'>Our Services</h2>
      <p className='text-center max-xl:text-left text-xl text-white-400 font-roboto leading-normal'>We are committed to giving you the value you deserve</p>
      <div className='flex items-center gap-4 flex-wrap max-lg:flex-col'>
        {services.map((service)=>(
            <ServiceCard 
              icon = {service.imgURL}
              service = {service.label}
              subText = {service.subtext}
            />
        ))}
      </div>
    </section>
  )
}

export default Services