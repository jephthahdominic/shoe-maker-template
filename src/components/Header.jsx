import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { PiShoppingCart, PiUser } from 'react-icons/pi'
import { useSideBar } from '../contexts/SideBarContext'
import { IoSearchOutline } from 'react-icons/io5'

export default function Header() {
    const {ToggleSideBar} = useSideBar()
  return (
    <header className='padding-x py-6 z-50 w-full text-black '>
        <nav className='flex justify-between items-center max-container'>
            <div className='flex items-center gap-4'>
                <GiHamburgerMenu
                    className='text-3xl hidden max-lg:flex'
                    onClick={ToggleSideBar}
                />
                <h1 className='font-bold text-3xl leading-normal font-playfair tracking-widest'>Ellech</h1>
            </div>
            <div className='flex gap-7 items-center text-xl'>
                <button>
                    <IoSearchOutline className='text-3xl'/>
                </button>
                <Link to='/' className='flex items-center gap-2 active:text-amber-900'>
                    <PiUser className='text-3xl'/> <span className='max-sm:hidden'>Account</span>
                </Link>
                <Link className='flex items-center gap-2 active:text-amber-900'>
                    <PiShoppingCart className='text-3xl'/> <span className='max-sm:hidden'>Cart</span>
                </Link>
            </div>  
        </nav>
    </header>
  )
}
