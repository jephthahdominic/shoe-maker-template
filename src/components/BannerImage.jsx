import React from 'react'

export default function BannerImage({src, alt}) {
  return (
    <img src={src} alt={alt} className='w-[100%] h-[100%]'/>
  )
}
