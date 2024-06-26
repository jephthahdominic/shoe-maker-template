import React from 'react'
import { elech, standAloneShoe1 } from '../assets/images'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { socialMedia } from '../constants'

const About = () => {
  return (
    <section id='about' className='w-full max-container flex gap-10 justify-beween items-center max-xl:flex-col'>
      <div className='flex flex-col' data-aos="zoom-in" data-aos-duration = "500" data-aos-once = "false" data-aos-easing = "ease-in-out">
        <h2 className='text-4xl max-sm:text-md font-montserrat text-bold'>About <span className='text-amber-900'>Ellech Footwears</span></h2>
        <p className='mt-2 info-text font-roboto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit inventore voluptate praesentium natus eos consequuntur. 
        Asperiores quae facere ea ratione possimus animi in fugiat consequuntur aperiam? Sit debitis illum nihil.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit inventore voluptate praesentium natus eos consequuntur. 
        Asperiores quae facere ea ratione possimus animi in fugiat consequuntur aperiam? Sit debitis illum nihil.</p>
        <div className='flex items-center gap-4 mt-4'>
          <p className='text-2xl'>Contact Us</p>
          <div className='flex gap-4'>
            {socialMedia.map((media)=>(
              <a href="" className='border border-amber-900 rounded-full p-2 bg-white-400'>
                <img
                  src={media.imgURL}
                  alt={media.alt}
                  width={24}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <img 
        src={elech}
        alt="a pair of brown male shoes" 
        width={410}
        height={410}
        className='rounded-lg'
        data-aos="zoom-in" data-aos-duration = "500" data-aos-once = "false" data-aos-easing = "ease-in-out"
      />
    </section>
  )
}

export default About