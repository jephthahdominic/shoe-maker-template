import React from 'react'

const Category = ({label, category, changeCategory}) => {
  return (
    <a 
    className={`text-xl max-sm:text-sm font-roboto hover:cursor-pointer ${category===label ? 'text-black' : 'text-slate-gray'}`}
    onClick={()=>{changeCategory(label)}}>
      {label}
    </a>
  )
}

export default Category