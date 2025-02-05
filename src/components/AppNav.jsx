import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { FaArrowRight, FaGreaterThan } from 'react-icons/fa6'
import { FiArrowRight } from 'react-icons/fi'
import { IoIosArrowDropright, IoMdArrowDropright } from 'react-icons/io'
import { IoHome, IoHomeOutline } from 'react-icons/io5'
import { MdArrowRight } from 'react-icons/md'
import { PiGreaterThan } from 'react-icons/pi'
import { RiArrowRightLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

export default function AppNav() {
  return (
    <ul className='text-xl'>
      <li className='w-full'>
        <Link to='/' className='flex items-center gap-2 justify-between px-5 py-2'>
          <span className='flex items-center gap-2'>
            <IoHomeOutline /> Home
          </span>
          <PiGreaterThan/>
        </Link>
      </li>
    </ul>
  )
}
