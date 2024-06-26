import React from 'react'

const ShoeCard = ({imgURL, name, price, alt}) => {
  return (
    <div className='w-content border border-slate-200 p-2 pt-8 rounded-md bg-white-400 shadow-md hover:shadow-2xl 
    flex flex-col text-center align-center transition-shadow cursor-pointer'>
      <img
        src={imgURL}
        alt={alt}
        className='w-[200px] max-sm:w-[180px] h-[200px] max-sm:h-[180px] object-contain m-auto'
      />
      <p className='leading-normal text-semibold font-roboto text-lg mt-2'>{name}</p>
      {/* <p className='font-roboto text-lg'>{price}</p> */}
    </div>
  )
}

export default ShoeCard 