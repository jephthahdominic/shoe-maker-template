import React from 'react'
import { speech } from '../assets/videos'

const Gallery = () => {
  return (
    <section id='gallery' className='w-full max-container flex max-xl:flex-col gap-10 justify-between items-center'  data-aos="zoom-in" data-aos-duration = "500" data-aos-once = "false" data-aos-easing = "ease-in-out">
        <div className='text-left'>
            <h2 className='font-montserrat text-4xl max-sm:text-md text-white text-bold'>Design for the <span className='max-sm:block inline'>Perfect Story</span></h2>
            <p className='text-lg text-white-400 font-montserrat leading-normal mt-2'>In a journey of uncertainties, great people don't quit</p>
        </div>
        <div className='xl:text-center'>
           <video
                src={speech}
                width={'100%'}
                controls
                aria-hidden
                className='object-contain rounded-md'
            /> 
            <p className='font-roboto text-white-400 text-xl mt-3'>A message from our C.E.O and chief designer- Lorem Ipson</p>
        </div>
        
    </section>
  )
}

export default Gallery