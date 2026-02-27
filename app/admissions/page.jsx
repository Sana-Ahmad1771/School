import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import AdmissionHero from '../components/pages/admissions/AdmissionHero'
import AdmissionProcess from '../components/pages/admissions/AdmissionProcess'
import RequiredDocuments from '../components/pages/admissions/RequiresDocuments'
import CTAButton from '../components/pages/admissions/CTAButton'

const page = () => {
  return (
    <>
      <Header />
      <AdmissionHero />
      <AdmissionProcess />
      <RequiredDocuments />
      <CTAButton />
      <Footer />
    </>
  )
}

export default page
