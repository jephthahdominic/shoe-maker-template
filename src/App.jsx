import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Homepage from './pages/Homepage'
import { SideBarProvider } from './contexts/SideBarContext'

export default function App() {
  return (
    <SideBarProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />}/>
        </Routes>
      </BrowserRouter>
    </SideBarProvider>
  )
}
