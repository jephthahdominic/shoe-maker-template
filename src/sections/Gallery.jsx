import React from 'react'
import { speech } from '../assets/videos'

const Gallery = () => {
  return (
    <section id='gallery' className='w-full max-container flex max-xl:flex-col gap-10 justify-between items-center'>
        <div className='max-xl:text-center'>
            <h2 className='font-montserrat text-4xl max-sm:text-md max-xl:text-left text-white text-bold'>Designing the Perfect Story</h2>
            <p className='text-xl text-white-400 font-montserrat leading-normal '>In a journey of uncertainties, great people don't quit</p>
        </div>
        <div className=''>
           <video
                src={speech}
                width={700}
                controls
                aria-hidden
                className='object-contain rounded-md'
            /> 
            <p className='text-center text-white-400 text-xl'>A message from our C.E.O and chief designer- Lorem Ipson</p>
        </div>
        
    </section>
  )
}

export default Gallery