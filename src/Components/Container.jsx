import React from 'react'
import { cn } from './TailwindCustom'

const Container = ({children,className}) => {
  return (
    <section className={cn('container mx-auto ',className)}>
        {children}
    </section>
  )
}

export default Container