import React from 'react'
import { Footer, AllRoutes } from '../components'

const OurRoute = () => {
  return (
    <div>
      <h1 className='font-semibold text-center text-stone-800 lg:text-6xl text-3xl pb-1 mt-6'>
        Our Routes
      </h1>
      <p className='text-stone-800 text-center py-4'>
        Explore the various routes we have curated you can pick for your trip!
      </p>
      <AllRoutes/>
      <p className='text-stone-800 text-center py-4 text-2xl mb-4'>
        More routes upcoming in the future.
      </p>
      <Footer />
    </div>
  )
}

export default OurRoute;