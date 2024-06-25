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
    min-h-screen gap-10'>
        <div className='flex-col gap-4 w-full max-container padding-r padding-t max-xl:padding-x'>
            <h1 className='font-montserrat text-[62px]  max-sm:text-[72px] max-sm:leading-[82px] text-bold text-white-400'>
                A <span className='text-amber-900'> Perfect Shoe </span> 
                <br/>
                Changes the Game
            </h1>
            <p className='text-xl text-slate-gray leading-normal font-roboto mt-4 tracking-normal'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum omnis doloribus aliquid similique voluptatem mollitia
            ipsa autem in nulla odio vero iure aperiam, quas sunt. Nobis dolorem ipsa perspiciatis fuga?</p>
            <div className='mt-4'>
                <Button 
                    label='Learn more'
                    icon={arrowRight}
                    color='text-white-400'
                    borderColor='border-amber-900'
                    backgroundColor='bg-transparent'
                    borderOnHover='hover:border-white-400'
                />
            </div>
        </div>
        <div className='relative max-container flex xl:min-h-screen items-end w-full pt-2 px-2'>
            <img
                src={bigClassicMan}
                alt='Classic man on shoes'
                width={1400}
                height={610}
                className= {`object-contain rounded-md ${animate && 'animate-fade'}`}
            />
            <div className='p-1 mt-8 w-max m-auto flex flex-1 gap-4 absolute right-5 bottom-5 items-center justify-end'>
                {classicMen.map((man)=>(
                    <div key={man.imgURL} className='hover:cursor-pointer'>
                        <ClassicMenCard 
                            imgURL={man.imgURL} 
                            alt={man.alt}
                            bigClassicMan = {bigClassicMan}
                            startAnimate = {()=>{setAnimate(true)}}
                            changeBigClassicMan = {(classicMan)=>{setBigClassicMan(classicMan)}}
                        />
                    </div>
                ))}
            </div>
        </div>
        
        
    </section>
  )
}

export default Hero