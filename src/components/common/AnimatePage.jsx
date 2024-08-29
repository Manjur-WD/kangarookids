import React from 'react'
import "animate.css"

const AnimatePage = ({children}) => {
  return (
    <main className='animate__animated animate__fadeInUp'>
      {children}
    </main>
  )
}

export default AnimatePage
