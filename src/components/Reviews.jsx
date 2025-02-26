import React from 'react'
import Ratings from './Ratings'

export default function Reviews() {
  return (
    <div className='p-3 mt-6'>
        <header className='flex items-center justify-between'>
          <h2 className='font-sans font-semibold text-[1.5rem]'>Reviews</h2>
          <Ratings />
        </header>
    </div>
  )
}
