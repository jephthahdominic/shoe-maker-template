import React from 'react'
import { FiChevronLeft, FiSearch } from 'react-icons/fi'
import { useSearch } from '../contexts/SearchBarContext'
import SuggestedSearches from './SuggestedSearches'
import SearchResults from './SearchResults'
import { useProducts } from '../contexts/ProductContext'

export default function Search() {
    const {state, dispatch} = useSearch();
    const {shoes} = useProducts();
    
    function search(){
        const searchResult = shoes.filter((shoe)=>shoe.productName.toLowerCase().match(state.searchQuery.toLowerCase())!==null);
        dispatch({type:"Search", payload:searchResult})
    } 

  return (
    <div className={`w-full h-screen fixed z-40 top-0 bg-[rgba(0,0,0,0.37)]
    animate-fade ${state.isActive ? 'block':'hidden'}`}>
        <div className='bg-[#fafafa] mt-0 h-full w-full p-2 pt-3 animate-appearTTB'>
            <div className='flex items-center gap-3 w-full'>
                <button onClick={()=>dispatch({type:"closeSearch"})}><FiChevronLeft className='text-[24px]'/></button>
                <div className="relative flex-1 bg-white text-[#707072] rounded-[100px]">
                    <input 
                        type="text" 
                        placeholder="Search for shoes and sandals" 
                        className="w-full py-3 rounded-[100px] pr-10 pl-4 
                            border outline-none bg-white border-primary"
                        autoFocus
                        onChange={(e)=>dispatch({type:"isTyping", payload:e.target.value})}
                        value={state.searchQuery}
                    />
                    <button onClick={search} disabled={state.searchQuery.length > 0 ? false : true } className='absolute top-3.5 right-4 '>
                        <FiSearch className="text-[1.35rem]"/>
                    </button>
                </div>
            </div>  
            {state.searchResults ? <SearchResults /> : <SuggestedSearches />}
        </div>
    </div>
  )
}
