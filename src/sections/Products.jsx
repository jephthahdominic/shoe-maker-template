import React, { useState } from 'react'
import { categories, sandals, shoes } from '../constants'
import Category from '../components/Category'
import ShoeCard from '../components/ShoeCard'
import { arrowRight, chevronRight } from '../assets/icons'

const Products = () => {
    const[currentCategory, setCurrentCategory] = useState("Men's shoes");
    const [displayAll, setDIsplayAll] = useState(false)
  return (
    <section className='w-full max-container' id='products' data-aos="zoom-in" data-aos-duration = "500" data-aos-once = "false" data-aos-easing = "ease-in-out" data-aos-delay = "50">
        <h2 className=' text-4xl max-sm:text-4xl font-montserrat text-tint'><span className='text-black text-[48px]'>We are </span>passionate 
        <span className='block sm:inline'> about<span className='text-amber-900'> quality</span></span></h2>
        <div className='w-full mt-2 text-slate-gray xl:flex justify-between align-top'>
            <p className='text-xl xl:w-[70%] font-roboto leading-normal'>A great brand is one that provides quality and a touch of confidence to its customers</p>
            <nav className='max-xl:mt-6 flex max-xl:justify-start max-xl:gap-5 gap-8 xl:pr-5'>
                {categories.map((category)=>(
                    <Category
                        key={category.label}
                        label = {category.label}
                        category = {currentCategory}
                        changeCategory = {(thisCategory)=>{setCurrentCategory(thisCategory)}}
                    />
                ))}
            </nav>
        </div>
        <div className='w-full flex flex-1 max-xl:flex-col max-xl:mt-4 mt-8 gap-4' >
            <div className='w-full'>
                {currentCategory === "Men's shoes" && <><div className='w-full grid xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-2 sm:gap-2 gap-2'>
                    {shoes.filter(shoe => !displayAll ? shoe.id <= 4 : shoe.id <= 8).map((shoe,id)=>(
                        <ShoeCard
                            key={id}
                            imgURL={shoe.imgURL}
                            name={shoe.name}
                            price={shoe.price}
                            alt={shoe.alt}
                        />
                    ))}
                </div>
                <div className='w-full m-auto flex justify-center p-4 mt-8'>
                    <button>
                        <img 
                        src= {chevronRight} 
                        alt= 'Show more'
                        className={`${!displayAll ? 'rotate-90': 'rotate-[270deg]'}`}
                        onClick={()=>displayAll ? setDIsplayAll(false):setDIsplayAll(true)}
                        />
                    </button>
                </div></>}
                {currentCategory === "Men's sandals" && <div className='w-full grid xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-2 sm:gap-2 gap-2'>
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