import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Exploreplace } from '../Components/Exploreplace'
import { Hero } from '../Components/Hero'
import { Navbar } from '../Components/Navbar'
import { Popular } from '../Components/Popular'
import SignUp from '../Signup'
import { AllExPlace } from './AllExPlace'
import { ExPlace } from './ExPlace'
import { Place } from './Place'

export const Main = () => {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path='/explore' element={<AllExPlace/>}/>
        <Route path='/explore/:disslug' element={<ExPlace/>}/>
        <Route path=':disslug' element={<ExPlace/>}/>
        <Route path='/explore/:disslug/:slug' element={<Place/>}/>
        <Route path='/:disslug/:slug' element={<Place/>}/>
        <Route path=':slug' element={<Place/>}/>
      </Routes>
    </div>
    </BrowserRouter>
    
  )
}

