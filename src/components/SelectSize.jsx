import React, { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { sizes } from '../data/data';

export default function SelectSize() {
    const [countrySize, setCountrySize] = useState("UK");
    const [index, setIndex] = useState(0);
    const [selectCountry, setSelectCountry] = useState(false);
    
  return (
    <section className='px-3 mt-4'>
        <div className='flex justify-between items-start relative'>
            <span className='text-[1.5rem] font-serif'>Select Size</span>
            <div className='border absolute right-0 bg-white'>
                <div className='flex py-1 px-2 gap-20 items-center' onClick={()=>setSelectCountry(s=>!s)}>
                    {countrySize} {!selectCountry ? <FiChevronDown /> : <FiChevronUp/> }
                </div>
                <div className= {`flex-col ${!selectCountry ? 'hidden' : 'flex'}`}>
                    {
                        sizes.map((size, index)=>(
                            <div className='border-t py-1.5 px-2 w-full' onClick={()=>{
                                setIndex(index)
                                setCountrySize(size.country);
                            }}>{size.country}</div>
                        ))
                    }
                </div>
            </div>
        </div>
        <div className='grid grid-cols-4 gap-4 mt-4'>
            {
                sizes[index].sizes.map((size)=>(
                    <div className='border border-light gray rounded-full flex justify-center p-2'>
                        <label htmlFor="size" className='text-dark-gray'></label>
                        <input type="radio" name="size" id="size" className='hidden' value={size} /> {size}
                    </div>
                ))
            }
        </div>
    </section>
  )
}
