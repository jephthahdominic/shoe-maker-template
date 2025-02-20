import React from 'react'
import AppHeader from '../components/AppHeader'
import Main from '../components/Main'
import SideBar from '../components/SideBar'
import BannerImage from '../components/BannerImage'
import { elech } from '../assets/images'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import Search from '../components/Search'
import Categories from '../components/Categories'

export default function Home() {
  return (
    <div className='h-screen'>
        <AppHeader />
        <SideBar/>
        <Search/>
        <Main>
            <SearchBar />
            <BannerImage src={elech} alt={'banner'}/>
            <Categories />
        </Main>
    </div>
  )
}
