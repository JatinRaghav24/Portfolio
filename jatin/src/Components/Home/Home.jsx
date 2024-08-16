import React from 'react'
import Header from '../Header/Header'
import About from '../About/About'
import Services from '../Services/Services'
import Skills from '../Skills/Skills'
import Footer from '../Footer/Footer'
import './Home.css'
import Contact from '../Contact/Contact'

const Home = () => {
  return (<>
    <div className='home'>
        <Header/>
    <About/>
    <Services/>
    <Skills/>
    <Contact/>
    </div>
    <Footer/>
    </>
  )
}

export default Home