import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AllExPlace } from '../Pages/AllExPlace'
import { Exploreplace } from './Exploreplace'
import './Hero.css'
import { Navbar } from './Navbar'
import { Popular } from './Popular'

export const Hero = () => {
  return (
    <>  
    <div className='hero'>
        {/* <div className='nav-bar'>
            <span className='logo'>MARGADHARSHAN</span>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className='log-con'>
            <span className='login'>Signup | Login</span>
            </div>
        </div> */}
        <Navbar/>
        <div className='d-flex hero-sec '>
            <div className='hero-content'>
                <h1>Explore</h1>
                <h1>Beautiful</h1>
                <h1>World!</h1>
                <p>No one shall be subjected to arbitrary arrest, detention or exile. Everyone is entitled in full equality to a fair and public hearing by an independent and impartial tribunal, in the determination of his rights and obligations and of any criminal charge against him. No one shall be subjected to arbitrary interference with his privacy, family, home or correspondence, nor to attacks upon his honour and reputation. Everyone has the right to the protection of the law against such interference or attacks. </p>
            </div>
            <div className='hero-img'>
                <img src='https://img.freepik.com/premium-vector/tourist-couples-with-travel-bags-illustration_158784-885.jpg' alt='image'/>
            </div>
        </div>
        <div className='pop-list'>
            <div className='pop-container'>

            </div>
        </div>
            

        <h3 className='explore'>EXPLORE KERALA</h3>
        
    </div>
    <Popular/>
    <Exploreplace/>
  
    </>
    
  )
}
