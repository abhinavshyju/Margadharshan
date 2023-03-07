import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../Search'

export const Navbar = () => {
  return (
    <div className='nav-bar'>
           <Link to='/hero'><span  className='logo'>MARGADHARSHAN</span></Link> 
           <Search/>
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
