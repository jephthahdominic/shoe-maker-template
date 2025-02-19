import React from 'react'
import { FiChevronLeft, FiSearch } from 'react-icons/fi'
import { useSearch } from '../contexts/SearchBarContext'

const suggestions = ["Brogues", "Chelsea boot", "Sandals"]

export default function Search() {
    const {state, dispatch} = useSearch()
  return (
    <div className={`w-full h-screen absolute z-40 top-0 bg-[rgba(0,0,0,0.37)]
    animate-fade ${state.isActive ? 'block':'hidden'}`}>
        <div className='bg-white mt-0 h-full w-full p-2 pt-3 animate-appearTTB'>
            <div className='flex items-center gap-3 w-full'>
                <button onClick={()=>dispatch({type:"closeSearch"})}><FiChevronLeft className='text-[24px]'/></button>
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
            <section className='mt-6'>
                <h2 className=' text-[1.1235rem] text-dark-gray'>Suggested searches</h2>
                <div className='flex flex-wrap items-center gap-2 mt-4'>
                    {suggestions.map((suggestion)=>(
                        <span className='border border-light-gray text-[1rem] p-2 rounded-[10px] text-dark-gray'>{suggestion}</span>
                    ))}

                </div>     
            </section>
            <section className='mt-6'>
                <h2 className='text-[1.1235rem] text-dark-gray'>Suggested searches</h2>
            </section>
        </div>
    </div>
  )
}
