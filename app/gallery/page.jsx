import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import GalleryHero from '../components/pages/gallery/GalleryHero'
import MediaGrid from '../components/pages/gallery/MediaGrid'

const page = () => {
  return (
    <>
      <Header />
      <GalleryHero />
      <MediaGrid />
      <Footer />
    </>
  )
}

export default page
