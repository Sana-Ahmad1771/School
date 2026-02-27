import React from 'react'
import Header from '../components/common/Header'
import ContactHero from '../components/pages/contact/ContactHero'
import Footer from '../components/common/Footer'
import ContactDetails from '../components/pages/contact/ContactDetails'

const page = () => {
  return (
    <div>
      <Header />
      <ContactHero />
      <ContactDetails />
      <Footer />
    </div>
  )
}

export default page
