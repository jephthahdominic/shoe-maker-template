import React from 'react'

const ServiceCard = ({icon, service, subText}) => {
  return (
    <div className='w-full max-container p-10 mt-10 rounded-md flex-1 border min-h-[200px] border-white-400 text-left max-xl:text-center'>
        <div className='max-container flex items-center max-xl:flex-col gap-2'>
            <img
                src={icon}
                alt={service}
                width={40}
                height={40}
            />
            <h3 className='mt-2 text-3xl max-xl:text-md text-white-400 leading-normal font-montserrat'>{service}</h3>
        </div>
        <p className='mt-3 text-lg font-roboto break-words leading-normal text-white-400'>{subText}</p>
    </div>  
  )
}

export default ServiceCard