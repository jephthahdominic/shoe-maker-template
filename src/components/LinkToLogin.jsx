import React from 'react'
import { Link } from 'react-router-dom'

export default function LinkToLogin({children}) {
  return (
    <Link to='/' className='w-max rounded-xl text-white text-xl bg-yellow-600 py-3 px-8 font-poppins'>
      {children}
    </Link>
  )
}
