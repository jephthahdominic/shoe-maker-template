import React from 'react'
import { headerLogo } from '../assets/images'
import { navLinks, socialMedia } from '../constants'
import { hamburger, northEast } from '../assets/icons'
import Button from './Button'

const Navbar = ({openSideBar}) => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <div className='flex items-center max-xl:flex-row-reverse max-lg:w-full justify-between sm:gap-4'>
                <img
                    src={hamburger}
                    alt='open side bar'
                    width={24}
                    height={24}
                    className='rounded-full hidden max-lg:flex'
                    onClick={()=>openSideBar(true)}
                />
                {/* <a href="/" >
                    <img
                        src={headerLogo}
                        alt='logo'
                        width={50}
                        height={29}
                    />
                </a> */}
                <h1 className='text-white font-bold text-3xl font-poppins leading-normal tracking-widest'>Ellech</h1>
            </div>
            <ul className='flex flex-1 justify-center gap-8 align-center max-lg:hidden'> 
                {navLinks.map((link)=>(
                    <li className='list-none p-2' key={link.label}>
                        <a href={link.url} className='text-white-400 text-lg leading-normal hover:text-slate-gray font-roboto'>{link.label}</a>
                    </li>
                ))}
            </ul>
            <div className='max-lg:hidden flex gap-4'>
                {socialMedia.map((social)=>(
                    <a href={social.url} className='hover:cursor-pointer bg-white border rounded-full p-2 transition-all hover:bg-transparent hover:border-white'>
                        <img src={social.imgURL} alt={social.alt} width={24} height={24}/>
                    </a>
                    
                ))}
            </div>
            
        </nav>
    </header>
  )
}

export default Navbar