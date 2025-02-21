import React from 'react'
import { useProducts } from '../contexts/ProductContext'
import { Link } from 'react-router-dom'
import BigProductCard from './BigProductCard'

export default function Categories() {
    const {shoes} = useProducts()
  return (
    <>
        <section className='mt-10'>
            <h2 className='font-playfair text-[1.75rem] font-semibold'>Top Orders</h2>
            <div className='w-full flex items-center gap-4 mt-3 overflow-auto scrollbar-hide'>
                {
                    shoes.map((shoe, key)=>(
                        <BigProductCard key={key} shoe={shoe}/>
                    ))
                }
            </div>
        </section>
        <section className='mt-14'>
            <div className='flex justify-between items-center px-1'>
                <h2 className='font-playfair text-[1.75rem] font-semibold'>Coporate shoes</h2>
                <Link className='text-[1.125rem] text-darkTransparent'>more</Link>
            </div>
            <div className='w-full flex items-center gap-4 mt-3 overflow-auto scrollbar-hide'>
                {
                    shoes.map((shoe, key)=>(
                        <BigProductCard key={key} shoe={shoe}/>
                    ))
                }
            </div>
        </section>
        <section className='mt-14'>
            <div className='flex justify-between items-center px-1'>
                <h2 className='font-playfair text-[1.75rem] font-semibold'>Sandals</h2>
                <Link className='text-[1.125rem] text-darkTransparent'>more</Link>
            </div>
            <div className='w-full flex items-center gap-4 mt-3 overflow-auto scrollbar-hide'>
                {
                    shoes.map((shoe, key)=>(
                        <BigProductCard key={key} shoe={shoe}/>
                    ))
                }
            </div>
        </section>
    </>
  )
}
