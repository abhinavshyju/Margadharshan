import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../Search'

export const Navbar = () => {
  return (
    <div className='nav-bar'>
           <Link to='/home'><span  className='logo'>MARGADHARSHAN</span></Link> 
           <Search/>
            <ul>
                <li>Home</li>
                <li><Link to="/about">About</Link> </li>
                <li>Contact</li>
            </ul>
            <div className='log-con'>
           <Link to='/'><span>Logout</span> </Link> 
            </div>
        </div>
  )
}
