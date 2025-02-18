import React from 'react'
import { FiChevronLeft, FiSearch } from 'react-icons/fi'

const suggestions = ["Brogues", "Chelsea boot", "Sandals"]

export default function Search() {
  return (
    <div className='w-full h-screen absolute z-40 top-0 bg-[rgba(0,0,0,0.37)] hidden'>
        <div className='bg-white mt-0 h-full w-full p-2 pt-3'>
            <div className='flex items-center gap-3 w-full'>
                <FiChevronLeft className='text-[24px]'/>
                <div className="relative flex-1 bg-white text-[#707072]">
                    <input 
                    type="search" 
                    placeholder="Search for shoes and sandals" 
                    className="w-full py-2 rounded-[100px] border border-[1px solid E5E7EB] pl-10 pr-4 
                        border-2 outline-none bg-white focus:border-primary"
                    autoFocus
                    />
                    <FiSearch className="absolute top-3 left-3 text-[18px]"/>
                </div>
            </div>  
            <div className='flex flex-wrap items-center gap-2 mt-4'>
                {suggestions.map((suggestion)=>(
                    <span className='border border-light-gray text-lg p-2 rounded-[10px] text-dark-gray'>{suggestion}</span>
                ))}

            </div>     
        </div>
    </div>
  )
}
