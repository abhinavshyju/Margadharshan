import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='nav-bar'>
           <Link to='/'><span  className='logo'>MARGADHARSHAN</span></Link> 
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className='log-con'>
            <span className='login'>Signup | Login</span>
            </div>
        </div>
  )
}
