import { useEffect, useState } from 'react'
import Button from './Button'
import AddToCart from './AddToCart';


export default function PurchaseActions({addToCart, id}) {
  const [hanging, setHanging] = useState(false);
  useEffect(()=>{
    window.addEventListener("scroll", ()=>{
      if(window.scrollY > 534) setHanging(true);
      setHanging(false)
    })
  },[]);

  return (
    <div className={`w-full p-3 mt-4 flex items-center gap-6 ${!hanging ? "":"hangingActions"}`}>
      <Button className={'flex-1 h-[56px] bg-primary border border-primary rounded-[10px] text-[1.125rem] font-semibold tracking-wide text-[#f8f8f8]'}>
        Order Now
      </Button>
      <AddToCart addItem = {addToCart} id={id}/>
    </div>
  )
}
