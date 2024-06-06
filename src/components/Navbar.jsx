import React from 'react'
import { headerLogo } from '../assets/images'
import { navLinks } from '../constants'
import { hamburger, northEast } from '../assets/icons'
import Button from './Button'

const Navbar = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <div className='flex items-center max-sm:flex-row-reverse max-sm:w-full justify-between sm:gap-4'>
                <img
                    src={hamburger}
                    alt='open side bar'
                    width={24}
                    height={24}
                    className='rounded-full hidden max-lg:flex'
                />
                <a href="/" >
                    <img
                        src={headerLogo}
                        alt='logo'
                        width={130}
                        height={29}
                    />
                </a>
            </div>
            <ul className='flex flex-1 justify-center gap-8 align-center max-lg:hidden'> 
                {navLinks.map((link)=>(
                    <li className='list-none p-2'>
                        <a href={link.url} className='text-white-400 text-lg leading-normal hover:text-black font-roboto'>{link.label}</a>
                    </li>
                ))}
            </ul>
            <div className='max-sm:hidden'>
                <Button
                    label="Let's talk"
                    icon={northEast}
                    backgroundColor='bg-amber-900'
                    color='text-white-400'
                    borderColor='border-amber-900'
                />
            </div>
            
        </nav>
    </header>
  )
}

export default Navbar