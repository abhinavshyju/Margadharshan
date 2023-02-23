import React from 'react'

export const Navbar = () => {
  return (
    <div className='nav-bar'>
           <a href='/'><span  className='logo'>MARGADHARSHAN</span></a> 
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
