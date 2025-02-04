import React from 'react'
import { elech } from '../assets/images'
import LinkToLogin from '../components/LinkToLogin'

const About = () => {
  return (
    <section id='about' className='w-full max-container flex gap-10 justify-beween items-center max-xl:flex-col'>
      <div className='flex flex-col'>
        <h2 className='max-sm:text-md title-text text-black text-bold'>Ellech: Where Quality Meets<span className='text-amber-900'> Value</span></h2>
        <p className='mt-2 info-text font-roboto leading-normal'>Ellech isn't just footwear, it's a statement. We believe in crafting shoes that are timeless in design, built to last, and offered at a price that respects your wallet.</p>
        <div className='flex items-center gap-4 mt-4'>
          <LinkToLogin>Order Quality Shoes</LinkToLogin>
        </div>
      </div>
      <img 
        src={elech}
        alt="a pair of brown male shoes" 
        width={510}
        height={410}
        className='rounded-lg'
      />
    </section>
  )
}

export default About