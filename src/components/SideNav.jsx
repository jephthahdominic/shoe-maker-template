import React from 'react';
import { close, copyright } from '../assets/icons';
import { navLinks, socialMedia } from '../constants';

const SideNav = ({openSideBar, sideBarState}) => {
  return (
    <section className={`relative bg-white h-full max-sm:w-full w-[85%] md:w-[50%] py-4 ${sideBarState ? 'animate-displace':'animate-return'}`}>
      <div className='flex justify-end p-1'>
        <button 
          className='transparent hover:bg-gray-300 p-1.5 rounded-full'
          onClick={()=>openSideBar(false)}
        >
          <img
            src={close}
            height={40}
            width={40}
          />
        </button>
      </div>
      <div className='flex flex-col gap-10 px-7'>
        <ul className='w-full mt-7 flex flex-col gap-5 pt-3 pb-3'>
          {navLinks.map((link)=>(
            <li key={link.label} className='w-full p-2 flex justify-between items-center hover:bg-slate-400' onClick={()=>openSideBar(false)}>
              <a href={link.url} className='font-montserrat text-black text-xl font-semibold'>{link.label}</a>
            </li>
          ))}
        </ul>
        <div>
          <div className='flex gap-4'>
            {socialMedia.map((social)=>(
              <a href={social.url} className='hover:cursor-pointer bg-white border border-slate-gray rounded-full p-2 transition-all hover:bg-transparent hover:border-white'>
                <img src={social.imgURL} alt={social.alt} width={24} height={24}/>
              </a>
            ))}
          </div>
        </div>
        
      </div>
      <div className='w-full flex align-center p-4 justify-center bg-tint absolute bottom-0'>
        <img src={copyright} alt="copyright" width={24} height={24}/>
        <p className='text-white-400 ml-2'>Copyright 2024</p>
      </div>
      
    </section>
  )
}

export default SideNav