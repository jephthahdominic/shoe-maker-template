import React, { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { sizes } from '../data/data';

export default function SelectSize() {
    const [countrySize, setCountrySize] = useState("EU");
    const [index, setIndex] = useState(0);
    const [changeCountry, setChangeCountry] = useState(false);
    const [selectedSize, setSelectedSize] = useState(null);

    function selectCountry(country, index){
        setIndex(index)
        setCountrySize(country);
        setChangeCountry(s=>!s);
        setSelectedSize(null)
    }
    
  return (
    <section className='px-3 mt-4'>
        <div className='flex justify-between items-start relative'>
            <span className='text-[1.5rem] font-serif text-[#212121]'>Select Size</span>
            <div className='border absolute right-0 bg-white'>
                <div className='flex py-1 px-2 gap-20 items-center' onClick={()=>setChangeCountry(s=>!s)}>
                    {countrySize} {!changeCountry ? <FiChevronDown /> : <FiChevronUp/> }
                </div>
                <div className= {`flex-col ${!changeCountry ? 'hidden' : 'flex'}`}>
                    {
                        sizes.map((size, index)=>(
                            <div className={`border-t py-1.5 px-2 w-full ${size.country === countrySize && 'bg-slate-200'}`} onClick={()=>selectCountry(size.country, index)} 
                            key={index}>{size.country}</div>
                        ))
                    }
                </div>
            </div>
        </div>
        <div className='grid grid-cols-4 gap-4 mt-4'>
            {
                sizes[index].sizes.map((size, id)=>(
                    <div className='' key={id}>
                        <label htmlFor="size" className={`${selectedSize === size && 'bg-primary text-[#f8f8f8]'} text-[#666666] border-2 border-light-gray shadow-sm shadow-light-gray rounded-full flex justify-center p-2`} onClick={()=>setSelectedSize(size)}> {size}</label>
                        <input type="radio" name="size" id="size" className='hidden' value={size} />
                    </div>
                ))
            }
        </div>
    </section>
  )
}
