import React, { useState } from 'react'
import { categories, sandals, shoes } from '../constants'
import Category from '../components/Category'
import ShoeCard from '../components/ShoeCard'
import { arrowRight, chevronRight } from '../assets/icons'

const Products = () => {
    const[currentCategory, setCurrentCategory] = useState("Men's shoes");
    const [displayAll, setDIsplayAll] = useState(false)
  return (
    <section className='w-full max-container' id='products'>
        <h2 className='title-text'><span className='text-black text-[48px]'>We are </span>passionate 
        <span className='block sm:inline'> about<span className='text-amber-900'> quality</span></span></h2>
    </section>
  )
}

export default Products