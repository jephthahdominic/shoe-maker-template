import React from 'react'

export default function Main({className, children}) {
  return (
    <main className={`pb-5 relative ${className}`}>
        {children}
    </main>
  )
}
