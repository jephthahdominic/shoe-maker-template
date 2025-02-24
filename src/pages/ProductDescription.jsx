import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import AppHeader from '../components/AppHeader'
import Search from '../components/Search'
import Main from '../components/Main'
import shoes, { sizes } from '../data/data'
import { FiChevronDown } from 'react-icons/fi'
import SideBar from '../components/SideBar'

export default function ProductDescription() {
    const {id} = useParams();
    let product = shoes[id-1];
    const [countrySize, setCountrySize] = useState("UK");

  return (
    <div className='max-h-screen'>
        <AppHeader showSearchButton={true}/>
        <SideBar />
        <Search/>
        <Main>
            <section className='w-full bg-light-gray relative pb-4'>
                <img src={product.images[0].img} alt={product.images[0].alt} className='w-full object-contain'/>
                <div className='w-full absolute flex p-1.5 gap-2 items-center justify-center bottom-0'>
                    {
                        product.images.map((image)=>(
                            <div className='p-1 bg-white'></div>
                        ))
                    }
                </div>
            </section>
            <section className='p-3'>
                <h1 className='font-playfair font-bold text-[2rem] leading-tight'>{product.productName}</h1>
                <p className='text-[1.125rem] text-dark-gray'>{product.category}</p>
                <p className='mt-4 text-[1.5rem] font-semibold'>{product.price}</p>
            </section>
            <section className='px-3 mt-4'>
                <div className='flex justify-between items-start relative'>
                    <span className='text-[1.5rem] font-serif'>Select Size</span>
                    <div className='border absolute right-0'>
                        <div className='flex p-1 gap-10 items-center border-b'>
                            {countrySize} <FiChevronDown />
                        </div>
                        <div className='p-1 flex flex-col hidden'>
                            <div className='py-1'>UK</div>
                            <div className='py-1'>US</div>
                            <div className='py-1'>CANADA</div>
                        </div>
                    </div>
                </div>
                <div>
                    {
                        countrySize === sizes.country && sizes.sizes.map((size)=>(
                            <>
                                <input type="radio" name="" id="" /> {size}
                            </>
                        ))
                    }
                </div>
            </section>
        </Main>
    </div>
  )
}
