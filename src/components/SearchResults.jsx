import React from 'react'
import { useSearch } from '../contexts/SearchBarContext';
import { Link } from 'react-router-dom';
import SmallProductCard from './SmallProductCard';

export default function SearchResults() {
    const {state} = useSearch();
    return (
      <section className='mt-6'>
        <h2 className='text-[1.1235rem] text-dark-gray'>{`Showing ${state.searchResults.length} results for "${state.searchQuery}"`}</h2>
        <div className='mt-4 grid grid-cols-2 gap-4'>
          {state.searchResults.map((product)=>(
            <SmallProductCard img={product.images[0].img} name={product.productName} price={product.price}/>
          ))}
        </div>
      </section>
    )
}
