import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import AboutHero from '../components/pages/aboutus/AboutHero'
import MissionVision from '../components/pages/aboutus/MissionVission'

const page = () => {
  return (
    <>
      <Header />
      <AboutHero />
      <MissionVision />
      <Footer />
    </>
  )
}

export default page
