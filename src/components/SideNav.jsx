import React from 'react';
import { close, copyright } from '../assets/icons';
import { navLinks, socialMedia } from '../constants';
import { IoCloseOutline } from 'react-icons/io5';
import LinkToLogin from './LinkToLogin';
import { FaCopyright } from 'react-icons/fa';
import { PiCopyright } from 'react-icons/pi';
import NavLinks from './NavLinks';

const SideNav = ({openSideBar, sideBarState}) => {
  return (
    <section className={`relative bg-white h-full max-sm:w-full w-[85%] md:w-[50%] py-4 ${sideBarState ? 'animate-displace':'animate-return'}`}>
      <div className='flex justify-end items-center px-4'>
        <IoCloseOutline
          className='text-black text-4xl'
          onClick={()=>openSideBar(false)}
        />
      </div>
      <div className='flex flex-col items-center gap-10 pl-7 mt-8'>
        <NavLinks />
        <div className='flex gap-4'>
          {socialMedia.map((social)=>(
            <a href={social.url} className='hover:cursor-pointer bg-white border border-slate-gray rounded-full p-2 transition-all hover:bg-transparent hover:border-white'>
              <img src={social.imgURL} alt={social.alt} width={24} height={24}/>
            </a>
          ))}
        </div>        
      </div>
      <div className='w-full flex align-center items-center text-lg p-4 justify-center absolute bottom-0'>
        <PiCopyright className='text-black'/>
        <p className='text-black-400 ml-2'>Copyright 2024</p>
      </div>
      
    </section>
  )
}

export default SideNav