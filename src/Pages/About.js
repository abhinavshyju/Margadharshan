import React from 'react'
import Contact from '../Components/Contact'
import { Navbar } from '../Components/Navbar'

const About = () => {
  return (
    <>  
    <div className='hero'>
        <Navbar/>
        <div className='d-flex hero-sec '>
            <div className='hero-content'>
                <h1>Margadharshan</h1>
                <p>About Margadharshan </p>
            </div>
            <div className='hero-img'>
                <img src='http://www.keralaindiavacation.com/images/page-images/kerala-header.jpg' alt='image'/>
            </div>
        </div>
      <Contact/>
    </div>

  
    </>
  )
}

export default About