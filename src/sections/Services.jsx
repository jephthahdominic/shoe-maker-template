import React from 'react'
import { services } from '../constants'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  return (
    <section id='services' className='max-container flex flex-col gap-4' data-aos-once="false" data-aos="fade-right" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="50">
      <h2 className='font-montserrat text-4xl max-sm:text-md text-center text-bold text-white'>Our Core Values</h2>
      <p className='text-xl max-sm:text-sm font-roboto text-white-400 text-center'>We are committed to adding value to the world</p>
      <div className='flex items-center justify-center xl:gap-9 gap-4 max-xl:flex-col flex-wrap'>
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