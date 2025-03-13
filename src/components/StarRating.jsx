import React, { useEffect } from 'react'
import { IoStar, IoStarOutline } from 'react-icons/io5';

export default function StarRating({value, maxStars = 5}) {

  return (
    <div className='flex gap-1'>
      {Array.from({length: maxStars}, (_, i) => (
        <span key={i}>
          {i < value ? 
            <IoStar className='text-primary text-[1.125rem]'/> : 
            <IoStarOutline className='text-primary text-[1.125rem]'/>
          }
        </span>
      ))}
    </div>
  )
}
