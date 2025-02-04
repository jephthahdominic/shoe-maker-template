import React, { useState } from 'react'
import Button from '../components/Button'
import { arrowRight, northEast } from '../assets/icons'
import { manOnShoes1, manOnShoes3, standAloneShoe1 } from '../assets/images'
import { classicMen } from '../constants'
import ClassicMenCard from '../components/ClassicMenCard'

const Hero = ({...props}) => {
    const [bigClassicMan, setBigClassicMan] = useState(manOnShoes3);
    const [animate, setAnimate] = useState(false);
  return (
    <section className='w-full max-container flex items-center xl:flex-row flex-col
     gap-10'>        
    </section>
  )
}

export default Hero