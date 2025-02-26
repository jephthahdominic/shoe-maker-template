import React from 'react'

export default function BannerImage({src, alt}) {
  return (
    <div className='px-3'>
      <img src={src} alt={alt} className='w-[100%] h-[300px] object-cover rounded-xl'/>
    </div>
  )
}
