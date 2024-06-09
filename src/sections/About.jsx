import React from 'react'
import { standAloneShoe1 } from '../assets/images'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

const About = () => {
  return (
    <section id='about' className='w-full max-container flex flex-row-reverse gap-10 justify-beween items-center max-xl:flex-col'>
      <div className='flex flex-col'>
        <h2 className='text-4xl max-sm:text-md'>About <span className='text-amber-900'>Lorem Footwears</span></h2>
        <p className='mt-2 info-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit inventore voluptate praesentium natus eos consequuntur. 
        Asperiores quae facere ea ratione possimus animi in fugiat consequuntur aperiam? Sit debitis illum nihil.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit inventore voluptate praesentium natus eos consequuntur. 
        Asperiores quae facere ea ratione possimus animi in fugiat consequuntur aperiam? Sit debitis illum nihil.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit inventore voluptate praesentium natus eos consequuntur. 
        Asperiores quae facere ea ratione possimus animi in fugiat consequuntur aperiam? Sit debitis illum nihil.</p>
        <div className='flex items-center gap-4 mt-2'>
          <Button 
            label='Contact us'
            borderColor='border-amber-900'
            backgroundColor='bg-transparent'
            color='text-black'
          />
        </div>
      </div>
      <img 
        src={standAloneShoe1}
        alt="a pair of brown male shoes" 
        width={610}
      />
    </section>
  )
}

export default About