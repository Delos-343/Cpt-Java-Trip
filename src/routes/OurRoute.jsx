import React from 'react'
import { Footer, AllRoutes, LeafletMap } from '../components'

const OurRoute = () => {
  return (
    <>
      <h1 className='font-semibold text-center text-stone-800 lg:text-6xl text-3xl mb-2 mt-20'>
        Our Routes
      </h1>
      <p className='text-stone-800 text-center py-4'>
        Explore the various routes we have curated you can pick for your trip!
      </p>
      <LeafletMap />
      <AllRoutes />
      <p className='text-stone-800 text-center pt-16 text-2xl mb-20'>
        More routes upcoming in the future.
      </p>
      <Footer />
    </>
  )
}

export default OurRoute;