import React from 'react'
import { Footer, Header, Hero, FeaturedRoutes } from '../components'

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturedRoutes />
      <hr className='mx-8 mb-10' />
      <hr className='mx-8 mb-10' />
      <Footer />
    </div>
  )
}

export default HomePage