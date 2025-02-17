import React from 'react'
import AppHeader from '../components/AppHeader'
import Main from '../components/Main'
import SideBar from '../components/SideBar'
import Search from '../components/Search'
import BannerImage from '../components/BannerImage'
import Banner from '../components/Banner'
import { elech } from '../assets/images'
import shoes from '../data/data'
import ProductCard from '../components/ProductCard'

export default function Home() {
  return (
    <div className='h-screen'>
        <AppHeader />
        <SideBar/>
        <Main>
            <Search />
            <Banner>
                <BannerImage src={elech} alt={'banner'}/>
            </Banner>
            <section className='mt-8 px-2'>
                <h2 className='font-playfair text-[26px] font-semibold'>Top Orders</h2>
                <div className='w-full flex items-center gap-4 mt-4 overflow-x-scroll py-1'>
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
