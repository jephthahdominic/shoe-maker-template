import React from 'react'

const ShoeCard = ({imgURL, name, price, alt}) => {
  return (
    <div className='border border-slate-200 p-4 pt-8 rounded-md'>
      <img
        src={imgURL}
        alt={alt}
        className='w-[200px] h-[200px]'
      />
      <h1 className='leading-normal text-semibold font-montserrat text-lg mt-4'>{name}</h1>
      <p className='font-roboto text-lg'>{price}</p>
    </div>
  )
}

export default ShoeCard 