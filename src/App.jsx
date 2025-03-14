import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home'
import { SideBarProvider } from './contexts/SidebarContext'
import { SearchBarProvider } from './contexts/SearchBarContext'
import { ProductProvider } from './contexts/ProductContext'
import ProductDescription from './pages/ProductDescription'
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import ShoppingCart from './pages/ShoppingCart';

export default function App() {
  return (
    <SideBarProvider>
      <ProductProvider>
        <SearchBarProvider>
          <BrowserRouter>
            <Routes>
              <Route index path='/' element={<Home />}/>
              <Route path=':id' element={<ProductDescription />}/>
              <Route path ='/signup' element={<Signup />} />
              <Route path ='/signin' element={<Signin />} />
              <Route path ='/cart' element={<ShoppingCart />} />
            </Routes>
          </BrowserRouter>
        </SearchBarProvider>
      </ProductProvider>
    </SideBarProvider>
  )
}
