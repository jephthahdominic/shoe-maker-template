import React from 'react'

const ServiceCard = ({icon, service, subText}) => {
  return (
    <div className='w-[500px] flex flex-col justify-center align-center text-center border border-white-400
    p-5'>
      <img
        src={icon}
        alt={service}
        className='w-[150px] h-[150px] bg-white rounded-full m-auto object-contain'
      />
      <p className='mt-4 text-2xl max-xl:text-md text-white leading-normal font-poppins'>{service}</p>
      <p className="mt-2 text-white-400 max-xl:text-sm info-text font-roboto leading-lg">{subText}</p>
    </div> 
  )
}

export default ServiceCard