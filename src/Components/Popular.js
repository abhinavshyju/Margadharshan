import React from 'react'
import { Route, Routes } from 'react-router-dom'

import './Popular.css'

export const Popular = () => {
    
  return (
    <div className='pop'>
        <div className='heading'>
            <h1>Popular Places</h1>
             <a href={`/explore`}><span>See all</span></a>
        </div>
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
        </div>
        <Routes>
            <Route/>
        </Routes>
        
    </div>
  )
}
