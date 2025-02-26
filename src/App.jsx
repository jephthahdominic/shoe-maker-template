import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home'
import { SideBarProvider } from './contexts/SidebarContext'
import { SearchBarProvider } from './contexts/SearchBarContext'
import { ProductProvider } from './contexts/ProductContext'
import ProductDescription from './pages/ProductDescription'

export default function App() {
  return (
    <SideBarProvider>
      <ProductProvider>
        <SearchBarProvider>
          <BrowserRouter>
            <Routes>
              <Route index path='/' element={<Home />}/>
              <Route path='/:id' element={<ProductDescription />}/>
            </Routes>
          </BrowserRouter>
        </SearchBarProvider>
      </ProductProvider>
    </SideBarProvider>
  )
}
