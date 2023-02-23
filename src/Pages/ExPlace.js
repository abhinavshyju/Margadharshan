import React from 'react'
import './Place.css'
import { Navbar } from '../Components/Navbar'
import { Exploreplace } from '../Components/Exploreplace'

export const ExPlace = () => {
  return (
    <div>
        <>
        <Navbar/>
        <div className='pop'>
            <div className='card-container  '>
              <div className='place-data d-flex'>
                  <img src='https://images.livemint.com/img/2023/02/07/1600x900/kerala-tourism_1675753250452_1675753262214_1675753262214.jpg' alt='image'/>
                <div className='place-content'>
                  <h1>Place1</h1>
                  <p>discription</p>
                </div>
              </div>
              <h2>Explore</h2>
              <div className='place-container'>
            <div className='place-card'>
                <img src='https://images.livemint.com/img/2023/02/07/1600x900/kerala-tourism_1675753250452_1675753262214_1675753262214.jpg' alt='image'/>
                <h3>Place1</h3>
                <p>discription </p>
            </div>
            <div className='place-card'>
                <img src='https://images.livemint.com/img/2023/02/07/1600x900/kerala-tourism_1675753250452_1675753262214_1675753262214.jpg' alt='image'/>
                <h3>Place1</h3>
                <p>discription </p>
            </div>
            <div className='place-card'>
                <img src='https://images.livemint.com/img/2023/02/07/1600x900/kerala-tourism_1675753250452_1675753262214_1675753262214.jpg' alt='image'/>
                <h3>Place1</h3>
                <p>discription </p>
            </div>  
            <div className='place-card'>
                <img src='https://images.livemint.com/img/2023/02/07/1600x900/kerala-tourism_1675753250452_1675753262214_1675753262214.jpg' alt='image'/>
                <h3>Place1</h3>
                <p>discription </p>
            </div>  
            <div className='place-card'>
                <img src='https://www.w3schools.com/css/img_lights.jpg' alt='image'/>
                <h3>Place1</h3>
                <p>discription </p>
            </div>  
            <div className='place-card'>
                <img src='https://images.livemint.com/img/2023/02/07/1600x900/kerala-tourism_1675753250452_1675753262214_1675753262214.jpg' alt='image'/>
                <h3>Place1</h3>
                <p>discription </p>
            </div>  
        </div>
            </div>
        </div>
        
        </>
        
    </div>
  )
}
