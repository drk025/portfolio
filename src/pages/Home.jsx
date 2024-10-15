import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className='bg-primary'>
        <NavBar/>
        <Hero/>
        <About/>
        <Contact/>
        <Footer/>


    </div>
  )
}

export default Home