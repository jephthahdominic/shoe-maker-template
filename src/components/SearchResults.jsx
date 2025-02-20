import React from 'react'
import { useSearch } from '../contexts/SearchBarContext';

export default function SearchResults() {
    const {state} = useSearch();
    return (
      <section className='mt-6'>
        <h2 className='text-[1.1235rem] text-dark-gray'>{`Showing ${state.searchResults.length} results for "${state.searchQuery}"`}</h2>
        <div>
          {state.searchResults.map((product)=>(
            <div>{product.productName}</div>
          ))}
        </div>
      </section>
    )
}
