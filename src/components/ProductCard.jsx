import React from 'react'
import ProductImg from './ProductImg'
import { FaNairaSign } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export default function ProductCard({product}) {
    const {name, img, category, price} = product
  return (
    <Link to='/'>
        <div className='bg-[#F7F7F7] p-4 rounded-t-[5px]'>
            <ProductImg src={img}/>
        </div>
        <div className='px-2 py-4 font-playfair'>
            <h3 className='text-xl font-semibold'>{name}</h3>
            <p className='text-[#707072]'>{category}</p>
            <p className='flex items-center gap-1 text-2xl text-amber-900'><FaNairaSign className='text-sm'/>{price}</p>
        </div>
    </Link>
  )
}
