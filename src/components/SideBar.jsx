import React from 'react'
import { FiUser } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { useSidebar } from '../contexts/SidebarContext'

export default function SideBar() {
    const {isSidebarOpen, setIsSidebarOpen} = useSidebar();
  return (
    <div className={`w-full h-screen flex justify-end fixed z-40 top-0 bg-[rgba(0,0,0,0.37)] ${!isSidebarOpen && 'hidden'} animate-fade`}>
        <nav className='bg-white h-full w-[85%] animate-appearRTL'>
            <header className='px-4 py-4 w-full relative border-b-[3px] border-b-[3px solid E5E7EB]'>
                <IoClose className='text-[28px] absolute right-4' onClick={()=>setIsSidebarOpen(s=>!s)}/>
                <div className='mt-8'>
                    <Link to='signin' className='flex items-center gap-2 font-poppins font-normal text-xl'>
                        <FiUser className=' text-2xl'/> Sign in
                    </Link>
                </div>
            </header>
            <div className='px-4 mt-6'>
                <h1 className='font-playfair font-bold text-3xl'>Categories</h1>
                <ul className='mt-2 flex flex-col gap-5'>
                    <li className='py-1'>
                        <Link className='w-full font-poppins font-light text-xl'>Corporate shoes</Link>
                    </li>
                    <li className='py-1'>
                        <Link className='font-poppins font-light text-xl'>Sandals</Link>
                    </li>
                    <li className='py-1'>
                        <Link className='font-poppins font-light text-xl'>Belts</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}
