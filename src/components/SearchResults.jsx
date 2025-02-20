import React, { useEffect } from 'react'
import { useProducts } from '../contexts/ProductContext'
import { useSearch } from '../contexts/SearchBarContext';

export default function SearchResults() {
    const {shoes} = useProducts();
    const {state, dispatch} = useSearch();

    useEffect(()=>{
        const searchResult = shoes.filter((shoe)=>shoe.productName.includes(state.searchQuery));
        dispatch({type:"resultReady", payload:searchResult})
    }, [shoes, state.searchQuery])

  return (
    <section className='mt-6'>
        <h2 className='text-[1.1235rem] text-dark-gray'>{state.searchResults?.length}</h2>
    </section>
  )
}
