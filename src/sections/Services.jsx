import React from 'react'
import { services } from '../constants'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  return (
    <section id='services' className='flex flex-col gap-4'>
      <h2 className='text-center text-4xl max-sm:text-md text-white'>Our Services</h2>
      <p className='text-center text-xl text-white-400 font-montserrat leading-normal'>We are committed to giving you the value you deserve</p>
      <div className='flex items-center gap-4 flex-wrap max-xl:flex-col'>
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