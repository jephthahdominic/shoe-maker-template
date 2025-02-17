import React from 'react'
import AppHeader from '../components/AppHeader'
import Main from '../components/Main'
import SideBar from '../components/SideBar'
import BannerImage from '../components/BannerImage'
import Banner from '../components/Banner'
import { elech } from '../assets/images'
import shoes from '../data/data'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import Search from '../components/Search'

export default function Home() {
  return (
    <div className='h-screen'>
        <AppHeader />
        <SideBar/>
        <Search/>
        <Main>
            <SearchBar />
            <Banner>
                <BannerImage src={elech} alt={'banner'}/>
            </Banner>
            <section className='mt-10'>
                <h2 className='font-playfair text-[26px] font-semibold'>Top Orders</h2>
                <div className='w-full flex items-center gap-4 mt-3 overflow-auto'>
                    {
                        shoes.map((shoe, key)=>(
                            <ProductCard key={key} shoe={shoe}/>
                        ))
                    }
                </div>
            </section>
            <section className='mt-14'>
                <div className='flex justify-between items-center'>
                    <h2 className='font-playfair text-[26px] font-semibold'>Coporate shoes</h2>
                    <Link className='text-[22px] text-darkTransparent'>more</Link>
                </div>
                <div className='w-full flex items-center gap-4 mt-3 overflow-auto'>
                    {
                        shoes.map((shoe, key)=>(
                            <ProductCard key={key} shoe={shoe}/>
                        ))
                    }
                </div>
            </section>
            <section className='mt-14'>
                <div className='flex justify-between items-center'>
                    <h2 className='font-playfair text-[26px] font-semibold'>Coporate shoes</h2>
                    <Link className='text-[22px] text-darkTransparent'>more</Link>
                </div>
                <div className='w-full flex items-center gap-4 mt-3 overflow-auto'>
                    {
                        shoes.map((shoe, key)=>(
                            <ProductCard key={key} shoe={shoe}/>
                        ))
                    }
                </div>
            </section>
        </Main>
    </div>
  )
}
