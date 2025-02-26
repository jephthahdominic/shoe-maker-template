import React from 'react'
import Button from './Button'
import { BiCartAdd } from 'react-icons/bi'

export default function PurchaseActions() {
  return (
    <div className='p-3 mt-4 flex items-center gap-6'>
      <Button className={'flex-1 p-2 bg-primary border border-primary rounded-[10px] text-[1.125rem] font-bold'}>
        Order Now
      </Button>
      <Button className={'p-2 border border-primary px-8 rounded-[10px]'}>
        <BiCartAdd className='text-[1.5rem]' />
      </Button>
    </div>
  )
}
