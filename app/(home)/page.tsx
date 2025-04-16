import { Footer } from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import PricingPage from '@/components/PricingPage'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <div className='grid items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20'>
        <HeroSection/>
        <PricingPage/>
        <Footer/>
    </div>
    </div>
  )
}

export default HomePage