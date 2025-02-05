import React from 'react'
import { useSideBar } from '../contexts/SideBarContext';
import LinkToLogin from './LinkToLogin';
import AppNav from './AppNav';
import { PiUser } from 'react-icons/pi';
import { Link } from 'react-router-dom';

export default function MainSideBar() {
    const {openSidebar, ToggleSideBar} = useSideBar();
  return (
    <section className={`${!openSidebar && 'hidden' } fixed top-0 left-0 h-screen w-full bg-[rgba(0,0,0,0.1)]`}>
      <div className={`w-1/2 max-sm:w-[70%] h-screen left-0 top-0 padding-y bg-white flex flex-col items-center`} onMouseOut={ToggleSideBar}>
        <div className='w-full flex justify-end'>
          <Link to = "/" className='flex items-center pr-4 gap-2 text-xl'>Sign In <PiUser /> </Link>
        </div>
        <nav className='w-full mt-8'>
          <AppNav />
        </nav>
      </div>
    </section>
  )
}
