import React from 'react'
import HeroSlider from './sections/HeroSlider'
import ServiceSection from './sections/ServiceSection'
import WelcomeToKKR from './sections/WelcomeToKKR'
import ClassSection from './sections/ClassSection'

const Home = () => {
  return (
    <>
      <HeroSlider />
      <ServiceSection />
      <WelcomeToKKR />
      <ClassSection />
    </>
  )
}

export default Home
