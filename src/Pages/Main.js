import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Exploreplace } from '../Components/Exploreplace'
import { Hero } from '../Components/Hero'
import { Navbar } from '../Components/Navbar'
import { Popular } from '../Components/Popular'
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
        <Route path='/place' element={Place}
      </Routes>
    </div>
    </BrowserRouter>
    
  )
}



            {/* <Hero/> 
            <Popular/>
            <Exploreplace/>
        <Navbar/>
        <AllExPlace/>
        <ExPlace/>
        <Place/> */}