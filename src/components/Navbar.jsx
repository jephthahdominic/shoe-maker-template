import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import NavLinks from './NavLinks'

const Navbar = ({openSideBar}) => {
    const [headerFixed, setHeaderFixed] = useState(false);
    window.addEventListener('scroll', ()=>{
        if (window.scrollY > 100){
            setHeaderFixed(true);
        } else {
            setHeaderFixed(false);
        }
    })
    return (
        <header className={`padding-x py-6 z-50 w-full fixed ${headerFixed && 'bg-darkTransparent'}`}>
            <nav className='flex justify-between items-center max-container'>
                <div className='flex items-center max-xl:flex-row-reverse max-lg:w-full justify-between sm:gap-4'>
                    <GiHamburgerMenu
                        className='text-white text-3xl hidden max-lg:flex'
                        onClick={()=>openSideBar(true)}
                    />
                    <h1 className='text-white font-bold text-3xl font-poppins leading-normal tracking-widest'>Ellech</h1>
                </div>
                <div className='flex items-center gap-4 max-lg:hidden'>
                    <NavLinks />
                </div>  
            </nav>
        </header>
    )
}

export default Navbar