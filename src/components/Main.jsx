import React from 'react'
import Search from './Search'
import Banner from './Banner'
import BannerImage from './BannerImage'
import { elech } from '../assets/images'

export default function Main({children}) {
  return (
    <main className='py-5'>
        {children}
    </main>
  )
}
