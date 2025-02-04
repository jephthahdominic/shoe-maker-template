import React from 'react'
import { services } from '../constants'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  return (
    <section id='services' className='max-container'>
      <h2 className='title-text text-center text-bold text-white'>Our Core Values</h2>
      <div className='w-full flex gap-4 mt-8 max-lg:flex-wrap max-lg:justify-center overflow-auto'>
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