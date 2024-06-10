import React from 'react'

const ShoeCard = ({imgURL, name, price, alt}) => {
  return (
    <div className='border border-slate-200 p-4 rounded-md max-sm:w-max'>
      <img
        src={imgURL}
        alt={alt}
        className='w-[250px] h-[200px] object-contain'
      />
      <h1 className='leading-normal text-semibold font-montserrat text-lg'>{name}</h1>
      <p>{price}</p>
    </div>
  )
}

export default ShoeCard 