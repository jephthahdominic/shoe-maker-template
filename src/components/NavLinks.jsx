import React from 'react'
import { navLinks } from '../constants'
import LinkToLogin from './LinkToLogin'

export default function NavLinks() {
  return (
    <ul className='flex flex-1 justify-center gap-4 lg:items-center max-lg:flex-col max-lg:text-center'> 
      {navLinks.map((link)=>(
        <li className='list-none' key={link.label}>
          <a href={link.url} className='lg:text-white-400 text-xl leading-normal hover:text-white font-poppins'>{link.label}</a>
        </li>
      ))}
      <LinkToLogin>Sign In</LinkToLogin>
    </ul>
  )
}
