import React from 'react'

const Button = ({label, icon, backgroundColor, color, borderColor, borderOnHover}) => {
  return (
    <button className={`px-4 py-2 ${backgroundColor} ${borderOnHover && borderOnHover}
    flex items-center gap-1.5 rounded-md border ${borderColor} transition-all 
    leading-normal font-roboto text-lg ${color} tracking-wide`}>
      {label}
      {icon && <img
          src={icon}
          alt='arrow'
          className='rounded-full w-5 h-5'
      />}
    </button>
  )
}

export default Button