import React from 'react'
import { Footer, AllRoutes, LeafletMap, RouteHero } from '../components'

const OurRoute = () => {
  return (
    <>
      <RouteHero />
      <AllRoutes />
      <p className='text-stone-800 text-center pt-16 text-2xl mb-20'>
        More routes upcoming in the future.
      </p>
      <Footer />
    </>
  )
}

export default OurRoute;