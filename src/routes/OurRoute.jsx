import React from 'react'
import { Footer, AllRoutes, Hero2 } from '../components'

const OurRoute = () => {
  return (
    <>
      <Hero2 />
      <AllRoutes />
      <p className='text-stone-800 text-center pt-16 pb-28 text-2xl'>
        More routes upcoming in the future.
      </p>
      <Footer />
    </>
  )
}

export default OurRoute;