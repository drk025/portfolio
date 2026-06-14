import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import About from '../components/About'
import SubjectMaterialsPreview from '../components/SubjectMaterialsPreview'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className='bg-cream'>
      <NavBar/>
      <Hero/>
      <About/>
      <SubjectMaterialsPreview/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home