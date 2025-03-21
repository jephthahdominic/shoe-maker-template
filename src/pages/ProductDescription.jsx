import { useParams } from 'react-router-dom'
import AppHeader from '../components/AppHeader'
import Search from '../components/Search'
import Main from '../components/Main'
import shoes from '../data/data'
import SideBar from '../components/SideBar'
import SelectSize from '../components/SelectSize'
import PurchaseActions from '../components/PurchaseActions'
import Description from '../components/Description'
import Reviews from '../components/Reviews'
import ScrollableProductImages from '../components/ScrollableProductImages'
import { useDispatch } from 'react-redux'
import { add } from '../features/shoppingCart/CartSlice'
import { useState } from 'react'

export default function ProductDescription() {
    const {id} = useParams();
    let product = shoes[id-1];
    
    const [selectedSize, setSelectedSize] = useState(null);
    const [isError, setIsError] = useState(false)

    
    const dispatch = useDispatch()
    
    function addToCart(){
        if(selectedSize === null) {
            setIsError(true)
            return;
        }
        dispatch(add({...product, size:selectedSize}))
    }

  return (
    <div className='max-h-screen'>
        <AppHeader showSearchButton={true} showCart={true} showSideBar={true}/>
        <SideBar />
        <Search/>
        <Main>
            <ScrollableProductImages images={product.images}/>
            <section className='p-3'>
                <h1 className='font-playfair font-semibold text-[2rem] leading-tight text-[#212121]'>{product.productName}</h1>
                <p className='text-[1.125rem] text-dark-gray'>{product.category}</p>
                <p className='mt-4 text-[1.5rem] font-semibold text-[#212121]'>{product.price}</p>
            </section>
            <section>
                <SelectSize selectedSize={selectedSize} setSelectedSize={setSelectedSize} isError={isError} setIsError = {setIsError}/>
                <PurchaseActions addToCart={()=>addToCart()} id={product.id}/>
                <Description product = {product}/>
                <Reviews/>
            </section>
            
        </Main>
    </div>
  )
}
