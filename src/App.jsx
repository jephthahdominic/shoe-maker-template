import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import LandingPage from './pages/LandingPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />}/>
      </Routes>
    </BrowserRouter>
  )
}
