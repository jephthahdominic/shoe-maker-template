import React from 'react'
import { IoHome, IoHomeOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

export default function AppNav() {
  return (
    <ul className='text-xl'>
        <li className='w-full pl-5 py-2'>
            <Link to='/' className='flex items-center gap-2'><IoHomeOutline /> Home</Link>
        </li>
        <li className='w-full pl-5 py-2'>
            <Link to='/' className='flex items-center gap-2'><IoHomeOutline /> Home</Link>
        </li>
        <li className='w-full pl-5 py-2'>
            <Link to='/' className='flex items-center gap-2'><IoHomeOutline /> Home</Link>
        </li>
    </ul>
  )
}
