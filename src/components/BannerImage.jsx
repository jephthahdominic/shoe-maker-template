import React from 'react'
import Banner from './Banner'

export default function BannerImage({src, alt}) {
  return (
    <Banner className='px-3'>
      <img src={src} alt={alt} className='w-[100%] h-[300px] object-cover rounded-xl'/>
    </Banner>
  )
}
