import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Home from './pages/Home'
import { SideBarProvider } from './contexts/SidebarContext'
import { SearchBarProvider } from './contexts/SearchBarContext'

export default function App() {
  return (
    <SideBarProvider>
      <SearchBarProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />}/>
          </Routes>
        </BrowserRouter>
      </SearchBarProvider>
    </SideBarProvider>
  )
}
