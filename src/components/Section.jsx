import React, { Children } from 'react'

export const Section = ({children, title, ...props}) => {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  )
}
