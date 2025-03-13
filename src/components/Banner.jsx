import React from 'react'

export default function Banner({className, children}) {
  return <section className={className}>
    {children}
  </section>
}
