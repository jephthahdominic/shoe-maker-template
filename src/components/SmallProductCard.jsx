import React from 'react'
import { Link } from 'react-router-dom'

export default function SmallProductCard({img, name, price}) {
  return (
    <Link className='max-w-full border border-light-gray rounded-t-xl'>
        <div className='bg-light-gray mb-2 rounded-t-xl'>
            <img src={img} alt="" width={200} height={200} className='object-center'/>
        </div>
        <div className='p-2'>
            <h1 className='font-serif font-medium mb-2'>{name}</h1>
            <span className='font-serif text-[1.125rem]'>{price}</span>
        </div>
    </Link>
  )
}
