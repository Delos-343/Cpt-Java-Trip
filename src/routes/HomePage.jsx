import React from 'react'
import { Footer, Header, Hero, FeaturedRoutes, HomeStats, HelpSection } from '../components'

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturedRoutes />
      <hr className='mx-8' />
      <HomeStats />
      <hr className='mx-8' />
      <HelpSection />
      <Footer />
    </div>
  )
}

export default HomePage