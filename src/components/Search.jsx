import React from 'react'
import { FiChevronLeft, FiSearch } from 'react-icons/fi'
import { useSearch } from '../contexts/SearchBarContext'
import SuggestedSearches from './SuggestedSearches'
import SearchResults from './SearchResults'

export default function Search() {
    const {state, dispatch} = useSearch();
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
                        onChange={(e)=>dispatch({type:"isSearching", payload:e.target.value})}
                        value={state.searchQuery}
                    />
                    <FiSearch className="absolute top-3 left-3 text-[18px]"/>
                </div>
            </div>  
            <SuggestedSearches />
            <SearchResults />
        </div>
    </div>
  )
}
