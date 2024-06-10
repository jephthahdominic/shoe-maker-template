import React from 'react'
import { services } from '../constants'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  return (
    <section id='services' className='max-container flex flex-col gap-4'>
      <h2 className='font-montserrat text-center text-4xl max-sm:text-md max-xl:text-left text-white text-bold'>What we do</h2>
      <p className='text-center max-xl:text-left text-xl text-white-400 font-montserrat '>We are committed to adding value to the world</p>
      <div className='flex items-center justify-center gap-9 flex-wrap'>
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