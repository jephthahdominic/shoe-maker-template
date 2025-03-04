import React, { useState } from 'react'
import Button from './Button'
import { BiCartAdd } from 'react-icons/bi'

export default function PurchaseActions() {
  const [hanging, setHanging] = useState(false)
  window.addEventListener("scroll", ()=>{
    if(window.scrollY > 534) setHanging(true);
    setHanging(false)
  })
  return (
    <div className={`w-full p-3 mt-4 flex items-center gap-6 ${!hanging ? "":"hangingActions"}`}>
      <Button className={'flex-1 h-[56px] bg-primary border border-primary rounded-[10px] text-[1.125rem] font-bold'}>
        Order Now
      </Button>
      <Button className={'h-[56px] border bg-white border-primary px-8 rounded-[10px]'}>
        <BiCartAdd className='text-[1.5rem]' />
      </Button>
    </div>
  )
}
