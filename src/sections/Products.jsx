import React, { useState } from 'react'
import { categories, sandals, shoes } from '../constants'
import Category from '../components/Category'
import ShoeCard from '../components/ShoeCard'

const Products = () => {
    const[currentCategory, setCurrentCategory] = useState("Men's corporate shoes");
  return (
    <section className='w-full max-container'>
        <h2 className='text-4xl font-montserrat'>Our <span className='text-amber-900'>Collections</span></h2>
        <div className='w-full flex flex-1 max-xl:flex-col mt-8 gap-4' >
            <nav className=' flex-auto flex flex-col max-xl:flex-row max-xl:gap-8 gap-2 py-4 max-md:justify-between'>
                {categories.map((category)=>(
                    <Category
                        key={category.label}
                        label = {category.label}
                        category = {currentCategory}
                        changeCategory = {(thisCategory)=>{setCurrentCategory(thisCategory)}}
                    />
                ))}
            </nav>
            <div className='px-4'>
                {currentCategory === "Men's corporate shoes" && <div className='grid xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 sm:gap-4 gap-9 p-4'>
                    {shoes.map((shoe,id)=>(
                        <ShoeCard
                            key={id}
                            imgURL={shoe.imgURL}
                            name={shoe.name}
                            price={shoe.price}
                            alt={shoe.alt}
                        />
                    ))}
                </div>}
                {currentCategory === "Men's corporate sandals" && <div className='grid xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 sm:gap-4 gap-9 p-4'>
                    {sandals.map((sandal,id)=>(
                        <ShoeCard 
                            key={id}
                            imgURL={sandal.imgURL}
                            name={sandal.label}
                            price={sandal.price}
                            alt={sandal.alt}
                        />
                    ))}  
                </div>}
                
            </div>

        </div>
    </section>
  )
}

export default Products