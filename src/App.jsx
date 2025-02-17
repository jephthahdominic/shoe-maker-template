import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Home from './pages/Home'

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
        </Routes>
      </BrowserRouter>
  )
}
