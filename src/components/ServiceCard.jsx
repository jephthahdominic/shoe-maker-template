import React from 'react'

const ServiceCard = ({icon, service, subText}) => {
  return (
    <div className='w-full max-container p-8 mt-10 rounded-md flex-1 text-left max-xl:text-center
    border border-slate-gray hover:cursor-pointer hover:shadow-sm hover:shadow-white-400 transition-shadow'>
        <div className='max-container flex flex-col justify-center align-center text-center'>
            <img
                src={icon}
                alt={service}
                className='w-[150px] h-[150px] bg-white rounded-full m-auto object-contain'
            />
            <p className='mt-2 text-xl max-xl:text-md text-white-400 leading-normal font-montserrat'>{service}</p>
        </div>
    </div>  
  )
}

export default ServiceCard