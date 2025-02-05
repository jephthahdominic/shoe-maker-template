import React from 'react'

export default function Image({src, alt, classname}) {
  return <img src={src} alt={alt} className={classname}/>
}
