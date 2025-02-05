import React from 'react'
import { products } from '../constants'
import ProductCard from './ProductCard'

export default function TopBuys() {
  return (
    <>
        <h2 className='padding-x font-playfair text-2xl'>Top Orders</h2>
        <div className='px-2 grid grid-cols-2 gap-3 mt-4'>
            {products.map((product)=>(
                <ProductCard product = {product}/>
            ))} 
        </div>
    </>
  )
}
