import React from 'react'
import Contact from '../Components/Contact'
import { Navbar } from '../Components/Navbar'
import './About.css'
import Arjun from './dev/Arjun.jpg'
import  Vishnu from './dev/Vishnu.jpg'
import  Arshad from './dev/Arshad.jpg'
import Anunandh from './dev/Anunandh.jpg'

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
        <div className='dev-contact'>
          <div className='dev-details'>
            <div >
              <div className='dev-1'>
                <img src={Arjun} alt='dev'/>
              </div>
              <div className='dev-2'>
                <h2>Arjun R K</h2>
                <h3> Project manager</h3>
                 <button>Contact</button>
              </div>
            </div>
          </div>
           <div className='dev-details'>
             <div>
               <div className='dev-1'>
                <img src={Vishnu} alt='dev'/>
              </div>
              <div className='dev-2'>
                <h2>Vishnu K K</h2>
                <h3>Engineering manager</h3>
                 <button>Contact</button>
              </div>
             </div>
          </div>
           <div className='dev-details'>
              <div>
                <div className='dev-1'>
                <img src={Arshad} alt='dev'/>
              </div>
              <div className='dev-2'>
                <h2>Arshad Rahman</h2>
                <h3> Software developer</h3>
                <button>Contact</button>
              </div>
              </div>
          </div>
           <div className='dev-details'>
              <div>
                <div className='dev-1'>
                <img src={Anunandh} alt='dev'/>
              </div>
              <div className='dev-2'>
                <h2>Anunandh P S</h2>
                <h3> Software developer</h3>
                 <button>Contact</button>
              </div>
              </div>
          </div>
        </div>
       
      <Contact/>
      
    </div>

  
    </>
  )
}

export default About